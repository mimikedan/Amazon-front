import axios from 'axios'

const instance = axios.create({
  // baseURL: "http://127.0.0.1:5001/fir-f9efa/us-central1/api",
  // baseURL: "http://127.0.0.1:5000",
  baseURL: "https://amazon-backend-rlc9.onrender.com/",
});

export default instance;
