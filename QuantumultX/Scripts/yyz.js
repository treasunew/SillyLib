/* 蒙牛营养值活动
*******************************
[rewrite_local]
# > 抓openid和id
^http[s]?:\/\/zaocan\.javamall\.cn\/zaocan-api\/member\/userMember url script-response-body https://mirror.945688.xyz/https://raw.githubusercontent.com/treasunew/SillyLib/main/QuantumultX/Scripts/yyz.js

[mitm]
hostname = zaocan.javamall.cn
*/

var response = $response.body;
res = JSON.parse(response);
id = res.data.id;
openid = res.data.openid;

var title = "蒙牛营养家";
var subtitle = "openid 和 id 获取成功";
var msg = 'id: '+ id + '\nopenid: ' +openid;
$notify(title, subtitle, msg);
$done()