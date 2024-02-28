import type { AxiosError } from "axios";
import axios from "axios";

export const errorHandler = (error: Error | AxiosError) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(
      //   "Response Error:",
      //   error.response.status,
      //   error.response.data
      // );
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // console.log("Request Error:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      // console.log("Axios Request Setup Error:", error.message);
    }
    return {
      message: error.response ? error.response.data.message : error.message,
      status: error.response ? error.response.status : error.code,
      reason: error.response ? error.response.data.reason : error.cause,
      name: error.name,
    };
  } else {
    // console.log("Non-Axios Error:", error.message);
    return { message: error.message, name: error.name, reason: error.cause };
  }
};
