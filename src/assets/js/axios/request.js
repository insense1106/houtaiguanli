import axios from "axios";

export function request(config) {
  // 根路径
  const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
    headers: "headers"
  });
  // 拦截器
  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      console.log(err);
    }
  );
  return instance(config);
}
