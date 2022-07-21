// [rule: 健康打卡]
//获取当前时间函数
function Time() {
    let globalDate = new Date();
    let currentTime = globalDate.toLocaleString();
    return currentTime;
}

var qq = GetUserID();
var CK = bucketGet('signck',qq);
//var param = bucketGet('signparam',qq);
if (CK == '') {
    sendText("状态:没有找到COOKIE"+"\n"+"时间:"+Time());
    main();
}else {
    Check();
    
}
var MYAPP = {};

function Check(){
    const url = 'https://gw.wozaixiaoyuan.com/health/mobile/health/getBatch'
    let userCk = bucketGet('signck',qq);
    rst = request({
        url:url,//必须
        method:"post",//get,post,put,delete,可选,默认get
        headers:{
            'User-Agent':' Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001423) NetType/WIFI Language/zh_CN',
            'JWSESSION':userCk,
            'content-type': 'application/x-www-form-urlencoded'
        },//可选
        // body:data.SWPU,//可选
        dataType:"json",//location=>重定向url,json=>尝试解析为对象,否则为body字符串,可选
        useproxy:false,//可选
    })//发送请求
    let status = rst.code
    if (status == 0) {
        signin();
    }else{
        sendText("状态:COOKIE失效，请更新"+"\n"+"时间:"+Time());
        main();
    }
}


function getBatcId(){
    const url = 'https://gw.wozaixiaoyuan.com/health/mobile/health/getBatch'
    let userCk = bucketGet('signck',qq);
    rst = request({
        url:url,//必须
        method:"post",//get,post,put,delete,可选,默认get
        headers:{
            'User-Agent':' Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001423) NetType/WIFI Language/zh_CN',
            'JWSESSION':userCk,
            'content-type': 'application/x-www-form-urlencoded'
        },//可选
        // body:data.SWPU,//可选
        dataType:"json",//location=>重定向url,json=>尝试解析为对象,否则为body字符串,可选
        useproxy:false,//可选
    })//发送请求
    let BatchId = rst.data.list[0].id
    return BatchId
}



function main() {
    sleep(1000);
    sendText("状态:请在30秒之内输入你的CCOOKIE"+"\n"+"时间:"+Time());
    inCk = input (30000);
    var arr = ['q','Q','退出'];
    if (inCk && inCk.length === 32) {
        bucketSet('signck',qq,inCk);
        sendText("状态:COOKIE已记录\n信息:如需更改请联系管理员"+"\n"+"时间:"+Time());
        //getParam();
        sleep(1000);
        sendText("状态:即将开始打卡"+"\n"+"时间:"+Time());
        signin();
    }else if (arr.indexOf(inCk) != -1) {} else {
        sendText("状态:输入有误，请重新开始录入"+"\n"+"时间:"+Time());
    }

}


/* function getParam() {
    sendText("请在30秒之内输入你的Param");
    inParam = input (30000);
    sendText("Param已记录\n如需更改请联系管理员");
    bucketSet('signparam',qq,inParam);
} */
function signin() {
    const punchUrl = "https://gw.wozaixiaoyuan.com/health/mobile/health/save?batch="+getBatcId()
    let userCk = bucketGet('signck',qq);
    let userName = GetUsername();
    const data = {
        "location" : "中国/四川省/达州市/万源市/河口镇//156/511781/156511700/511781104",
        "t4" : "未列为风险区",
        "t7" : "已全部接种（含加强针）",
        "t2" : "无不适症状",
        "locationType" : 0,
        "t5" : "正常",
        "t3" : "暑假已离校",
        "type" : 0,
        "t6" : "正常",
        "t1" : "[\"无下列情况\"]"
      }
      
    rst = request({
        url:punchUrl,//必须
        method:"post",//get,post,put,delete,可选,默认get
        headers:{
            'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.25(0x18001927) NetType/WIFI Language/zh_CN miniProgram/wxce6d08f781975d91',
            'JWSESSION':userCk,
            'content-type': 'application/json;charset=UTF-8',
            'Referer':"https://gw.wozaixiaoyuan.com/h5/mobile/health/index/health/detail?id="+getBatcId()
        },//可选
        body:data,//可选
        dataType:"json",//location=>重定向url,json=>尝试解析为对象,否则为body字符串,可选
        useproxy:false,//可选
    })//发送请求
    let code = rst.code;
    if (code == '0') {
        sendText("用户名:"+userName+"\n状态:打卡成功\n"+"时间:"+Time());
    }
    else {
        let msg = rst.message;
        sendText("状态:打卡失败\n"+"信息:"+msg+"\n"+"时间:"+Time());
    }
}