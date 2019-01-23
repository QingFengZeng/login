import axios from 'axios'
// ajax
function loginAjax(id, pwd) {
    return new Promise((resolve, reject) => {
        axios({
            url: 'https://www.sanoind.com/api/user/login',
            method: 'post',
            data: {
                id,
                pwd
            }
        })
            .then((res) => {
                console.log(res)
                resolve(res)
            })
            .then(
                authorizationAjax()
            )
            .catch((err) => {
                reject(err)
            })
    });
}

// 登录状态
function authorizationAjax() {
    return new Promise((resolve, reject) => {
        axios({
            url: 'https://www.sanoind.com/api/user/authorization',
            method: 'get',
        })
            .then((res) => {
                console.log(res)
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    });
}

export default loginAjax