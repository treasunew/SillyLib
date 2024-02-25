let body = $response.body;
let obj = JSON.parse(body);

obj['data']['isExchange'] = true;

mn = JSON.stringify(obj);
///console.log(mn);
$msg('蒙牛生活家', '', '点亮成功')
$done({body: mn});