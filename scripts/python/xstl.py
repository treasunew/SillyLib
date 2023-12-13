import requests
from datetime import datetime
import sys
import os
import time
import re
import json

""" 
Author: 羊毛出在羊身上
Date: 2023.12.02
cron: 0 9 * * *
new Env('潇洒桐庐')
--------------------
环境变量: xstlck 示例: channelid#userid#sessionid
多账号: & 或者 换行
"""
# 获取脚本所在的目录
script_directory = os.path.dirname(os.path.abspath(__file__))
# 切换当前工作目录到脚本所在的目录
os.chdir(script_directory)


def get_env(env, default="", output=True):
    def no_env():
        if output:
            print(f"[WARN] 未读取到{env}, 请在环境变量中添加xstlck")
            sys.exit(0)
        return default
    return os.environ.get(env) if os.environ.get(env) else no_env()

def get_now():
    now_time = datetime.now()
    formated_time = now_time.strftime("%Y-%m-%d %H:%M")
    return formated_time

# 处理无效控制字符的函数
def clean_invalid_chars(match):
    char = match.group(0)
    if char == '\\/':
        return '/'
    return ''
        
class XSTL:
    def __init__(self, cookie, num):
        self.cookies = cookie.split('#')
        self.num = num
        self.channelid = self.cookies[0].split('=')[1]
        self.userid = self.cookies[1].split('=')[1]
        self.sessionid = self.cookies[2].split('=')[1]

    def get_all_info(self):
        print(f"\n----------[账号{self.num}]开始获取阅读信息----------")
        
        url = 'https://wxapi.hoolo.tv/event/dtqp/index.php?s=/home/TmApi/getUserInformation&accountId=' + self.userid + '&type=jsonp'

        headers = {
            'User-Agent': "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;;xsb;xsb_xiaosatonglu;1.0.60;Appstore;native_app",
            'Accept': "application/json, text/javascript, */*; q=0.01",
            'origin': "https://tp.hoolo.tv",
            'accept-language': "zh-CN,zh-Hans;q=0.9",
            'referer': "https://tp.hoolo.tv/"
        }
        
        resp = requests.get(url, headers=headers)
        
        # print(resp.text)
        info = resp.json()
        self.id = info["data"]["userid"]
        print(f"[DEBUG] {info}")
        
        # 获取文章ID
        url = 'https://wxapi.hoolo.tv/event/dtqp/index.php?s=/home/TmApi/channelList&channelId=' + self.channelid + '&userId=' + self.userid + '&sessionId=' + self.sessionid

        headers = {
            'User-Agent': "Mozilla/5.0 (Linux; Android 12; 22041211AC Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/117.0.0.0 Mobile Safari/537.36;xsb_xiaosatonglu;xsb_xiaosatonglu;1.0.60;native_app;6.5.1",
            'Accept': "application/json, text/javascript, */*; q=0.01",
            'sec-ch-ua': "\"Android WebView\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
            'sec-ch-ua-mobile': "?1",
            'sec-ch-ua-platform': "\"Android\"",
            'origin': "https://tp.hoolo.tv",
            'x-requested-with': "com.chinamcloud.wangjie.b87d8fb20e29a0328c6e21045e8b500e",
            'sec-fetch-site': "same-site",
            'sec-fetch-mode': "cors",
            'sec-fetch-dest': "empty",
            'referer': "https://tp.hoolo.tv/",
            'accept-language': "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
        }
        res = requests.get(url, headers=headers)
        if not res.text:
            print(f'[INFO] 账号{num}已失效, 请重新获取CK')
            return
        # print(res.text)
        cookies = res.cookies
        self.cookie_string = ";".join(
        [f"{cookie.name}={cookie.value}" if cookie.name == "acw_tc" else f"{cookie.name}={cookie.value}" for cookie in
        cookies])
        print(f"[DEBUG] {self.cookie_string}")
        cleaned_data = re.sub(r'\\/', clean_invalid_chars, res.text)
        self.data = json.loads(cleaned_data)
        # print(cleaned_data)
        self.id_values = [item["id"] for item in self.data]

        # print(self.id_values)
        
    def read_article(self):
        # 再次判断数据是否为空
        if not self.id_values:
            return
        print(f"\n------------[账号{self.num}]开始阅读文章------------")
        print(f"[INFO] {self.id_values}")
        for index, id in enumerate(self.id_values, start=1):
            url = 'https://wxapi.hoolo.tv/event/dtqp/index.php?s=home/baoming/postBaoming/&activityId=428&name=' + self.userid + '&city=' + str(
        id) + '&gender=1&type=jsonp'

            headers = {
            'User-Agent': "Mozilla/5.0 (Linux; Android 12; 22041211AC Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/117.0.0.0 Mobile Safari/537.36;xsb_xiaosatonglu;xsb_xiaosatonglu;1.0.60;native_app;6.5.1",
            'Accept': "application/json, text/javascript, */*; q=0.01",
            'sec-ch-ua': "\"Android WebView\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
            'sec-ch-ua-mobile': "?1",
            'sec-ch-ua-platform': "\"Android\"",
            'origin': "https://tp.hoolo.tv",
            'x-requested-with': "com.chinamcloud.wangjie.b87d8fb20e29a0328c6e21045e8b500e",
            'sec-fetch-site': "same-site",
            'sec-fetch-mode': "cors",
            'sec-fetch-dest': "empty",
            'referer': "https://tp.hoolo.tv/",
            'accept-language': "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
            }

            response = requests.get(url, headers=headers).json()
            # print(response)
            time.sleep(3)
            print(f"[INFO] {id}阅读状态: {response['msg']}")
        
        #     resp = requests.get(url, headers).json()
        #     if resp['code'] == 0:
        #         print(f"[INFO] {artid}阅读状态: {resp['message']}")
            
    def start_lottery(self):
        if not self.data:
            return
        print(f"\n--------------[账号{self.num}]开始抽奖--------------")
        for i in range(3):
            # 获取抽奖机会
            url = 'https://wxapi.hoolo.tv/event/dtqp/index.php?s=/home/TmApi/addPrizenum&accountId=' + self.userid + '&round=1&num=' + str(
            len(self.data)) + '&type=jsonp'

            headers = {
            'User-Agent': "Mozilla/5.0 (Linux; Android 12; 22041211AC Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/117.0.0.0 Mobile Safari/537.36;xsb_xiaosatonglu;xsb_xiaosatonglu;1.0.60;native_app;6.5.1",
            'sec-ch-ua': "\"Android WebView\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
            'sec-ch-ua-mobile': "?1",
            'sec-ch-ua-platform': "\"Android\"",
            'x-requested-with': "com.chinamcloud.wangjie.b87d8fb20e29a0328c6e21045e8b500e",
            'sec-fetch-site': "same-site",
            'sec-fetch-mode': "no-cors",
            'sec-fetch-dest': "script",
            'accept-language': "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            'referer': "https://tp.hoolo.tv/",
            'cookie': self.cookie_string
            }
            resp = requests.get(url, headers=headers)
            print(f"[DEBUG] {resp.text}")
            
            # 抽奖
            ts = self.__get_timestamp()
            # print(f"[DEBUG] {ts}")
            url = 'https://wxapi.hoolo.tv/event/dtqp/index.php?s=/Home/ChoujiangNew/apiChoujiang&callback=jQuery17108606669896657728_'+str(ts)+'&openId=' + self.userid + '&action=cj&typeId=122&address&userid=' + self.id + '&_=' + str(ts)
            
            headers = {
                'User-Agent': "Mozilla/5.0 (Linux; Android 12; 22041211AC Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/117.0.0.0 Mobile Safari/537.36;xsb_xiaosatonglu;xsb_xiaosatonglu;1.0.60;native_app;6.5.1",
                'sec-ch-ua': "\"Android WebView\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
                'sec-ch-ua-mobile': "?1",
                'sec-ch-ua-platform': "\"Android\"",
                'x-requested-with': "com.chinamcloud.wangjie.b87d8fb20e29a0328c6e21045e8b500e",
                'sec-fetch-site': "same-site",
                'sec-fetch-mode': "no-cors",
                'sec-fetch-dest': "script",
                'accept-language': "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                'referer': "https://tp.hoolo.tv/",
                'cookie': self.cookie_string
            }
            response = requests.get(url, headers=headers)
            decoded_str = response.text.encode('utf-8').decode('unicode_escape').replace('\/', '/')
            print(f"[INFO] {decoded_str}")
            
    def __get_timestamp(self):
        time = datetime.now()
        timestamp = time.timestamp()
        timestamp = int(timestamp * 1000)
        # print(timestamp)
        return timestamp

if __name__ == "__main__":
    try:
        cks = get_env('xstlck').split("&") or get_env("xstlck").split("\n")
    except:
        try:
            with open('cklist.txt','r') as f:
                cks  = f.read().split('\n')
        except Exception as e:
            print(f"[ERROR] 无法获取环境变量或读取文件: {e}")
            sys.exit(0)
        else:
            print("[INFO] 从文件读取ck成功")
    else:
       print("[INFO] 从环境变量读取ck成功")
        
        
    print("[INFO] 共读取到{}个ck".format(len(cks)))
    num = 0
    for ck in cks:
        num += 1
        xstl = XSTL(ck, num)
        xstl.get_all_info()
        time.sleep(3)
        xstl.read_article()
        time.sleep(3)
        xstl.start_lottery()
        time.sleep(4)