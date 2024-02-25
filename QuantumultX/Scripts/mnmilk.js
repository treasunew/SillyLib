/* 
蒙牛兑奶，兑换提前点亮
*******************************
[rewrite_local]
# > 修改返回体，使按钮变亮
^http[s]?:\/\/mp-isv\.youzanyun\.com\/point\/item\/getItemDetail url script-response-body https://mirror.945688.xyz/https://raw.githubusercontent.com/treasunew/SillyLib/main/QuantumultX/Scripts/mnmilk.js
^http[s]?:\/\/m\.pailifan\.com\/xcx\/v2\/mall_v2_goods_detail url script-response-body https://mirror.945688.xyz/https://raw.githubusercontent.com/treasunew/SillyLib/main/QuantumultX/Scripts/mnmilk.js
^http[s]?:\/\/m\.pailifan\.com\/xcx\/v2\/exchange_order_confirm url script-response-body https://mirror.945688.xyz/https://raw.githubusercontent.com/treasunew/SillyLib/main/QuantumultX/Scripts/mnmilk.js

[mitm]
hostname = mp-isv.youzanyun.com, m.pailifan.com
*/
url = $request.url
u1 = "/point/item/getItemDetail"
u2 = "/xcx/v2/mall_v2_goods_detail"
u3 = "/xcx/v2/exchange_order_confirm"

var body = $response.body;
var obj = JSON.parse(body);

if (url.indexOf(u1) != -1){

	obj['data']['isExchange'] = true;
	body = JSON.stringify(obj);
    $notify("点亮人生", "蒙牛营养家", "点亮成功")
    
}else if (url.indexOf(u2) != -1){

	obj['data']['is_not_time_exchange'] = 0;
	obj['data']['spu']['exchange_limit']['exchange_type_value'] = 1;
	//obj['data']['spu']['exchange_channel'] = 0
	body = JSON.stringify(obj);
	
}else{
	//obj['flag'] = 0;
	//body = JSON.stringify(obj);
	$done();
}

$done(body);