// 安装 npm install axios
const axios = require('axios');

//make a request for a user with a given id
axios.get('./user?ID=12345')
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (error) {
    //    handle error
        console.log(error);
    })
    .then(function () {
        // always executed
        xxx
    });

//optionally the request above could also be done as
axios.get('/user', {
    params: {
        ID: 12345
    }
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        //always excuted
    });
// want to use async/await? add the 'async' keyword to your outer function/method
async function getUser() {
    try {
        const response = await axios.get('./user?ID=12345');
        console.log(response);
    }catch (e) {
        console.log(e);
    }
}

//POST request

axios.post('/user',{
    firstName: 'Fred',
    lastName: 'Flintstone'
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

//performing multiple concurrent requests

function getUserAccount() {
    return axios.get('./user/12345');
}
function getUserPermissions() {
    return axios.get('./user12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
    .then(axios.spread(function (acct, perms) {
        //both request are now complete
    }));
