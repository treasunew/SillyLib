# -*- coding:utf-8 -*-
# from email import header
# import random
import requests;
import json
import re
import os
import time
import random
import asyncio
from functools import partial
print = partial(print, flush=True)


taskname = '天选时刻 奖品详情'
""" 
Author: Treasunew
Modifier: NONE
Date: Sat July 10 08:24:30 UTC 2022
cron: 25 20 * * *
new Env('天选时刻奖品');
------------
环境变量说明
biliCookie 
浏览器打开并登录 bilibili 网站
登录成功后，访问 https://api.bilibili.com/x/web-interface/nav，按 F12 打开"开发者工具"，按 F5 刷新一下
在"开发者工具"面板中，点击 网络（Network），在左侧的请求列表中，找到名称为 nav 的接口，点击它
依次查找 Headers ——> RequestHeader ——> cookie，可以看到很长一串以英文分号分隔的字符串，复制整个这个cookie字符串（不要使用右键复制，请使用 Ctrl+C 复制，部分浏览器右键可能会进行 UrlDecode ）


PMODE: 推送模式 || PKEY: 具体推送格式填写（不带 [TG: ]，请用具体的值代替)
wx                [Server 酱: skey]
nwx               [新 Server 酱: skey]
tg                [TG: tg_bot_token@user_id]
qwx               [企业微信: touser-corpid-corpsecret-agentid 其中 touser 可填 @all，agenid 不填默认为 1000002]
pp                [PushPlus: push_plus_token]
off               [关闭推送]


"""




# 随机ua
def randomuserAgent():
    global uuid, addressid, iosVer, iosV, clientVersion, iPhone, area, ADID, lng, lat
    uuid = ''.join(random.sample(
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
         'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'z'], 40))
    addressid = ''.join(random.sample('1234567898647', 10))
    iosVer = ''.join(random.sample(["15.1.1", "14.5.1", "14.4", "14.3", "14.2", "14.1", "14.0.1"], 1))
    iosV = iosVer.replace('.', '_')
    clientVersion = ''.join(random.sample(["10.3.0", "10.2.7", "10.2.4"], 1))
    iPhone = ''.join(random.sample(["8", "9", "10", "11", "12", "13"], 1))
    area = ''.join(random.sample('0123456789', 2)) + '_' + ''.join(random.sample('0123456789', 4)) + '_' + ''.join(
        random.sample('0123456789', 5)) + '_' + ''.join(random.sample('0123456789', 4))
    ADID = ''.join(random.sample('0987654321ABCDEF', 8)) + '-' + ''.join(
        random.sample('0987654321ABCDEF', 4)) + '-' + ''.join(random.sample('0987654321ABCDEF', 4)) + '-' + ''.join(
        random.sample('0987654321ABCDEF', 4)) + '-' + ''.join(random.sample('0987654321ABCDEF', 12))
    lng = '119.31991256596' + str(random.randint(100, 999))
    lat = '26.1187118976' + str(random.randint(100, 999))
    UserAgent = ''
    if not UserAgent:
        return f'jdapp;iPhone;10.0.4;{iosVer};{uuid};network/wifi;ADID/{ADID};model/iPhone{iPhone},1;addressid/{addressid};appBuild/167707;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS {iosV} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/null;supportJDSHWK/1'
    else:
        return UserAgent

""" async def check(ck,ua):
    try:
        url = 'https://api.live.bilibili.com/xlive/web-ucenter/user/get_user_info'
        header = {
            "Host": "api.live.bilibili.com",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Cookie": ck,
            "User-Agent": ua,
            "Accept-Language": "zh-cn",
            "Accept-Encoding": "gzip, deflate",
        }
        result = requests.get(url=url, headers=header, timeout=2).text
        codestate = json.loads(result)
        if codestate['code'] == '-101':
            msg = "未登录"
            return {"code":-101,"message":msg}
        elif codestate['code'] == '0':
            nickName = codestate['data']['uname']
            return {'code': 0, 'name': nickName, 'ck': ck}
    except Exception as e:
        return {'code': 0, 'data': e}
 """

# 获取当前时间
def getCurrentTime():
    now = time.strftime("%H:%M:%S", time.localtime())
    return now



async def getRewardInfo(ua,ck,currentPage):
    url = 'https://api.live.bilibili.com/xlive/lottery-interface/v1/Anchor/AwardRecord?page={}'.format(currentPage)
    header = {
            "Host": "api.live.bilibili.com",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Cookie": ck,
            "User-Agent": ua,
            "Accept-Language": "zh-cn",
            "Accept-Encoding": "gzip, deflate",
        }
    response = requests.get(url=url,headers=header).text
    return json.loads(response)



async def getUserInfo(ua,ck):
    url = "https://api.bilibili.com/x/web-interface/nav"
    header = {
            "Host": "api.bilibili.com",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "User-Agent": ua,
            "Cookie": ck,
            "Accept-Language": "zh-cn",
            "Accept-Encoding": "gzip, deflate",
        }
    response = requests.get(url=url,headers=header).text 
    return json.loads(response)
     
""" def getMaxPages(ua,ck):
    url = "https://api.live.bilibili.com/xlive/lottery-interface/v1/Anchor/AwardRecord?page=1"
    header = {
            "Host": "api.bilibili.com",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "User-Agent": ua,
            "Cookie": ck,
            "Accept-Language": "zh-cn",
            "Accept-Encoding": "gzip, deflate",
        }
    response = requests.get(url=url,headers=header).text
    return json.loads(response) """




async def getNeededRewardInfo(ua,ck):
    url = f'https://api.live.bilibili.com/xlive/lottery-interface/v1/Anchor/AwardRecord?page=1'
    header = {
            "Host": "api.live.bilibili.com",
            "Accept": "*/*",
            "Connection": "keep-alive",
            "Cookie": ck,
            "User-Agent": ua,
            "Accept-Language": "zh-cn",
            "Accept-Encoding": "gzip, deflate",
        }
    response = requests.get(url=url,headers=header).text
    return json.loads(response)

    
#主程序
async def main():
    try:
        cks = os.environ["biliCookie"].split("@")
    except:
        with open('cklist.txt','r') as f:
            cks  = f.read().split('\n')
    if cks:
        print(f'{taskname}', flush=True)
        print(f'==================共{len(cks)}个账号=================')
        print(f'==================脚本执行- 北京时间(UTC+8)：{getCurrentTime()}=====================\n')
        for n,ck in enumerate(cks):
            ua = randomuserAgent()  # 获取ua
            pin = f'账号{n+1}'
            print(f'******开始【{pin}】*********\n')
            await asyncio.sleep(2)
            result = await getUserInfo(ua, ck) # 检测ck并返回相关信息
            if result['code'] == 0:
                print(f"[{getCurrentTime()} INF]"+" "+"【用户名】"+result['data']['uname'])
                print(f"[{getCurrentTime()} INF]"+" "+"【硬币】"+str(result['data']['money']))
                await asyncio.sleep(2)
            else:
                print(result['msg'])
                return
            await asyncio.sleep(2)    
            result = await getNeededRewardInfo(ua,ck)
            totalGift = result['data']['total_count']
            totalPages = result['data']['page_count']
            # print(totalPages)
            print(f"[{getCurrentTime()} INF]"+"  "+" 共获得"+str(totalGift)+"个奖品")            
            await asyncio.sleep(2)
            if result['code'] == 0:
                print(f"[{getCurrentTime()} INF] "+"  "+"开始列出奖品")
                #for currentPage in range(1,totalPages):
                # currentPage = 1
                    #result = await getRewardInfo(ua,ck,currentPage=currentPage)
                    #print(result)                                        
                for i in range(len(result['data']['list'])):
                        giftName  = result['data']['list'][i]['award_name']
                        giftAnchor = result['data']['list'][i]['anchor_name']
                        print(f"[{getCurrentTime()} INF]"+" "+f"【主播{i+1}】"+giftAnchor)                    
                        print(f"[{getCurrentTime()} INF]"+" "+f"【奖品{i+1}】"+giftName+"\n")
                        await asyncio.sleep(2)
                    
                
    else:
        print(f"请检查是否填写变量biliCookie")        
            
            
if __name__ == "__main__":
    # asyncio.run(main())
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())