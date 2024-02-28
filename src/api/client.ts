// import axios from "axios";
// import * as SecureStore from "expo-secure-store";

// const baseURL = "http://192.168.0.172:3000";

// const axiosClient = axios.create({
//   baseURL,
// });

// axiosClient.interceptors.request.use(
//   async (config) => {
//     const token = await SecureStore.getItemAsync("accessToken");
//     if (token) {
//       if (config?.headers) {
//         config.headers["Authorization"] = `Bearer ${token}`;
//       }
//     }
//     return config;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

// axiosClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       // console.log(error.response.data);
//       // console.log(error.response.status);
//       // console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//       // http.ClientRequest in node.js
//       // console.log("Request Error: ", error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       // console.log("Error: ", error.message);
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosClient;

import axios from "axios";
import { getItem, setItem } from "util/secureStore";

let failedQueue: {
  resolve: (value: unknown) => void;
  reject: (reason?: any) => void;
}[] = [];
let isRefreshing = false;
const BASE_URL = "http://192.168.0.172:3000";
const REFRESH_TOKEN_URL = "http://192.168.0.172:3000/auth/refreshToken";
const axiosClient = axios.create({
  baseURL: BASE_URL,
});

const processQueue = (error: any) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(true);
    }
  });

  failedQueue = [];
};

axiosClient.interceptors.request.use(
  async (config) => {
    const accessToken = await getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = "Bearer " + accessToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async (error) => {
   
    const originalRequest = error.config;
    // In "axios": "^1.1.3" there is an issue with headers, and this is the workaround.
    originalRequest.headers = JSON.parse(
      JSON.stringify(originalRequest.headers || {})
    );
   
    const refreshToken = await getItem("refreshToken");

    // If error, process all the requests in the queue and logout the user.
    const handleError = (error: any) => {
      processQueue(error);
      // logout();
      return Promise.reject(error);
    };
    // Refresh token conditions
    if (
      refreshToken &&
      error.response?.status === 401 &&
      error.response.data.message === "TokenExpiredError" &&
      originalRequest?.url !== REFRESH_TOKEN_URL &&
      originalRequest?._retry !== true
    ) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            return axiosClient(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }
      isRefreshing = true;
      const userId = await getItem("userId");
      originalRequest._retry = true;
      try {
      
        const response = await axiosClient.post(REFRESH_TOKEN_URL, {
          refreshToken: refreshToken,
          userId,
        });
        
        await Promise.all([
          setItem("accessToken", response.data.accessToken),
          setItem("refreshToken", response.data.refreshToken),
        ]);
        processQueue(null);
        return axiosClient(originalRequest);
      } catch (e) {
        return handleError(e);
      } finally {
        isRefreshing = false;
      }
    }

    // Refresh token missing or expired => logout user...
    if (
      error.response?.status === 401 &&
      error.response?.data?.message === "TokenExpiredError"
    ) {
      return handleError(error);
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
