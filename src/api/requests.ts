import axios from 'axios'
// import AsyncStorage from '@react-native-async-storage/async-storage'

// basic URL Prefix
const API_BASE_URL: string = 'https://api.wisecar.co/v1'

/** Axios POST action */
export const postRequest = async (data: any | null, suffix: string) => {
//   const token = await AsyncStorage.getItem('@user_Token')
//   console.log('Token: ' + token)
  console.log('POST: ' + API_BASE_URL + suffix)
  return axios.request({
    method: 'post',
    url: API_BASE_URL + suffix,
    data: data,
    headers: {
      /* user specific access token */
    //   access_token: token ? token : ''
    }
  })
}

/** Axios GET action */
export const getRequest = async (suffix: string) => {
//   const token = await AsyncStorage.getItem('@user_Token')
  console.log('GET: ' + API_BASE_URL + suffix)
  return axios.request({
    method: 'get',
    url: API_BASE_URL + suffix,
    headers: {
      /* user specific access token */
    //   access_token: token ? token : ''
    }
  })
}

/** Axios PUT action */
export const putRequest = async (data: any | null, suffix: string) => {
//   const token = await AsyncStorage.getItem('@user_Token')
//   console.log('Token: ' + token)
  console.log('PUT: ' + API_BASE_URL + suffix)
  return axios.request({
    method: 'put',
    url: API_BASE_URL + suffix,
    data: data,
    headers: {
      /* user specific access token */
    //   access_token: token ? token : ''
    }
  })
}

/** Axios DELETE action */
export const deleteRequest = async (suffix: string) => {
//   const token = await AsyncStorage.getItem('@user_Token')
//   console.log('Token: ' + token)
  console.log('DELETE: ' + API_BASE_URL + suffix)
  return axios.request({
    method: 'delete',
    url: API_BASE_URL + suffix,
    headers: {
      /* user specific access token */
    //   access_token: token ? token : ''
    }
  })
}
