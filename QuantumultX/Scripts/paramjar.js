/* 蒙牛 伊利
*******************************
[rewrite_local]
# > 抓openid和id
# > 抓openid和accesstoken
^http[s]?:\/\/zaocan\.javamall\.cn\/zaocan-api\/member\/userMember url script-response-body https://mirror.945688.xyz/https://raw.githubusercontent.com/treasunew/SillyLib/main/QuantumultX/Scripts/paramjar.js
^http[s]?:\/\/wx-camp-180-02-applet-api\.mscampapi\.digitalyili\.com\/home\/page\/get\/game\/open\/time url script-request-header https://mirror.945688.xyz/https://raw.githubusercontent.com/treasunew/SillyLib/main/QuantumultX/Scripts/paramjar.js
^http[s]?:\/\/wx-camp-180-02-applet-api\.mscampapi\.digitalyili.com\/home\/page\/get\/task\/red\/hint url script-request-header https://mirror.945688.xyz/https://raw.githubusercontent.com/treasunew/SillyLib/main/QuantumultX/Scripts/paramjar.js

[mitm]
hostname = zaocan.javamall.cn, wx-camp-180-02-applet-api.mscampapi.digitalyili.com
*/

var url = $request.url;


u1 = '/zaocan.javamall.cn/zaocan-api/member/userMember'
u2 = '/wx-camp-180-02-applet-api.mscampapi.digitalyili.com/home/page/get/task/red/hint'

if (url.indexOf(u1) != -1){
	var response = $response.body;
	res = JSON.parse(response);
	id = res.data.id;
	openid = res.data.openid;

	var title = "蒙牛营养家";
	var subtitle = "openId 和 id 获取成功";
	var msg = 'id: '+ id + '\nopenid: ' +openid;
	$notify(title, subtitle, msg);
	
}else if((url.indexOf(u2) != -1)){ // url.includes("?openId=")
	var headers = $request.headers;
	// console.log(`Headers: ${headers}`)
	var openId = url.match(/openId=([^&]*)/)[1];
	// console.log(`openId: ${openId}`);
	var accessToken = headers.access_token;
	// console.log(`accessToken: ${accessToken}`)
	var title = "伊利";
	var subtitle = "openId 和 accessToken 获取成功";
	var msg = `openId: ${openId}\naccessToken: ${accessToken}`;
	$notify(title, subtitle, msg);
	
}else{
	$done();
	
}

$done();
