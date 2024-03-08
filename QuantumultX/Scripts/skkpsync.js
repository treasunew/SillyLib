/**
 * @file: skkp.js
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
# > 同步环境变量到青龙
^http[s]?:\/\/qnyk\.qnzjzk\.cn\:9090\/applet\/wechat\/hasUnionId url script-request-header skkp.js
[mitm]
hostname=qnyk.qnzjzk.cn
**/

var host = "http://xxxxx";
var envName = "skkp";
var client_id = "xxxxx";
var client_secret = "xxxxxx";
var headers = $request.headers;
// console.log(JSON.stringify(headers))
var key = headers.userId;
// console.log(key)
var updateValue = headers.ykSession;

function getSysToken(client_id, client_secret) {
  let tokenEndPoint = `/open/auth/token?client_id=${client_id}&client_secret=${client_secret}`;
  let url = host + tokenEndPoint;
  // console.log(url);
  $task
    .fetch({
      url: url,
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(
      response => {
        let result = JSON.parse(response.body);
        // console.log(result);
        console.log(JSON.stringify(response.body));
        let tokenText = result.data.token;
        // console.log(tokenText);
        let tokenType = result.data.token_type;
        let token = `${tokenType} ${tokenText}`;
        // console.log(token);
        console.log("OpenAPIToken: " + token);
        getEnvs(token);
      },
      error => {
        console.log("获取OpenAPIToken失败: " + error);
        $done({});
      }
    );
}

function getEnvs(token) {
  let timestamp = Date.now();
  let envEndPoint = `/open/envs?searchValue=&t=${timestamp}`;
  let url = host + envEndPoint;

  $task
    .fetch({
      url: url,
      method: "GET",
      headers: {
        Authorization: `${token}`
      }
    })
    .then(
      response => {
        let data = JSON.parse(response.body);
        let envList = data.data;
        const result = envList.find(item => item.name == envName);
        // console.log(JSON.stringify(result));
        if (result) {
          console.log("获取の环境变量: " + JSON.stringify(result));
          updateEnv(token, result);
        } else {
          console.log("未找到指定の环境变量");
          $done({});
        }
      },
      error => {
        console.log("获取环境变量失败: " + error);
        $done({});
      }
    );
}

function updateEnv(token, result) {
  let updateEnvEndpoint = "/open/envs";
  let url = host + updateEnvEndpoint;
  let { remarks, value, name, id } = result;
  let hijack = { remarks, value, name, id };
  console.log("修改前：" + JSON.stringify(hijack));
  let formerValue = hijack.value;
  formerValue = removeDuplicate(formerValue);
  console.log("去重后の结果: " + formerValue)
  // let updateValue = 'success';
  let arr = formerValue.split("==");
  if (formerValue.includes(key)) {
    for (let i = 0; i < arr.length; i++) {
      let subArr = arr[i].split("@");
      if (subArr[0] == key) {
        subArr[1] = updateValue;
        arr[i] = subArr.join("@");
        break;
      }
    }
    let title = "善康科普";
    let subtitle = "";
    let msg = `${key}已更新`;
    $notify(title, subtitle, msg);
  } else {
    arr.push(`${key}@${updateValue}`);
    console.log(`${key}@${updateValue}添加成功`);
    let title = "善康科普";
    let subtitle = "";
    let msg = `${key}已添加`;
    $notify(title, subtitle, msg);
  }

  hijack.value =removeDuplicate(arr.join("=="));
  console.log("修改后：" + JSON.stringify(hijack));

  $task
    .fetch({
      url: url,
      method: "PUT",
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(hijack)
    })
    .then(
      response => {
        console.log("更新环境变量の结果：" + response.body);
        $done({});
      },
      error => {
        console.log("更新环境变量失败: " + error);
        $done({});
      }
    );
}

function removeDuplicate(str) {
   const fields = str.split("==");
   // 初始化一个对象来存储每个前缀最后一次出现的字段
   const latestPrefixes = {};

   // 遍历字段数组
   fields.forEach(field => {
       // 获取当前字段的前缀（"@"之前的部分）
       const prefix = field.split("@")[0];
       // 更新这个前缀对应的字段为当前字段，无论是否遇到过这个前缀
       latestPrefixes[prefix] = field;
   });

   // 从latestPrefixes对象中提取值组成最终结果的字段数组
   const resultFields = Object.values(latestPrefixes);

   // 使用分隔符将处理后的字段数组重新组合成字符串
   const result = resultFields.join("==");
   return result;
}

// 开始执行脚本
getSysToken(client_id, client_secret);
