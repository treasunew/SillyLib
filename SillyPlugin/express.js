// [rule: ^快递$]
const api = 'https://route.showapi.com/64-19?showapi_appid=75497&showapi_sign=7276c8f4cbc14155aa3e025b73eff0ca';
var myDate = new Date();
var Time = myDate.toLocaleString( );
function express() {
    sendText("[Tips]请输入你的快递单号"+"\n[Tips]请在10秒之内输入快递单号"+"\n[Tips]输入q退出当前会话"+"\n[当前时间] "+Time);    
    var num = input(10000);
    if (num == ''){
        sendText('已超时，退出当前会话')
        return 
    }
    if (num == 'q') {
        sendText('已取消会话')
        return
    }
    //if (num != ''){}
    sleep(6500);
    let orderid = "com=auto&nu="+num+"&phone="+num;
    var result =request({
        url:api,//必须
        method:"post",//get,post,put,delete,可选,默认get
        //headers:{},//可选
        body:orderid,//可选
        dataType:"json",//location=>重定向url,json=>尝试解析为对象,否则为body字符串,可选
        useproxy:false,//可选
    })
    let data_formal = result.showapi_res_body.data;
    //获取expresslogo
    let urllogo =result.showapi_res_body.logo;
    //倒叙数组
    let data = data_formal.reverse();
    let steplength = data.length;
    var generalmsg = '';
    for (let i = 0;i<steplength;i++){

        var generalmsg = generalmsg + "["+data[i].time+"]\n"+data[i].context+"\n";
    }
    sendText(image(urllogo) +generalmsg+"\n[当前时间] "+Time+"\n[查询状态] "+result.showapi_res_body.msg);

}
express();
