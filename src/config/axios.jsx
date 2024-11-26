import axios from "axios";

const url = 'http://localhost:8080/'
export const instanceMultipart = axios.create({
  baseURL: 'url',
   headers: {
    'content-type': 'multipart/form-data',
}
// ,
// auth: {
//   username: 'janedoe',
//   password: 's00pers3cret'
// },
});
const api = axios.create({
  baseURL: "http://localhost:8080/", 
  timeout: 10000, 
  headers: {
    "Content-Type": "application/json",
    // Accept: "application/json",
  },
});


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error)

    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error)
    if (error.response && error.response.status === 401) {
      // window.location.href = "/login";
      
    }
    return Promise.reject(error);
  },
);

export default api;


