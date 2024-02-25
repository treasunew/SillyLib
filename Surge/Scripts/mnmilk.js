url = $request.url
u1 = "/point/item/getItemDetail"
u2 = "/xcx/v2/mall_v2_goods_detail"
u3 = "/xcx/v2/exchange_order_confirm"

var body = $response.body;
var obj = JSON.parse(body);

if (url.indexOf(u1) != -1){

	obj['data']['isExchange'] = true;
	body = JSON.stringify(obj);

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
$notification.post("点亮人生", "蒙牛营养家", "点亮成功")
$done({body: body});