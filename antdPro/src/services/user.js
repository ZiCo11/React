import request from '@/utils/request';

export async function query() {
  return request('http://hn.uwjx.com:8080/uwjx-iot-api/account/login', {
    username: values.userName,
    password: values.password,
  });
}

export async function queryCurrent() {
  return request('/api/currentUser');
}
