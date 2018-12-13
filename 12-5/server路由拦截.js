// 处理axios跨域问题
import axios from 'axios';
//取消请求
const CancelToken = axios.CancelToken;

axios.create({
    timeout: 15000, // 请求超时时间
    header: {
        'Content-rype': 'application/x-www-form-urlencoded',
    },
});

//开始请求设置，发起拦截处理
axios.interceptors.request.use((config) => {
    // 得到参数中的requestName字段，用于决定下次发起请求，取消相应的，相同字段的请求
    // post和get请求方式的不同，使用三木运算处理
    const requestName = config.method === 'post' ? config.data.requestName : config.params.requestName;
    // 判断，如果这里拿到上一次的requestName，就取消上一次的请求
    if (requestName){
        if (axios[requestName] && axios[requestName].cancel){
            axios[requestName].cancel();
        }
        config.cancelToken = new CancelToken((c) => {
            axios[requestName] = {};
            axios[requestName].cancel = c;
        });
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// response 拦截器
axios.interceptors.response.use(
    (response) => {
        const res = response.data;

        if(res.message === 'success') {
            return response.data;
        }
    //    return Promise.reject(error);
    },
    (error) =>{
        return Promise.reject(error);
    }
);
