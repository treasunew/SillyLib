/*
   快手兑换奖券、提现，仅供测试
   支持青龙、QX、Loon等
   支持最大化提现,但是容易黑号，建议按照列表提现
   最大化提现变量：ksjsbAggressive  0代表按列表提现，1代表最大化提现

*/


const $ = new Env('快手极速版');
let res,
  ksjsbCookie = process.env.ksjsbCookie || '',
  Users = [],
  ksjsbCash = process.env.ksjsbCash || '',
  //ksjsbWithdrawTime = process.env.ksjsbWithdrawTime || 15,
  ksjsbAggressive = process.env.ksjsbAggressive || 0,
  ksjsbNotify = process.env.ksjsbNotify || 1,
  index = 0,
  count = 0;

  let curHours = new Date().getHours();
  class ksUser {
    constructor(cookie) {
      let api_st = cookie.match(/(kuaishou.api_st=[\w\-]+)/)[1] + ';';
  
      this.index = ++index;
      this.cookie =
        'kpn=NEBULA; kpf=ANDROID_PHONE; did=ANDROID_' +
        randomString(16) +
        '; ver=9.10; appver=9.10.40.2474; language=zh-cn; countryCode=CN; sys=ANDROID_5.1; client_key=2ac2a76d; ' +
        api_st;
      this.name = this.index;
      this.valid = false;
      this.bindAlipay = false;
      this.alipay = '';
      this.bindWechat = false;
      this.wechat = '';
      this.needSms = false;
      //this.hasLuckydraw = true;
      /* this.task = {
        49: { num: 2, needRun: true },
        75: { num: 1, needRun: true },
        161: { num: 5, needRun: true },
        217: { num: 1, needRun: true },
        2008: { num: 5, needRun: true },
      }; */
    }


    //获取用户信息
  async getUserInfo() {
    let url =
      'https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo';
    let body = '';
    let options = getOptions(url, this.cookie, body);
    await doRequest('get', options);
    if (!res) {
      return;
    }
    if (res.result == 1) {
      this.valid = true;
      this.name = res.data.userData.nickname;
      this.cashBalance = res.data.totalCash;
      this.coinBalance = res.data.totalCoin;
      this.allCash = res.data.allCash;
      console.log(
        `账号[${this.name}]账户余额${this.cashBalance}元，${
          this.coinBalance
        }金币，未审核余额${Math.floor(
          parseFloat(this.allCash) - parseFloat(this.cashBalance)
        )}元`
      );
    } else {
      console.log(`账号[${this.name}]查询账户信息失败：${res.error_msg}`);
    }
  }



  //提现
  async withdraw(_0x543a47) {
    if (!this.bindAlipay && !this.bindWechat) {
      console.log('账号[' + this.name + ']未绑定提现账号，不执行提现');

      return;
    }

    let _0x11aa57 = parseInt(_0x543a47 * 100),
      _0x551907 = this.bindAlipay ? 'ALIPAY' : 'WECHAT',
      _0x4281dd = _0x551907 == 'ALIPAY' ? '支付宝' : '微信',
      _0x45b85a = _0x551907 == 'ALIPAY' ? this.alipay : this.wechat,
      _0x5540cb = 'https://www.kuaishoupay.com/pay/account/h5/withdraw/apply',
      _0x36e14a =
        'account_group_key=NEBULA_CASH_ACCOUNT&mobile_code=&fen=' +
        _0x11aa57 +
        '&provider=' +
        _0x551907 +
        '&total_fen=' +
        _0x11aa57 +
        '&commission_fen=0&third_account=' +
        _0x551907 +
        '&attach=&biz_content=&session_id=',
      _0x2afd84 = getOptions(_0x5540cb, this.cookie, _0x36e14a);

    await doRequest('post', _0x2afd84);
    let _0x550f3b = res;

    if (!_0x550f3b) {
      return;
    }

    _0x550f3b.result == 'SUCCESS'
      ? console.log(
          '账号' +
            this.index +
            '[' +
            this.name +
            ']提现' +
            _0x543a47 +
            '元到' +
            _0x4281dd +
            '[' +
            _0x45b85a +
            ']成功'
        )
      : console.log(
          '账号' +
            this.index +
            '[' +
            this.name +
            ']提现' +
            _0x543a47 +
            '元到' +
            _0x4281dd +
            '[' +
            _0x45b85a +
            ']失败：' +
            _0x550f3b.msg
        );
  }

  //提现预览
  async withdrawOverview() {
    let _0x2236be =
        'https://nebula.kuaishou.com/rest/n/nebula/outside/withdraw/overview?appver=10.2.20.2021',
      _0x564ca9 = '',
      _0x418fbc = getOptions(_0x2236be, this.cookie, _0x564ca9);

    await doRequest('get', _0x418fbc);
    let _0x2edb23 = res;

    if (!_0x2edb23) {
      return;
    }

    if (_0x2edb23.result == 1) {
      if (_0x2edb23.data.isLimit == true) {
        console.log('账号[' + this.name + ']今天已提现');
        return;
      }

      let _0x57539e = parseFloat(this.cashBalance);

      if (ksjsbAggressive == 1) {
        if (_0x57539e < 0.3) {
          console.log('账号[' + this.name + ']余额不足0.3元，不提现');
        } else {
          let _0xc81e7b = Math.floor(_0x57539e * 10) / 10;

          _0xc81e7b = _0xc81e7b > 50 ? 50 : _0xc81e7b;

          console.log(
            '账号[' + this.name + ']准备最大化提现' + _0xc81e7b + '元'
          );

          await $.wait(200);
          await this.withdraw(_0xc81e7b);
        }
      } else {
        if (!ksjsbCash) {
          for (let _0x5da979 of _0x2edb23.data.enWithdrawList.sort(function (
            _0x5357e2,
            _0xc5d50f
          ) {
            return _0xc5d50f - _0x5357e2;
          })) {
            if (_0x57539e >= parseFloat(_0x5da979)) {
              console.log('账号[' + this.name + ']准备提现' + _0x5da979 + '元');

              await $.wait(200);
              await this.withdraw(_0x5da979);
              return;
            }
          }

          console.log(
            '账号[' +
              this.name +
              ']余额不足，可提现额度：' +
              _0x2edb23.data.enWithdrawList.join(',')
          );
        } else {
          _0x57539e >= parseFloat(ksjsbCash)
            ? (console.log(
                '账号[' + this.name + ']准备提现' + ksjsbCash + '元'
              ),
              await $.wait(200),
              await this.withdraw(ksjsbCash))
            : console.log(
                '账号[' + this.name + ']余额不足' + ksjsbCash + '元，不提现'
              );
        }
      }
    } else {
      console.log(
        '账号[' + this.name + ']查询提现列表失败：' + _0x2edb23.error_msg
      );
    }
  }



  //账号预览
  async accountOverview() {
    let _0x512fe7 =
        'https://nebula.kuaishou.com/rest/n/nebula/account/overview',
      _0x251847 = '',
      _0x39f16d = getOptions(_0x512fe7, this.cookie, _0x251847);

    await doRequest('get', _0x39f16d);
    let _0xa69994 = res;

    if (!_0xa69994) {
      return;
    }

    if (_0xa69994.result == 1) {
      this.coinBalance = _0xa69994.data.coinBalance;
      this.cashBalance = _0xa69994.data.cashBalance;
      let _0x54aac5 = _0xa69994.data.exchangeCoinState;

      console.log(
        '账号[' +
          this.name +
          ']账户余额' +
          this.cashBalance +
          '元，' +
          this.coinBalance +
          '金币'
      );

      _0x54aac5 == 2 && (await $.wait(200), await this.changeExchangeType(0));
    } else {
      console.log(
        '账号[' + this.name + ']查询账户信息失败：' + _0xa69994.error_msg
      );
    }
  }
  



  //兑换方式
  async changeExchangeType(_0x1bd22f) {
    let _0x4e7ea7 =
        'https://nebula.kuaishou.com/rest/n/nebula/exchange/changeExchangeType',
      _0x6250c8 = '{"type":' + _0x1bd22f + '}',
      _0x2c1c9f = getOptions(_0x4e7ea7, this.cookie, _0x6250c8);

    _0x2c1c9f.headers['Content-Type'] = 'application/json';
    await doRequest('post', _0x2c1c9f);
    let _0x4df55c = res;

    if (!_0x4df55c) {
      return;
    }

    let _0x1fdd87 = _0x1bd22f == 0 ? '自动兑换' : '手动兑换';

    _0x4df55c.result == 1
      ? console.log(
          '账号[' +
            this.name +
            ']兑换方式更改成功，目前兑换方式为：' +
            _0x1fdd87
        )
      : console.log(
          '账号[' + this.name + ']兑换方式更改失败：' + _0x4df55c.error_msg
        );
  }





  //金币兑换奖券
  async exchangeCoin() {
    if (this.coinBalance < 100) {
      console.log('账号[' + this.name + ']金币余额不足100，不执行兑换');
      return;
    }

    let _0x54ee74 =
        'https://nebula.kuaishou.com/rest/n/nebula/exchange/coinToCash/submit',
      _0x365938 =
        '{"coinAmount":' +
        this.coinBalance +
        ',"token":"rE2zK-Cmc82uOzxMJW7LI2-wTGcKMqqAHE0PhfN0U4bJY4cAM5Inxw"}',
      _0x4650af = getOptions(_0x54ee74, this.cookie, _0x365938);

    _0x4650af.headers['Content-Type'] = 'application/json';
    await doRequest('post', _0x4650af);
    let _0x2ae7ad = res;

    if (!_0x2ae7ad) {
      return;
    }

    if (_0x2ae7ad.result == 1) {
      let _0x1e5bfa = Math.floor(this.coinBalance / 100) * 100,
        _0xd2629a = Math.floor(this.coinBalance / 100) / 100;

      console.log(
        '账号[' +
          this.name +
          ']兑换金币成功，将' +
          _0x1e5bfa +
          '金币兑换成' +
          _0xd2629a +
          '元'
      );
    } else {
      console.log(
        '账号[' + this.name + ']兑换金币失败：' + _0x2ae7ad.error_msg
      );
    }
  }


  //获取用户ID
  async getUserid() {
    let _0x579d90 =
        'https://nebula.kuaishou.com/rest/n/nebula/activity/invitation/relationLink?version=1.2.0',
      _0xb20aec = '',
      _0x5a5910 = getOptions(_0x579d90, this.cookie, _0xb20aec);

    await doRequest('get', _0x5a5910);
    let _0x450eae = res;

    if (!_0x450eae) {
      return;
    }

    _0x450eae.result == 1
      ? (this.userId = _0x450eae.data.userId)
      : console.log(
          '账号[' + this.name + ']获取userId失败：' + _0x450eae.error_msg
        );
  }


  //绑定详情
  async bindInfo() {
    let _0x328bd6 =
        'https://www.kuaishoupay.com/pay/account/h5/provider/bind_info',
      _0x2f2b1b = 'account_group_key=NEBULA_CASH_ACCOUNT&bind_page_type=3',
      _0x32746d = getOptions(_0x328bd6, this.cookie, _0x2f2b1b);

    await doRequest('post', _0x32746d);
    let _0x4d5493 = res;

    if (!_0x4d5493) {
      return;
    }

    if (_0x4d5493.result == 'SUCCESS') {
      let _0x4015b0 = '未绑定支付宝',
        _0x3840b8 = '未绑定微信';
      _0x4d5493.alipay_bind == true &&
        ((this.bindAlipay = true),
        (this.alipay = _0x4d5493.alipay_nick_name),
        (_0x4015b0 = '已绑定支付宝[' + _0x4d5493.alipay_nick_name + ']'));
      _0x4d5493.wechat_bind == true &&
        ((this.bindWechat = true),
        (this.wechat = _0x4d5493.wechat_nick_name),
        (_0x3840b8 = '已绑定微信[' + _0x4d5493.wechat_nick_name + ']'));
      console.log('账号[' + this.name + ']' + _0x3840b8 + '，' + _0x4015b0);
    } else {
      console.log(
        '账号[' +
          this.name +
          ']查询提现账号绑定情况失败：' +
          _0x4d5493.error_msg
      );
    }
  }




  //账号详情
  async accountInfo() {
    let _0x308f69 =
        'https://www.kuaishoupay.com/pay/account/h5/withdraw/account_info',
      _0xfe05d = 'account_group_key=NEBULA_CASH_ACCOUNT&providers=',
      _0x52286e = getOptions(_0x308f69, this.cookie, _0xfe05d);

    await doRequest('post', _0x52286e);
    let _0x25e462 = res;

    if (!_0x25e462) {
      return;
    }

    _0x25e462.result == 'SUCCESS'
      ? (this.needSms = _0x25e462.need_mobile_code)
      : console.log(
          '账号[' + this.name + ']查询账号提现情况失败：' + _0x25e462.error_msg
        );
  }
}




//执行任务，前面的async是异步，现在处理
!(async () => {
  if (!(await formatCookie())) {
    return;
  }
  console.log('\n============== 登录 ==============');
  for (let user of Users) {
    await user.getUserInfo();
    await $.wait(500);
  }
  let CurrentUser = Users.filter((u) => u.valid == true);
  if (CurrentUser.length == 0) {
    return;
  }

  console.log('\n============== 账户情况 ==============');
  for (let u of CurrentUser) {
    await u.accountOverview();
    await $.wait(200);
    await u.bindInfo();
    await $.wait(200);
    await u.accountInfo();
    await $.wait(200);
  }
  console.log('\n============== 自动兑换 ==============');
  

  console.log('\n============== 自动提现 ==============');
  let tips = '按提现列表自动提现';
  if (ksjsbCash) {
    tips = `自动提现${ksjsbCash}元`;
  }
  if (ksjsbAggressive) {
    tips = '最大化提现';
  }
  if (curHours == curHours) {
    console.log(`提现时间，现在设置为${tips}`);
    for (let u of CurrentUser) {
      await u.withdrawOverview();
      await $.wait(200);
    }
  } else {
    console.log(`非提现时间，现在设置为${curHours}点${tips}`);
  }
  /* if (helpList.length > 0) {
    for (let u of CurrentUser) {
      for (let code of helpList) {
        await u.helpScan(code);
        await $.wait(200);
      }
    }
  } */
})()
  .catch((error) => $.logErr(error))
  .finally(() => $.done());
async function formatCookie() {
  if (ksjsbCookie) {
    for (let ck of ksjsbCookie.split('@')) {
      if (ck) {
        Users.push(new ksUser(ck));
      }
    }
    count = Users.length;
  } else {
    console.log('未找到CK');
    return;
  }
  console.log('共找到' + count + '个账号');
  return true;
}
function getOptions(url, cookie, body = '') {
  const options = {
    url: url,
    headers: {
      Cookie: cookie,
    },
  };
  if (body) {
    options.body = body;
    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }
  return options;
}

  //http请求

async function doRequest(method, options) {
  res = null;
  return new Promise((resolve) => {
    $[method](options, async (err, resp, data) => {
      try {
        if (err) {
          console.log(method + '请求失败');
          console.log(JSON.stringify(err));
          $.logErr(err);
        } else {
          if (safeGet(data)) {
            res = JSON.parse(data);
          }
        }
      } catch (error) {
        $.logErr(error, resp);
      } finally {
        resolve();
      }
    });
  });
}
//安全获取数据
function safeGet(data) {
    try {
      if (typeof JSON.parse(data) == 'object') {
        return true;
      }
    } catch (e) {
      console.log(e);
      console.log(`服务器访问数据为空，请检查自身设备网络情况`);
      return false;
    }
  }
  function randomString(e = 12) {
    let t = 'abcdef0123456789',
      a = t.length,
      n = '';
    for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n;
  }
  var Base64 = {
    encode: function encode(input) {
      var _keyStr =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      var output = '';
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;
      input = $.util.Charset.utf8_encode(input);
      while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }
        output =
          output +
          _keyStr.charAt(enc1) +
          _keyStr.charAt(enc2) +
          _keyStr.charAt(enc3) +
          _keyStr.charAt(enc4);
      }
      return output;
    },
    decode: function (input) {
      var _keyStr =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      var output = '';
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;
      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');
      while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 != 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
          output = output + String.fromCharCode(chr3);
        }
      }
      output = $.util.Charset.utf8_decode(output);
      return output;
    },
  };
  
  
  
  //青龙等模块
  function Env(t, e) {
    class s {
      constructor(t) {
        this.env = t;
      }
      send(t, e = 'GET') {
        t = 'string' == typeof t ? { url: t } : t;
        let s = this.get;
        return (
          'POST' === e && (s = this.post),
          new Promise((e, i) => {
            s.call(this, t, (t, s, r) => {
              t ? i(t) : e(s);
            });
          })
        );
      }
      get(t) {
        return this.send.call(this.env, t);
      }
      post(t) {
        return this.send.call(this.env, t, 'POST');
      }
    }
    return new (class {
      constructor(t, e) {
        (this.name = t),
          (this.http = new s(this)),
          (this.data = null),
          (this.dataFile = 'box.dat'),
          (this.logs = []),
          (this.isMute = !1),
          (this.isNeedRewrite = !1),
          (this.logSeparator = '\n'),
          (this.startTime = new Date().getTime()),
          Object.assign(this, e),
          this.log('', `\ud83d\udd14${this.name}, \u5f00\u59cb!`);
      }
      isNode() {
        return 'undefined' != typeof module && !!module.exports;
      }
      isQuanX() {
        return 'undefined' != typeof $task;
      }
      isSurge() {
        return 'undefined' != typeof $httpClient && 'undefined' == typeof $loon;
      }
      isLoon() {
        return 'undefined' != typeof $loon;
      }
      toObj(t, e = null) {
        try {
          return JSON.parse(t);
        } catch {
          return e;
        }
      }
      toStr(t, e = null) {
        try {
          return JSON.stringify(t);
        } catch {
          return e;
        }
      }
      getjson(t, e) {
        let s = e;
        const i = this.getdata(t);
        if (i)
          try {
            s = JSON.parse(this.getdata(t));
          } catch {}
        return s;
      }
      setjson(t, e) {
        try {
          return this.setdata(JSON.stringify(t), e);
        } catch {
          return !1;
        }
      }
      getScript(t) {
        return new Promise((e) => {
          this.get({ url: t }, (t, s, i) => e(i));
        });
      }
      runScript(t, e) {
        return new Promise((s) => {
          let i = this.getdata('@chavy_boxjs_userCfgs.httpapi');
          i = i ? i.replace(/\n/g, '').trim() : i;
          let r = this.getdata('@chavy_boxjs_userCfgs.httpapi_timeout');
          (r = r ? 1 * r : 20), (r = e && e.timeout ? e.timeout : r);
          const [o, h] = i.split('@'),
            a = {
              url: `http://${h}/v1/scripting/evaluate`,
              body: { script_text: t, mock_type: 'cron', timeout: r },
              headers: { 'X-Key': o, Accept: '*/*' },
            };
          this.post(a, (t, e, i) => s(i));
        }).catch((t) => this.logErr(t));
      }
      loaddata() {
        if (!this.isNode()) return {};
        {
          (this.fs = this.fs ? this.fs : require('fs')),
            (this.path = this.path ? this.path : require('path'));
          const t = this.path.resolve(this.dataFile),
            e = this.path.resolve(process.cwd(), this.dataFile),
            s = this.fs.existsSync(t),
            i = !s && this.fs.existsSync(e);
          if (!s && !i) return {};
          {
            const i = s ? t : e;
            try {
              return JSON.parse(this.fs.readFileSync(i));
            } catch (t) {
              return {};
            }
          }
        }
      }
      writedata() {
        if (this.isNode()) {
          (this.fs = this.fs ? this.fs : require('fs')),
            (this.path = this.path ? this.path : require('path'));
          const t = this.path.resolve(this.dataFile),
            e = this.path.resolve(process.cwd(), this.dataFile),
            s = this.fs.existsSync(t),
            i = !s && this.fs.existsSync(e),
            r = JSON.stringify(this.data);
          s
            ? this.fs.writeFileSync(t, r)
            : i
            ? this.fs.writeFileSync(e, r)
            : this.fs.writeFileSync(t, r);
        }
      }
      lodash_get(t, e, s) {
        const i = e.replace(/\[(\d+)\]/g, '.$1').split('.');
        let r = t;
        for (const t of i) if (((r = Object(r)[t]), void 0 === r)) return s;
        return r;
      }
      lodash_set(t, e, s) {
        return Object(t) !== t
          ? t
          : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []),
            (e
              .slice(0, -1)
              .reduce(
                (t, s, i) =>
                  Object(t[s]) === t[s]
                    ? t[s]
                    : (t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}),
                t
              )[e[e.length - 1]] = s),
            t);
      }
      getdata(t) {
        let e = this.getval(t);
        if (/^@/.test(t)) {
          const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
            r = s ? this.getval(s) : '';
          if (r)
            try {
              const t = JSON.parse(r);
              e = t ? this.lodash_get(t, i, '') : e;
            } catch (t) {
              e = '';
            }
        }
        return e;
      }
      setdata(t, e) {
        let s = !1;
        if (/^@/.test(e)) {
          const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
            o = this.getval(i),
            h = i ? ('null' === o ? null : o || '{}') : '{}';
          try {
            const e = JSON.parse(h);
            this.lodash_set(e, r, t), (s = this.setval(JSON.stringify(e), i));
          } catch (e) {
            const o = {};
            this.lodash_set(o, r, t), (s = this.setval(JSON.stringify(o), i));
          }
        } else s = this.setval(t, e);
        return s;
      }
      getval(t) {
        return this.isSurge() || this.isLoon()
          ? $persistentStore.read(t)
          : this.isQuanX()
          ? $prefs.valueForKey(t)
          : this.isNode()
          ? ((this.data = this.loaddata()), this.data[t])
          : (this.data && this.data[t]) || null;
      }
      setval(t, e) {
        return this.isSurge() || this.isLoon()
          ? $persistentStore.write(t, e)
          : this.isQuanX()
          ? $prefs.setValueForKey(t, e)
          : this.isNode()
          ? ((this.data = this.loaddata()),
            (this.data[e] = t),
            this.writedata(),
            !0)
          : (this.data && this.data[e]) || null;
      }
      initGotEnv(t) {
        (this.got = this.got ? this.got : require('got')),
          (this.cktough = this.cktough ? this.cktough : require('tough-cookie')),
          (this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()),
          t &&
            ((t.headers = t.headers ? t.headers : {}),
            void 0 === t.headers.Cookie &&
              void 0 === t.cookieJar &&
              (t.cookieJar = this.ckjar));
      }
      get(t, e = () => {}) {
        t.headers &&
          (delete t.headers['Content-Type'], delete t.headers['Content-Length']),
          this.isSurge() || this.isLoon()
            ? (this.isSurge() &&
                this.isNeedRewrite &&
                ((t.headers = t.headers || {}),
                Object.assign(t.headers, { 'X-Surge-Skip-Scripting': !1 })),
              $httpClient.get(t, (t, s, i) => {
                !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i);
              }))
            : this.isQuanX()
            ? (this.isNeedRewrite &&
                ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
              $task.fetch(t).then(
                (t) => {
                  const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                  e(null, { status: s, statusCode: i, headers: r, body: o }, o);
                },
                (t) => e(t)
              ))
            : this.isNode() &&
              (this.initGotEnv(t),
              this.got(t)
                .on('redirect', (t, e) => {
                  try {
                    if (t.headers['set-cookie']) {
                      const s = t.headers['set-cookie']
                        .map(this.cktough.Cookie.parse)
                        .toString();
                      this.ckjar.setCookieSync(s, null),
                        (e.cookieJar = this.ckjar);
                    }
                  } catch (t) {
                    this.logErr(t);
                  }
                })
                .then(
                  (t) => {
                    const {
                      statusCode: s,
                      statusCode: i,
                      headers: r,
                      body: o,
                    } = t;
                    e(null, { status: s, statusCode: i, headers: r, body: o }, o);
                  },
                  (t) => {
                    const { message: s, response: i } = t;
                    e(s, i, i && i.body);
                  }
                ));
      }
      post(t, e = () => {}) {
        if (
          (t.body &&
            t.headers &&
            !t.headers['Content-Type'] &&
            (t.headers['Content-Type'] = 'application/x-www-form-urlencoded'),
          t.headers && delete t.headers['Content-Length'],
          this.isSurge() || this.isLoon())
        )
          this.isSurge() &&
            this.isNeedRewrite &&
            ((t.headers = t.headers || {}),
            Object.assign(t.headers, { 'X-Surge-Skip-Scripting': !1 })),
            $httpClient.post(t, (t, s, i) => {
              !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i);
            });
        else if (this.isQuanX())
          (t.method = 'POST'),
            this.isNeedRewrite &&
              ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
            $task.fetch(t).then(
              (t) => {
                const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                e(null, { status: s, statusCode: i, headers: r, body: o }, o);
              },
              (t) => e(t)
            );
        else if (this.isNode()) {
          this.initGotEnv(t);
          const { url: s, ...i } = t;
          this.got.post(s, i).then(
            (t) => {
              const { statusCode: s, statusCode: i, headers: r, body: o } = t;
              e(null, { status: s, statusCode: i, headers: r, body: o }, o);
            },
            (t) => {
              const { message: s, response: i } = t;
              e(s, i, i && i.body);
            }
          );
        }
      }
      time(t) {
        let e = {
          'M+': new Date().getMonth() + 1,
          'd+': new Date().getDate(),
          'H+': new Date().getHours(),
          'm+': new Date().getMinutes(),
          's+': new Date().getSeconds(),
          'q+': Math.floor((new Date().getMonth() + 3) / 3),
          S: new Date().getMilliseconds(),
        };
        /(y+)/.test(t) &&
          (t = t.replace(
            RegExp.$1,
            (new Date().getFullYear() + '').substr(4 - RegExp.$1.length)
          ));
        for (let s in e)
          new RegExp('(' + s + ')').test(t) &&
            (t = t.replace(
              RegExp.$1,
              1 == RegExp.$1.length
                ? e[s]
                : ('00' + e[s]).substr(('' + e[s]).length)
            ));
        return t;
      }
      msg(e = t, s = '', i = '', r) {
        const o = (t) => {
          if (!t) return t;
          if ('string' == typeof t)
            return this.isLoon()
              ? t
              : this.isQuanX()
              ? { 'open-url': t }
              : this.isSurge()
              ? { url: t }
              : void 0;
          if ('object' == typeof t) {
            if (this.isLoon()) {
              let e = t.openUrl || t.url || t['open-url'],
                s = t.mediaUrl || t['media-url'];
              return { openUrl: e, mediaUrl: s };
            }
            if (this.isQuanX()) {
              let e = t['open-url'] || t.url || t.openUrl,
                s = t['media-url'] || t.mediaUrl;
              return { 'open-url': e, 'media-url': s };
            }
            if (this.isSurge()) {
              let e = t.url || t.openUrl || t['open-url'];
              return { url: e };
            }
          }
        };
        this.isMute ||
          (this.isSurge() || this.isLoon()
            ? $notification.post(e, s, i, o(r))
            : this.isQuanX() && $notify(e, s, i, o(r)));
        let h = [
          '',
          '==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3==============',
        ];
        h.push(e),
          s && h.push(s),
          i && h.push(i),
          console.log(h.join('\n')),
          (this.logs = this.logs.concat(h));
      }
      log(...t) {
        t.length > 0 && (this.logs = [...this.logs, ...t]),
          console.log(t.join(this.logSeparator));
      }
      logErr(t, e) {
        const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
        s
          ? this.log('', `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack)
          : this.log('', `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t);
      }
      wait(t) {
        return new Promise((e) => setTimeout(e, t));
      }
      done(t = {}) {
        const e = new Date().getTime(),
          s = (e - this.startTime) / 1e3;
        this.log(
          '',
          `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`
        ),
          this.log(),
          (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
      }
    })(t, e);
  }