import axios from "axios";

const url = 'http://localhost:8080/'
const instanceMultipart = axios.create({
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



export default instanceMultipart;