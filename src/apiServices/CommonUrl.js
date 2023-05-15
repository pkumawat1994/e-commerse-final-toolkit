import axios from "axios";
import { toast } from "react-toastify";
const CommonUrl = axios.create({
  baseURL: "https://ecom-vkxe.onrender.com",
});

CommonUrl.interceptors.request.use((config) => {
  var token = localStorage.getItem("userToken");
  var Admintoken = localStorage.getItem("adminToken");
  console.log("ad", Admintoken);
  console.log("tk", token);

  config.headers["Authorization"] = `Bearer ${Admintoken ? Admintoken : token}`;
  // CommonUrl.request.headers.common.Authorization = `Bearer ${token}`;

  return config;
});

CommonUrl.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      toast.error(error.response.data.error);
    } else if (error.response.status === 404) {
      toast.error(error.response.data.error || "Not found");
    } else if (error.response.status === 400) {
      toast.error(error.response.data.error);
    }
    return Promise.reject(error);
  }
);

export default CommonUrl;
