/**
 * @file: skkpsync.js
 * @date: 2024.3.2
 * @param {string} host - 青龙地址，示例；http://12.13.14.15:5700 [必填]
 * @param {string} userName - 青龙面板用户名 [x]
 * @param {string} passWord - 青龙面板用户密码 [x]
 * @param {string} envName - 对应的变量名，这里是skkp [必填]
 * @param {string} client_id - 青龙面板OpenApi的id，可去系统设置-应用设置生成 [必填]
 * @param {string} client_secret - 青龙面板OpenApi的秘钥，可去系统设置-应用设置生成 [必填]
 * @description: 实现圈X获取数据添加或更新到青龙
===========================================
[rewrite_local]
[mitm]
 */

const axios = require('axios');

var host = "http://********";
var userName = "";
var passWord = "";
var envName = "sskp";
var client_id = "";
var client_secret = "";

function getSysToken(client_id, client_secret) {
  return new Promise((resolve, reject) => {
    let tokenEndPoint = `/open/auth/token?client_id=${client_id}&client_secret=${client_secret}`;
    let url = host + tokenEndPoint;
    axios.get(url, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(resp => {
      let data = resp.data;
      let tokenText = data.data.token;
      let tokenType = data.data.token_type;
      let token = `${tokenType} ${tokenText}`;
      console.log(token);
      resolve(token);
    }).catch(error => {
      reject(error);
    });
  });
}

function getToken(userName, passWord) {
  return new Promise((resolve, reject) => {
    let tokenEndPoint = "/open/user/login";
    let url = host + tokenEndPoint;
    let body = {
      username: userName,
      password: passWord
    };
    axios.post(url, body, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(resp => {
      let data = resp.data;
      let token = data.data.token;
      console.log(token);
      resolve(token);
    }).catch(error => {
      reject(error);
    });
  });
}

function getEnvs(token) {
  return new Promise((resolve, reject) => {
    let timestamp = Date.now();
    let envEndPoint = `/open/envs?searchValue=&t=${timestamp}`;
    console.log(envEndPoint);
    let url = host + envEndPoint;
    axios.get(url, {
      headers: {
        Authorization: `${token}`,
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4577.63 Safari/537.36"
      }
    }).then(resp => {
      let data = resp.data;
      let envList = data.data;
      const result = envList.find(item => item.name == `${envName}`);
      console.log(result);
      resolve(result);
    }).catch(error => {
      reject(error);
    });
  });
}

function updateEnv(token, result) {
  let updateEnvePonit = "/open/envs";
  let url = host + updateEnvePonit;
  let { remarks, value, name, id } = result;
  let hijack = { remarks, value, name, id };
  console.log('修改前：', hijack)
  let formerValue = hijack.value;
  let key = '1123';
  let updateValue = 'success';
  let arr = formerValue.split("==");
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i].split("@");
    if (subArr[0] == key) {
      subArr[1] = updateValue;
      arr[i] = subArr.join("@");
      break;
    }
  }
  let str = arr.join("==");
  hijack.value = str;
  console.log('修改后：', hijack)

  axios.put(url, hijack, {
    headers: {
      "Authorization": `${token}`,
      "Content-Type": "application/json"
    }
  }).then(resp => {
    let data = resp.data;
    console.log('修改结果：', data);
  }).catch(error => {
    console.log(error);
  });
}

// Example usage
getSysToken(client_id, client_secret)
  .then(token => {
    return getEnvs(token)
      .then(result => [token, result]);
  })
  .then(([token, result]) => {
    updateEnv(token, result);
  })
  .catch(err => console.log(err));


