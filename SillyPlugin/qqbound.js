// [rule: Q绑 ?]
const qqurl = 'https://zy.xywlapi.cc/qqapi?qq=';
var QQnum = param(1);
function Inquire() {
    var result = request({
        url:qqurl+QQnum,
        "dataType":"json"
    })
    let Phone = result.phone;
    let Area = result.phonediqu;
    let status = result.status;
    var myDate = new Date();
    var Time = myDate.toLocaleString( );
    switch(status){
        case 200:
            sendText("查询状态: "+result.message+"\n手机号: "+Phone+"\n区域: "+Area+"\n当前时间: "+Time);
            break;
        case 500:
            sendText("查询状态: "+result.message+"\n当前时间: "+Time);
            break;
        default:
            sendText(result);
        }
    
}

Inquire();