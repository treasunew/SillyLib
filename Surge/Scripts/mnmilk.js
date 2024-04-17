url = $request.url
u1 = "/point/item/getItemDetail"
u2 = "/xcx/v2/mall_v2_goods_detail"
u3 = "/xcx/v2/exchange_order_confirm"

var body = $response.body;
var obj = JSON.parse(body);
var character = '商品已被抢光啦';

if (url.indexOf(u1) != -1){

	obj['data']['isExchange'] = true;
	body = JSON.stringify(obj);
    $notification.post("点亮人生", "蒙牛营养家", "点亮成功");

}else if (url.indexOf(u2) != -1){

	obj['data']['is_not_time_exchange'] = '';
	obj['data']['status'] = 4;
	body = JSON.stringify(obj);
	
}else{
	if (obj['msg'].indexOf(character) != -1){
		obj['flag'] = 0;
	}
	body = JSON.stringify(obj);
}

$done({body: body});