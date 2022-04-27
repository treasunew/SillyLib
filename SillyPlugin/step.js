// [rule: ^刷步$]
// 随机步数
// var min = 30000;
// var max = 50000;
// var step = parseInt(Math.random()*(max-min+1)+min,10);
// //console.log(step);
// var num = param(1);
// var pwd = param(2);
//var step = param(3);

//获取当前时间函数
function Time() {
    let GlobalDate = new Date();
    let CurrentTime = GlobalDate.toLocaleString();
    return CurrentTime;
}

//主程序
function step() {
    sendText("[Tips]请输入登录手机号,请在5秒之内输入\n"+"[Tips]输入q退出当前会话"+"\n[当前时间] "+Time())
    var num = input(10000);
    if (num == ''){
        sendText('已超时，退出当前会话')
        return 
    }
    if (num == 'q') {
        sendText('已取消会话')
        return
    }
    sleep(500);
    sendText("[Tips]请输入密码,请在5秒之内输入"+"\n[Tips]输入q退出当前会话"+"\n[当前时间] "+Time())
    var pwd = input(10000);
    if (pwd == ''){
        sendText('已超时，退出当前会话')
        return 
    }
    if (pwd == 'q') {
        sendText('已取消会话')
        return
    }
    sleep(500);
    sendText("[Tips]请输入你想刷的步数\n[Tips]在10000-99988之间,请在5秒之内输入"+"\n[Tips]输入q退出当前会话"+"\n[当前时间] "+Time())
    var step = input(10000);
    if (step == ''){
        sendText('已超时，退出当前会话')
        return 
    }
    if (step == 'q') {
        sendText('已取消会话')
        return
    }
    sleep(500);
var result = request({
    url:"https://api.kit9.cn/api/milletmotion/?mobile="+num+"&password="+pwd+"&step="+step,
    "dataType": "json"
})

    if(result.code == 200 ){
        sendText("[状态] "+result.msg+"\n[当前时间]"+Time())
    }
    else{
        sendText("[状态] "+result.data+"\n[当前时间]"+Time())
    }

}
step()
