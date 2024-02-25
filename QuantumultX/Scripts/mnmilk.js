/* 
蒙牛兑奶
*******************************
[rewrite_local]
# > 修改返回体，使按钮变亮
^http[s]?:\/\/mp-isv\.youzanyun\.com\/point\/item\/getItemDetail url script-response-body https://mirror.945688.xyz/https://raw.githubusercontent.com/treasunew/SillyLib/main/QuantumultX/Scripts/mnmilk.js 

[mitm]
hostname = mp-isv.youzanyun.com
*/
var body = $response.body;
var obj = JSON.parse(body);

obj['data']['isExchange'] = true;

body = JSON.stringify(obj);
//console.log(body)

$notify('蒙牛营养家', '商品点亮工具', '点亮成功')
$done(body);