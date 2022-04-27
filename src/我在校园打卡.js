// [rule: ^打卡$]
// [cron: 30 10 * * *] 定时任务
// [admin: false] 是否只允许管理员使用
const { getStore , storeUser} = require('../utils/file');
//可加入 , storeUser方法
//获取当前时间函数
function Time() {
    let GlobalDate = new Date();
    let CurrentTime = GlobalDate.toLocaleString();
    return CurrentTime;
}

/* 


1. 实现使用对象来存储我们打卡的数据
2. 将用户输入的数据用json进行存储，通过GetUserID()获取发信人的id和他发送的数据进项绑定，需要时再读取
3. 然后让他们自己选择学校或者自己添加数据进行打卡
4. 他们发送的打卡数据需要进行utf-8编码再存储
5. 再输入Cookie进行操作
6. 需要自己抓包，不会的话就自己百度

 */

/* const UserData = {
    swpu:"answers=%5B%220%22%2C%220%22%2C%220%22%2C%220%22%2C%222%22%2C%220%22%2C%221%22%2C%221%22%2C%220%22%2C%221%22%5D&latitude=30.825140245225693&longitude=104.18697509765624&country=%E4%B8%AD%E5%9B%BD&city=%E6%88%90%E9%83%BD%E5%B8%82&district=%E6%96%B0%E9%83%BD%E5%8C%BA&province=%E5%9B%9B%E5%B7%9D%E7%9C%81&township=%E6%96%B0%E9%83%BD%E8%A1%97%E9%81%93&street=%E5%A4%A7%E5%AD%A6%E8%B7%AF&areacode=510114"
} */
const punchUrl = 'https://student.wozaixiaoyuan.com/health/save.json'
//let userID = GetUserID();
function Punch() {
    const localData = getStore();
    if (localData.users.length = '0') {
        sendText("[Tips]请输入您的打卡数据\n"+"[Tips]输入q退出当前会话\n"+"[当前时间]"+Time())

    var userDataFormal =input(10000);
    let UserData = enencodeURI(userDataFormal);
    while (UserData == ''){
        sendText('已超时，退出当前会话')
        return 
    }
    while (UserData == 'q') {
        sendText('已取消会话')
        return
    }
    sendText("[Tips]请输入您的COOKIE\n"+"[Tips]输入q退出当前会话\n"+"[当前时间]"+Time())
    let Cookie = input(10000);
    if (Cookie == ''){
        sendText('已超时，退出当前会话')
        return 
    }
    if (Cookie == 'q') {
        sendText('已取消会话')
        return
    }
    storeUser(userID,UserData,Cookie);
    rst = request({
        url:punchUrl,//必须
        method:"post",//get,post,put,delete,可选,默认get
        headers:{
            'User-Agent':' Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001423) NetType/WIFI Language/zh_CN',
            'JWSESSION':Cookie,
            'content-type': 'application/x-www-form-urlencoded'
        },//可选
        body:UserData.swpu,//可选
        dataType:"json",//location=>重定向url,json=>尝试解析为对象,否则为body字符串,可选
        useproxy:false,//可选
    })//发送请求
    let code = rst.code;
    if (code == '0') {
        sendText("[Tips]打卡成功\n"+"[当前时间]"+Time());
    }else{
        let msg = rst.message;
        sendText("[Tips]打卡失败\n"+"[Tips]"+msg+"\n[当前时间]"+Time());
    }
} 
    else{
        let existData = getStore();
        existRst = request({
            url:punchUrl,//必须
            method:"post",//get,post,put,delete,可选,默认get
            headers:{
                'User-Agent':' Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.20(0x18001423) NetType/WIFI Language/zh_CN',
                'JWSESSION':existData.users[0].userCK,
                'content-type': 'application/x-www-form-urlencoded'
            },//可选
            body:existData.users[0].userData,//可选
            dataType:"json",//location=>重定向url,json=>尝试解析为对象,否则为body字符串,可选
            useproxy:false,//可选
        })//发送请求
        let code = existRst.code;
        if (code == '0') {
            sendText("[Tips]打卡成功\n"+"[当前时间]"+Time());
        }else{
            let msg = existRst.message;
            sendText("[Tips]打卡失败\n"+"[Tips]"+msg+"\n[当前时间]"+Time());
        }
    }


    
    

}
Punch();