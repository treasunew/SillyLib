/* 霸王茶姬
[rewrite_local]
# > 替换token，达到换账号的功能 自己手动修改token的值
^http[s]?:\/\/qmwebapi\.qmai\.cn\/web\/seller\/oauth\/flash-sale-login.*$ url script-request-body https://raw.githubusercontent.com/treasunew/SillyLib/main/QuantumultX/Scripts/bwtea.js
[mitm]
hostname = qmwebapi.qmai.cn
*/

// 在此填写你的ck/token
const tk = ''

var body = $response.body
var obj = JSON.parse(body)

obj['data']['token'] = tk
body = JSON.stringify(obj)

console.log(body)
$done(body)