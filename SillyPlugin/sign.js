// [rule: 校园 ?]
var CK = '你的CK';
var param = 'answers=["0","0","0","2","0","1","1","0"]&latitude=31.775354385375977&longitude=107.56233215332031&country=%E4%B8%AD%E5%9B%BD&city=%E8%BE%BE%E5%B7%9E%E5%B8%82&district=%E4%B8%87%E6%BA%90%E5%B8%82&province=%E5%9B%9B%E5%B7%9D%E7%9C%81&township=%E6%B2%B3%E5%8F%A3%E9%95%87&street=&areacode=511781';

//var status = 'keep-alive';
//var host = 'student.wozaixiaoyuan.com';
var UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.10(0x18000a2a) NetType/WIFI Language/zh_CN";
function sign(){
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    // var Header = {
    //     Connection:"keep-alive",
    //     Host:"student.wozaixiaoyuan.com",
    //     "User-Agent":'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    //     JWSESSION:CK
    // };
    var xhr = new XMLHttpRequest();
    xhr.open("POST","https://student.wozaixiaoyuan.com/health/save.json",true);//初始化http请求
    //设置请求参数
    //方法的第一个参数 header 大小写不敏感，即可以写成content-type，也可以写成Content-Type，甚至写成content-Type;
    //setRequestHeader必须在open()方法之后，send()方法之前调用，否则会抛错；
    //setRequestHeader可以调用多次，最终的值不会采用覆盖override的方式，而是采用追加append的方式。
    xhr.setRequestHeader("JWSESSION", CK);
    //xhr.setRequestHeader('Connection', status);
    //xhr.setRequestHeader('Host', host);
    xhr.setRequestHeader("User-Agent", UA);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
    //xhr.setRequestHeader("Referer","https://servicewechat.com/wxce6d08f781975d91/183/page-frame.html")
    //xhr.setRequestHeader("Accept-Encoding","gzip,compress,br,deflate")
    xhr.send(param);
    xhr.onreadystatechange = function(){   
        if(xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText+"\n打卡成功啦~");
          }                                  
        }   
    //sendText(xhr.responseText);
    //提交表单后，服务端收到的数据是乱码
    
}
sign();