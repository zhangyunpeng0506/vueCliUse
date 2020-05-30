import axios from 'axios'

export function request(config) { 
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //2.axios拦截器
  instance.interceptors.request.use(config => { 
    console.log(config);
    //a.比如config中的一些信息不符合服务器的要求

    //b.比如每次发送网络请求时，都希望在界面中显示一个请求图标

    //c.某些网络请求（比如登录（token）），必须携带一些特殊信息

    return config;  //拦截后要将config return出去
  }, err => { 
      console.log(err);
  });

  instance.interceptors.response.use(res => { 
    console.log(res);
    return res.data; //拦截后要将 res return 出去
  }, err => { 
      console.log(err);
  });

  //3.发送网络请求
  return instance(config)
}