import axios from "axios";
// create-react-app的官网代理参数，会把当前的所有ajax请求代理到下面配置的host域名，防止跨域发生。  link: https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development

// ajax
function loginAjax(id, pwd) {
  return new Promise((resolve, reject) => {
    axios({
      url: "/api/user/login",
      method: "post",
      data: {
        id,
        pwd
      }
    })
      .then(res => {
        console.log(res);
        resolve(res);
      })
      .then(authorizationAjax)
      .catch(err => {
        reject(err);
      });
  });
}

// 登录状态
function authorizationAjax() {
  return new Promise((resolve, reject) => {
    axios({
      url: "/api/user/authorization",
      method: "get"
    })
      .then(res => {
        console.log(res);
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export default loginAjax;
