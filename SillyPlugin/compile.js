var myDate = new Date();
var Time = myDate.toLocaleString();
console.log(Time)
// [rule: ^demo(.*)$] 使用正则匹配,括号中为期望匹配的值
// [rule: demo ?] 使用问号匹配
// [rule: demo] 直接匹配
// [cron: 36 11,17 * * *] 定时任务
// [admin: true] 是否只允许管理员使用
// [disable: false] 是否禁用
// [priority: 10] 匹配优先级
// [server: 1 ] 如果不指定rule和cron时,设置为非空则指定为一个空服务,否则这个js不会加载
//上下文获取
param(n)//获取rule中期望捕获的第n个字符串,中文需要使用 encodeURI(param(n))
ImType()//聊天来源类型如:qq,wx等,其中fake为特殊调用可能为cron调用
GetUserID()//发送人用户id
GetUsername()//发送人昵称
GetChatID()//群号
GetChatname()//群名
GetContent()//获取接受到的消息
isAdmin()//发送人是否管理员
//系统功能相关
cancall(name)//返回特殊调用的函数
call(name,value)//特殊调用
Debug(log)//打印日志
sleep(millisecond)//休眠
GroupBan(uid, time)//群禁言,需要在群聊才可用
GroupKick(uid, reject)//群踢人,reject为是否拉黑名单,需要在群聊才可用
request({
    url:"",//必须
    method:"",//get,post,put,delete,可选,默认get
    headers:{},//可选
    body:"",//可选
    dataType:"",//location=>重定向url,json=>尝试解析为对象,否则为body字符串,可选
    useproxy:false,//可选
})//发送请求
//存储相关 sillyGirl存储结构为 {mainKey1:{key1:value,key2:value},mainKey2:{key1:value,key2:value}}}
bucketGet(mainKey,key)//取值
bucketSet(mainKey,key,value)//存值
bucketKeys(mainKey)//获取所有key名称
get(key)//同bucketGet("otto",key)
set(key,value)//同bucketSet("otto",key,value)
//消息相关
input(time /*[,str]*/)//等待下一个消息,str不为空时可接受其他群的消息 str可选
breakIn(str)//生成一个新的消息向下传递,可以被所有命令处理(包括当前js,所以需要防止递归)
Continue()//消息继续向下传递，可以被其他命令处理
Delete()//撤回接受到的这条消息
image(string)//图片地址转可拼接消息字符串
push({
    imType:string,//发送到指定渠道,如qq,wx,必须有
    userID:"",//groupCode不为0时为@指定用户,可选
    groupCode:"",//可选
    content:string,//发送消息
    })//给指定im发送消息
notifyMasters(string)//通知管理员
sendText(string)//发送文本
sendImage(url)//发送图片
sendVideo(url)//发送视频



//快手COOKIE
kpn=NEBULA; kpf=ANDROID_PHONE; userId=1703587123; did=ANDROID_d20e0f976406a1f7; c=XIAOMI; ver=10.2; appver=10.2.10.2930; language=zh-cn; countryCode=CN; sys=ANDROID_9; mod=Xiaomi%28Redmi+Note+7+Pro%29; net=WIFI; deviceName=Xiaomi%28Redmi+Note+7+Pro%29; isp=; ud=1703587123; did_tag=7; egid=DFP84F3499D49EC149D8836E4AAAF9F5C3220D655C6D36CE2774E1CB97F5699B; kcv=1455; app=0; bottom_navigation=true; oDid=TEST_ANDROID_d20e0f976406a1f7; android_os=0; boardPlatform=sm6150; androidApiLevel=28; newOc=XIAOMI; slh=0; country_code=cn; nbh=130; hotfix_ver=; did_gt=1647149943198; keyconfig_state=2; max_memory=128; sid=28ce7e79-3382-4002-a799-431302c37cac; cold_launch_time_ms=1649474962512; oc=XIAOMI; sh=2340; app_status=3; ddpi=440; deviceBit=0; browseType=3; power_mode=0; socName=Qualcomm+Snapdragon+6150; is_background=0; sw=1080; ftt=; apptype=22; abi=arm64; userRecoBit=0; device_abi=arm64; totalMemory=5657; grant_browse_type=AUTHORIZED; iuid=; rdid=ANDROID_e6281d517eddc036; sbh=80; darkMode=false; kuaishou.api_st=Cg9rdWFpc2hvdS5hcGkuc3QSoAH1VKlfcM9ox83EF3OuDAWduIuYJ_oyJ1vsUb0BfRZfcj4VvtVggWR8Ko1wFfcxSnYHjaJcVNB4yrUuH5J0p5R6aFEp-gDENIAdnvUZMJmhCXHtMcbcbpmt2NL1VNbaodLS1LLeIA2y0ZMhaDVFKpzyHlCP4q9l-YN4MyVB7FKvRJqszVSAeCfzlFeluYTi57whjDsk7gTTA_OaXvnraEVzGhL608FrZ2RKEaX4x5mnqMPZWrYiICqa2RXJ1x5gXcaf3J2kOhOmMvxDLcJgOr6DhKPBD_TjKAUwAQ; token=Cg9rdWFpc2hvdS5hcGkuc3QSoAH1VKlfcM9ox83EF3OuDAWduIuYJ_oyJ1vsUb0BfRZfcj4VvtVggWR8Ko1wFfcxSnYHjaJcVNB4yrUuH5J0p5R6aFEp-gDENIAdnvUZMJmhCXHtMcbcbpmt2NL1VNbaodLS1LLeIA2y0ZMhaDVFKpzyHlCP4q9l-YN4MyVB7FKvRJqszVSAeCfzlFeluYTi57whjDsk7gTTA_OaXvnraEVzGhL608FrZ2RKEaX4x5mnqMPZWrYiICqa2RXJ1x5gXcaf3J2kOhOmMvxDLcJgOr6DhKPBD_TjKAUwAQ; __NSWJ=jrXD1ZUEeKDaSfw8KRnJSsT4JyLgvRoPqkyCMbcS2ZRW99jiquu4YC5ZtDJa%2F6k2AAAAAw%3D%3D; client_key=2ac2a76d; kuaishou.h5_st=Cg5rdWFpc2hvdS5oNS5zdBKQAcdQVDU8G4ohpRvn2IUwjaPbrrNKLzjEkKcPambBkn_MAUGhVJ8UJ3nlZ4ULMvsw21m0XZIH-ssEyOhW6eTq2C9XhZA_0kHOO9h_FxfkwqDFq5wUnNUCgE-uOMsXjI86ULa43Mw76oF-FlYJkE_eq2Lk014Iil4Boui8uOvW4wsE9ZMRMVu9uCGraOZj7NiWBRoSORtdXpIejLJWWsAD9TbijOAxIiCpEiVLC4GHkoMWQ6FXzd8K6bBbJXyykiUiA8cL_am6vygFMAE