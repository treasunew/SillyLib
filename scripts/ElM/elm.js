/**
环境变量：elmck 多个账号用@或者隔开
*/
/* 脚本仅可本地使用 */
const axios = require('axios')
const crypto = require('crypto-js')

var _0xodS = 'jsjiami.com.v6',
    _0xodS_ = ['‮_0xodS'],
    _0x569c = [_0xodS, 'wrrCtcKtwoAe', 'L8KwG8OhVw==', 'wpV1wo0=', 'wpJRw4c=', 'HxXDlw==', 'w5nDlno1fQ==', 'wpNrGGI9f8K8wqt6w4HDnQ==', 'wr90ZW/DkQ==', 'P8KIBcO8R8Oc', 'wr/DpVgE', 'w43ChsKQ', 'CXYtHA==', 'w4bChMOBS0I=', 'TCvCjQ==', 'YgdrCg==', 'w5fDvlI=', '5ZGw6LSV6LKB', 'UcKUwrDCi1E=', 'wqDCi8K4', 'agl4', 'wpR/wpnDu8KJw57CnQ==', 'w60+P21Ew4prEhUcZBLDvcOLw60TNX/Ct8Knw5/DrcKQf8OnYcOCMiwmw6jCrcKmWw==', 'wozDh8Kjw7lnw6XDm8KofUo2O8KQ', 'wpRuwoXDuA==', 'wqdIH0gN', 'w4MPw4HCs0g=', 'wpNCJzjDv8OK', 'wp9RSkXDoMOiMg==', 'UkhzwofCi8OFw6UkIh8bYA==', 'Ww89DMO7BsK9Qg==', 'BjVTw6DCinx3IcO4', '6I6s5Yyb5LmS5YmD5YuZ6KKh5aSB6LaA', 'wrliw7I1w7E=', 'D8K+w6Z2w7M=', 'AEbCtU7Ck8K3AQAW', 'w7FCwo7DiWw=', 'Rmpgw6olwog3YsOr', 'E8Kbw5Zuw7/DssKnAgU=', 'w6cLwqkwwoM=', 'w5nDjzk=', 'MDANw7k=', 'wqfCqXF6IA==', 'w5zCgMO/ZGM=', 'w5J3w7kfMg==', 'OcKmGxF1', 'wrXDoFLDlSM=', 'wphpwpnDocKPw5c=', 'w5kewqBN', 'ZWBKwrY=', 'w7rClcKIw6Er', 'KMKLD8KE', 'w43CgsKTw7gfchY=', 'L3vDpA==', 'C2fDkcKhWg==', 'FcKZw7dkw6c=', 'w5EQwrM=', 'wq9XAX4J', 'OcK6woMAFw==', 'w5FuwojDvUg=', 'wpjDqsKKwrQt', 'wrR/wrDDv8K/', 'AcK9wocgAw==', 'YcKrwonDmsOZ', 'N3fCqUrCtg==', 'wpZuw6l0wpQ=', 'Nz/DnirDiA==', 'w6/DpgcCw5c=', 'w5F1wp8=', 'w5A/wqIrwoY=', 'w4wEfHnDp8Kdw5B8wrHCusO1wpHDr8KOw7LDpcKOQsKFbwBJdChmw47DlMORw6UGw7nCrw==', 'wphtGH8=', 'Y2hEwojCpMOvw5IIOjwzRxc=', '6aGI5YyD5Lum5YmJ5omA5Yum', 'R25dwrbCrQ==', 'wq1qUMK2w4E=', 'wofDq8KTw4J+', 'wrHDkMKOwqwyQTkGLw==', 'ecKjwqjCtkI=', 'NiPDsibDtw==', 'w742Jw==', 'wrF7YzM=', 'DMKjFDRP', 'w4URZ2g=', 'WXF1', '5ZG+6LSj6LCC', 'C8O/woI=', 'DMOcwoTDnsKB', 'worDj3hxL8OFDwvCthLDg8Oiw60a', 'w4wEfHnDp8KZw5Bww73CucO+worDr8Kaw7bDo8KJGMKBIBpPdSo7w5jDh8OGwqUTwrTCq0/DkzQEw6tPwp8=', 'UUB5wpLCkcOJw7M6', 'w7oew5HCrg==', 'w6jCpsK2w4owVCzChDR2wrbDk8Kb', 'w715wpoIw6jChHJxA21HwqTCmzfCnlrDusKFHsOGXsKu', '5reu6Ka4IjznpJvkuIfliJ3lrpnmi4M=', 'PBV2', 'wqhhb2fDkMOdFcOUTCNGDFJPw7vCmTxfHzHCt8OoPsKHNcKTEi4XYsO8PMOWw5TCs8KNfcK9wpPDqW3DhMO9w7sAw5jDgRYcOsOhccKvw5vCrcO3w5ZhG8Opw57ChsKDC8KIGFXDiVR/DE7Dg8OPw5DDgMKbGE7DjMOTIcOsdRNcOj7DkDnDtxTChQ==', 'woRRw5UZw4lkYGDChcObRHzDpysaw53DtMOoeCjDncKxw5kmRsOMw6RUTsK4NMKgwp4CRHYpJMONw6lDwqXClcOGdMOZwp7DlsO3Wikrw7DCusOXaAvCn8O1w6TDoMOJHUbCnsOZw75zw6fDq8K+d0/CtcOfwrs1wpI3wqU0w6ggWsOrBcOGRsOAKcOyKjYObA==', 'w7BnBcOzwow=', 'wrvDtsKuw4d9', 'JMKAwoofwqM=', 'f8KRwrPCgkk=', 'XA5bDsOj', 'YEZzw5Mv', 'EcOGwqHDl8KH', 'FcKdwqAYwpc=', 'w68aw5fCs1/Ch37ChG/CiEw=', 'wrjDp10AFw==', 'wp9zwobDvMKNw4s=', 'Jghow4g=', 'w5B7wog=', 'wrLDolfDkQ==', 'Y8KWwo7Cu0w=', 'FmE9Ag==', 'XMKYwrY=', 'GRXDmSk=', 'w65TwrXDsU3Cs8OvCMKnYTMn', 'w5ALF1g8w6JCLA==', 'XSMTBsOC', 'wpdibMKbw6I=', 'wpppYEnDig==', 'wr3CkH5ZKQ==', 'w58Fw5HCkXU=', 'w63DvFw2Qw==', 'wq93woPDh8KH', 'DcKewpgeHQ==', 'wplVw4F2wrY=', 'w4xmP8OIwpA=', 'wp3DulgmDA==', 'K2ktPsOQ', 'dinCgwfCtg==', 'GsKHEsKqw4s=', 'wprCicK2wqYE', 'NsKdMxNX', 'NsKCw41Iw74=', 'w6hbwrTDiEo=', 'RsKLwovCnVc=', 'wrjDg8Kww6lr', 'w6t3wpHDrm4=', 'wpJ/GXwK', 'wqhew4ZKwqs=', 'wqzDsV8aEQ==', 'w5oZwrpfBg==', 'wozCm3llNA==', 'w64Ow5bCrWg=', 'wp58woTDu8Ka', 'fMKrw4fCkcK8', 'w5lQwrPDtFc=', 'w5LCksODUUQ=', 'wodSw50Lw44=', 'wqnCs3PCmyI=', 'asK7C8KwwrI=', 'wqLDh8KbwrpQ', 'Unh8w7A5', 'KXnDrsKZYQ==', 'w6csPm4Y', 'w4Bow6UEEA==', 'w4fCgcKOw7gM', 'B8KWNC9K', 'GmIqAsON', 'wqZpa8Knw78=', 'JWHCkn3Cpw==', 'wq9uwprDgMKH', 'wpZyT2jDhg==', 'FztUw6vCvg==', 'wo5/csKRw4A=', '6KyZ5rWV5Ym554yJ5aKH5Y2c6YWmwqlOSjQ577+y5aWc5Lqz6LaO5Y6N55Wow67pmJLlvbo=', 'w6bDqgQiwo5DwozDrsOBw5x5LMO9YcKGWcKrNyhww4vDmiLCtgNjdcOkCmjDtTs=', 'worCpcKWwqU0wq8gB0fDtmjCjizCuzvDkjLClVNeSsOGw4Un', '55mg5b6Y5oq55Ym9', '6I2Z5Y245Lii5YiH5YiT6KOs', '5oiU6KC26Zig6JaI5Lm45YuD', 'w6YTwo4Iwr57w6bCmMO6dgoU', 'MMKuw6NCw4fDnMKLMw==', 'woVaw4U=', 'PsKfwpwyGQ==', 'N8K2OcO8aQ==', 'wo3DjMKVw4NN', 'wqnDpFsnGg==', 'w7QjXmXCmg==', 'ecKIwobCt0BSUg==', 'dcKaw7nClsKF', 'E8Kkwog0Nw==', 'Xll3w4Ug', 'w6wlNw==', 'w4prw7gEAy/Ckg==', 'KsKRBcOhVg==', 'WMKjw4HCu8KM', 'FmPDosKKEw==', 'bhgQIsOi', 'w7FuL8O0', 'wq/DhcKM', 'OBVow4s=', 'wqnDjsKS', 'OTFEw5HCow==', 'I8Kgwq8=', 'YcK4C8KkwrQK', '5Lmm6LeM5Y6M', 'c8K9wp7DhcOQ', 'wplNcMKew5U=', 'wqNdw4Zewq3DnQ==', 'w53DvVoWXg==', 'JMOmwqTDq8Kc', 'TyPCkALCtQ==', 'wpJVw50cw5Nl', 'H13CoA==', 'aMK2bMKZJ1h8GMOx5b6J5aW/44Kw6LeD5Y+k', 'w6R4w4oAOw==', '44OxHsKZUsKWIj4ew4DCug==', 'w7NWwr3Dg0o=', 'eMKSB8KgwqU=', 'wrLDlWvDjwI=', 'JcOTwoTDqsKI', 'DMKAw4M=', 'BcOYM8OeSA==', 'YcKyAg==', 'wqLCrG/CnSM=', 'L3AgA8OQ', 'NA7DsyvDtw==', 'wpl2EA==', 'YMK/wqvDgcOX', 'w68Bw5TCqn/Cmw==', 'wqrDhcKP', 'Nh9nw6zCrQ==', 'w5JZwro=', 'w6wvPnoew4M=', '5LqX6ZqK6JS35Lma5Yqg', 'wrHDpMKgwrp3', 'GjDDoTfDuw==', 'wqjDscKYwqkP', 'fwsvOsO4', 'w77DsDERw5M=', 'w4Vbw5kbCw==', 'wp7Ck01VNQ==', 'KsKPA8OkSQ==', 'wrtJw4Zqwrc=', '6ZaS6K2x5Y+05Zqy77665LuZ5YmB5ou66KOu6aGj57mN5omJ6IKd6ZyT6KSp5pyG5Z++54+r5aOY5om+6KOo6Iau5pyg', 'YEg1wpTDvw8=', 'wolsbsKRw4g=', '6aCN5Y2I5LqQ5Yuz5oqw5Yq9', 'NR91', 'a8OPX8KmEA==', 'asOBw4RmRsKwHS0=', 'aMOPWQ==', 'AsO8woA=', 'woHCjnh4', 'ccKWwpLCvlF+VcK0PhRwwq4HRBHCmi5GNiogdsKGwpvDjETDsMOOwq58wrk7w7w=', 'w4I7wqo1wpNXwpjCtsOIUSc/w7sOBsOsDmvDoA==', 'w5PDpUEJX1RsQ8K9WsKfaF1Zwr0qw7DDlw==', 'wp9qRkXDog==', 'wozDlEErKg==', 'IC/DswTDhjHDsg==', 'wq3CvF5aGcK4Z23DmXfCtcKFwopnwpbDvT3DgcKzLMOEFzcS', 'AcKJGMKfw5Q=', 'w59XwrDDg3U=', 'w4YLGVE1w7heKCgpSTjClsO2w4Q/HR7CksKUw7TDjg==', 'wqZ1w7o0w6NbTWfCtcOkblnCkzoww7XDpsOWQwU=', '6ISm5Yqs5pu95pa2w7HDvirDhEM=', 'eCsOZMOOIMKXfsKlBw==', 'NTvDuQvDnDHDuMKvwo7ClsKdRkRAw6PCkAYIwoUTXws=', 'VsKzwrTDvsOS', 'SgrCiTzCjQ==', 'BMKewq45R8ObXn4=', 'RMKgw7bCisO7wpZEw44=', 'wp3DnsK1w49w', 'wqLCi8Ko', 'wp1tA38LK8Onw7Zkw4XDh8OdwpnCqnLClCfClsOpA8K/w6vDvcOEwr5Sw4rCs0jDkyU=', 'wog/wqVH', 'SsKpw6LCt8KA', 'wrh8GlkC', 'GcKWw4trw74=', 'Hz40', 'acO+w7pBw5kQSVgsYg==', 'JhVSw5HCu1BQEA==', 'F0PDicKDBA==', 'YVR3w4gi', 'w4l9D8OBwr0=', 'wq/DtkUI', 'S8KnH8KJwrI=', 'RcKLwpbCpVw=', 'Kl0TN8O+', 'X8K8D8KiwrhNwqcww4HCrcKlwqLCjMOVw4LDmDjCoh4wwoQoH8OINx3DrMKHw63Do1TCiEMTPsOvwrnDnENjwq9JRcOKCcOmICsWw7jDscOADg==', 'woLCvHBOHVZuWMOxfcKBIA==', 'wod0w7DCv2TCpcOSRzYTDcKaw7XCk8K9HG/CrsO2wpDCusOVwqLDr8Obw69Hwr/DhifCv2jDksKBw4FiwrVMR8OTFMOBKcKBa8O5ccKwYcKIdcKaGsKxLsOHPcO1wrHClMORAyPDh8KRcsKGw4dcw6rCuhoxGh13M8KRwrHDgz9IA0/CrWAoR1DCvMOHbH0cwoTCvmU5wpVkTz5nwpbDmcKcIMO4w5oCXsOEIsKiwodTZQgEw6jDrcOLMxfDjHbCjBYEakDCpMOIwrXCvcOCwosSwpnCrMOJa8Kiwocyw4IcUcOGC0/CicO+D8K2w5F6w4rCt8OxZsKlLMO6wpPDtHEmwp/DhsKrXkACd8ObEsOcD0DDlsKEw7/ClMKXQh7CjcKGIMKWKijCscObbAE8VhrClsO/w7nDjcOMw4jCj8OQJMOJA3TDhhk=', 'ek1hw7oh', 'w4LCpMOvTWQ=', 'N3rDqsKuHg==', 'wrnCicKqwqgc', 'w49/wow=', 'wrHDlMKQwqwo', 'OsKhwrcfJA==', 'wofDpsKfwoFr', 'YFN4wpnCkQ==', 'ZMKVwpTCik8=', 'STXCnDHCng==', 'woXCgMKlwp8D', 'wqlecsKNw5g=', 'wq1gYg==', 'EsKKw5A=', 'NcKODg==', 'b8KaKsKPwpE=', 'PhVm', 'JsK6CB9z', 'w4MecG7ChQ==', 'woLCk3R6M8KPW00=', 'AxXDvwLDrA==', 'w5DCiMK1w74J', 'wp91wpjDjcKJw5rCkA==', 'P2kMA8O1', 'wph1c1HDoA==', 'w5/DrxEFw6U=', 'Nht1w4Q=', 'wqbDhcKIwqQ=', 'w5nDky4Xw4g=', 'BsO9MsOS', 'ODRiw5HCnQ==', 'wpjCjXt/Mg==', 'wqrDpEIABMKH', 'wpTCnMKvwoUb', 'wqbChFt8Ng==', 'w792w7sbEg==', 'CcOYwrHDqMKL', 'w5LCgsKU', 'w7cPwpUawp4=', 'ecKXwpTCq38=', 'jZJfEsjiaUmCCiY.TPcomXfy.vd6=='];
if (function(_0x5d4561, _0x4da8be, _0x1077f9) {
    function _0x1eaeaf(_0x409002, _0x4e185f, _0x544cfb, _0x2a5022, _0x56bede, _0x4f7790) {
        _0x4e185f = _0x4e185f >> 0x8, _0x56bede = 'po';
        var _0x4d7e5c = 'shift',
            _0x6869ae = 'push',
            _0x4f7790 = '‮';
        if (_0x4e185f < _0x409002) {
            while (--_0x409002) {
                _0x2a5022 = _0x5d4561[_0x4d7e5c]();
                if (_0x4e185f === _0x409002 && _0x4f7790 === '‮' && _0x4f7790['length'] === 0x1) {
                    _0x4e185f = _0x2a5022, _0x544cfb = _0x5d4561[_0x56bede + 'p']();
                } else if (_0x4e185f && _0x544cfb['replace'](/[ZJfEUCCYTPXfyd=]/g, '') === _0x4e185f) {
                    _0x5d4561[_0x6869ae](_0x2a5022);
                }
            }
            _0x5d4561[_0x6869ae](_0x5d4561[_0x4d7e5c]());
        }
        return 0x103fcd;
    };
    return _0x1eaeaf(++_0x4da8be, _0x1077f9) >> _0x4da8be ^ _0x1077f9;
}(_0x569c, 0xa0, 0xa000), _0x569c) {
    _0xodS_ = _0x569c['length'] ^ 0xa0;
};

function _0x51ce(_0x1ab76e, _0x4dd022) {
    _0x1ab76e = ~~'0x' ['concat'](_0x1ab76e['slice'](0x1));
    var _0x2eb82b = _0x569c[_0x1ab76e];
    if (_0x51ce['nnbfet'] === undefined) {
        (function() {
            var _0x34daa5 = function() {
                var _0x8b7d68;
                try {
                    _0x8b7d68 = Function('return (function() ' + '{}.constructor("return this")( )' + ');')();
                } catch (_0x1360e9) {
                    _0x8b7d68 = window;
                }
                return _0x8b7d68;
            };
            var _0x382192 = _0x34daa5();
            var _0x83e332 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x382192['atob'] || (_0x382192['atob'] = function(_0x5d1629) {
                var _0x443b62 = String(_0x5d1629)['replace'](/=+$/, '');
                for (var _0x441af2 = 0x0, _0x251b8b, _0x4f2053, _0x3a8e27 = 0x0, _0x412c55 = ''; _0x4f2053 = _0x443b62['charAt'](_0x3a8e27++); ~_0x4f2053 && (_0x251b8b = _0x441af2 % 0x4 ? _0x251b8b * 0x40 + _0x4f2053 : _0x4f2053, _0x441af2++ % 0x4) ? _0x412c55 += String['fromCharCode'](0xff & _0x251b8b >> (-0x2 * _0x441af2 & 0x6)) : 0x0) {
                    _0x4f2053 = _0x83e332['indexOf'](_0x4f2053);
                }
                return _0x412c55;
            });
        }());

        function _0x4f26e6(_0x4bf99c, _0x4dd022) {
            var _0x41f519 = [],
                _0x4f75d4 = 0x0,
                _0x857f07, _0x2c054d = '',
                _0x3971d6 = '';
            _0x4bf99c = atob(_0x4bf99c);
            for (var _0x98b4d3 = 0x0, _0x28ac4b = _0x4bf99c['length']; _0x98b4d3 < _0x28ac4b; _0x98b4d3++) {
                _0x3971d6 += '%' + ('00' + _0x4bf99c['charCodeAt'](_0x98b4d3)['toString'](0x10))['slice'](-0x2);
            }
            _0x4bf99c = decodeURIComponent(_0x3971d6);
            for (var _0x3b1a0a = 0x0; _0x3b1a0a < 0x100; _0x3b1a0a++) {
                _0x41f519[_0x3b1a0a] = _0x3b1a0a;
            }
            for (_0x3b1a0a = 0x0; _0x3b1a0a < 0x100; _0x3b1a0a++) {
                _0x4f75d4 = (_0x4f75d4 + _0x41f519[_0x3b1a0a] + _0x4dd022['charCodeAt'](_0x3b1a0a % _0x4dd022['length'])) % 0x100;
                _0x857f07 = _0x41f519[_0x3b1a0a];
                _0x41f519[_0x3b1a0a] = _0x41f519[_0x4f75d4];
                _0x41f519[_0x4f75d4] = _0x857f07;
            }
            _0x3b1a0a = 0x0;
            _0x4f75d4 = 0x0;
            for (var _0x230de6 = 0x0; _0x230de6 < _0x4bf99c['length']; _0x230de6++) {
                _0x3b1a0a = (_0x3b1a0a + 0x1) % 0x100;
                _0x4f75d4 = (_0x4f75d4 + _0x41f519[_0x3b1a0a]) % 0x100;
                _0x857f07 = _0x41f519[_0x3b1a0a];
                _0x41f519[_0x3b1a0a] = _0x41f519[_0x4f75d4];
                _0x41f519[_0x4f75d4] = _0x857f07;
                _0x2c054d += String['fromCharCode'](_0x4bf99c['charCodeAt'](_0x230de6) ^ _0x41f519[(_0x41f519[_0x3b1a0a] + _0x41f519[_0x4f75d4]) % 0x100]);
            }
            return _0x2c054d;
        }
        _0x51ce['rUegFc'] = _0x4f26e6;
        _0x51ce['kGkBwA'] = {};
        _0x51ce['nnbfet'] = !![];
    }
    var _0x2c0fad = _0x51ce['kGkBwA'][_0x1ab76e];
    if (_0x2c0fad === undefined) {
        if (_0x51ce['bAkNFe'] === undefined) {
            _0x51ce['bAkNFe'] = !![];
        }
        _0x2eb82b = _0x51ce['rUegFc'](_0x2eb82b, _0x4dd022);
        _0x51ce['kGkBwA'][_0x1ab76e] = _0x2eb82b;
    } else {
        _0x2eb82b = _0x2c0fad;
    }
    return _0x2eb82b;
};
let cookie, num, tasks;
!(async() => {
    var _0x304cec = {
        'nWPtK': function(_0x7fc7d6, _0x24168a) {
            return _0x7fc7d6 === _0x24168a;
        },
        'cbLeI': _0x51ce('‫0', 'o88m'),
        'bsjNy': _0x51ce('‫1', 'Ugac'),
        'USMlS': function(_0x6beab7, _0x26a372) {
            return _0x6beab7 > _0x26a372;
        },
        'HWyeE': _0x51ce('‫2', 'dEVQ'),
        'kGeFk': _0x51ce('‫3', 'BD!n'),
        'CnhYB': function(_0x513d79, _0x5aa305) {
            return _0x513d79 === _0x5aa305;
        },
        'eVjkO': _0x51ce('‫4', 'QNOt'),
        'kKEtj': _0x51ce('‮5', 'k4J0'),
        'BDXPM': function(_0x258a02) {
            return _0x258a02();
        },
        'XBuJX': function(_0x9cf8f3, _0x153330) {
            return _0x9cf8f3 < _0x153330;
        },
        'CvAwY': function(_0x1ce1bd, _0x19248f) {
            return _0x1ce1bd + _0x19248f;
        },
        'ogzJl': function(_0x26a878, _0x3a28ee) {
            return _0x26a878 * _0x3a28ee;
        },
        'NLEbK': function(_0x9cd34f, _0x45aeaa) {
            return _0x9cd34f(_0x45aeaa);
        },
        'uObce': _0x51ce('‫6', 'kBBJ'),
        'tEUsU': function(_0x2f632e, _0x2236d4) {
            return _0x2f632e == _0x2236d4;
        },
        'BCavM': _0x51ce('‮7', '9C&5'),
        'gDumE': _0x51ce('‫8', '&IbV'),
        'lyrus': _0x51ce('‮9', 'k4J0'),
        'Rtdro': function(_0x4fc60d) {
            return _0x4fc60d();
        },
        'GtClt': function(_0x392ea6) {
            return _0x392ea6();
        },
        'QFmTJ': _0x51ce('‮a', '#03b'),
        'iJQpx': _0x51ce('‫b', '$gEi'),
        'jUdlS': function(_0x51cdd9, _0x49fd00, _0x5e788c) {
            return _0x51cdd9(_0x49fd00, _0x5e788c);
        },
        'unZCs': _0x51ce('‮c', 'iDRY'),
        'bURli': function(_0x1256eb, _0xf2d116, _0x479dfc, _0x1e3d0c) {
            return _0x1256eb(_0xf2d116, _0x479dfc, _0x1e3d0c);
        },
        'snjlk': function(_0x16278b, _0x2aa211, _0x57edbc) {
            return _0x16278b(_0x2aa211, _0x57edbc);
        },
        'tqnSn': function(_0x3832db, _0x16126b) {
            return _0x3832db(_0x16126b);
        }
    };
    let _0x2bc990 = [],
        _0x5d7043 = process[_0x51ce('‮d', '%dCI')][_0x51ce('‫e', '$WGW')];
    if (_0x5d7043) {
        if (_0x304cec[_0x51ce('‫f', 'PJup')](_0x304cec[_0x51ce('‫10', 'k4J0')], _0x304cec[_0x51ce('‫11', 'v^Gf')])) {
            _0x2bc990 = [_0x5d7043];
        } else {
            if (_0x304cec[_0x51ce('‮12', 'PoeV')](_0x5d7043[_0x51ce('‫13', 'wknF')]('@'), -0x1)) {
                if (_0x304cec[_0x51ce('‫14', '&IbV')](_0x304cec[_0x51ce('‫15', '$WGW')], _0x304cec[_0x51ce('‫16', 'Blw&')])) {
                    console[_0x51ce('‫17', 'jg)j')](e[_0x51ce('‫18', 'f*4j')]);
                } else {
                    _0x2bc990 = _0x5d7043[_0x51ce('‮19', 'PJup')]('@');
                }
            } else {
                if (_0x304cec[_0x51ce('‫1a', '&IbV')](_0x304cec[_0x51ce('‫1b', '1IvF')], _0x304cec[_0x51ce('‫1c', ']s1^')])) {
                    _0x2bc990 = [_0x5d7043];
                } else {
                    return Object[_0x51ce('‮1d', 'aS8j')](obj)[_0x51ce('‫1e', 'n^eQ')](_0x11ae27 => _0x11ae27 + '=' + obj[_0x11ae27])[_0x51ce('‫1f', 'BD!n')](';');
                }
            }
        }
    } else console[_0x51ce('‫20', 'aMpO')](_0x304cec[_0x51ce('‮21', 'BD!n')]);
    console[_0x51ce('‮22', 'Tt]2')]('共' + _0x2bc990[_0x51ce('‫23', 'IORW')] + _0x51ce('‫24', '$PO0'));
    let _0x5b140e = _0x304cec[_0x51ce('‮25', '$nH)')](getHideTasks);
    for (let _0x2aad72 = 0x0; _0x304cec[_0x51ce('‫26', 'QNOt')](_0x2aad72, _0x2bc990[_0x51ce('‫27', '*Xc7')]); _0x2aad72++) {
        cookie = _0x2bc990[_0x2aad72];
        num = Math[_0x51ce('‫28', 'wVd9')](_0x304cec[_0x51ce('‮29', 'VtP4')](_0x304cec[_0x51ce('‫2a', 'KB7Q')](Math[_0x51ce('‮2b', '%dCI')](), 0x5a), 0xa));
        console[_0x51ce('‫2c', 'o88m')](_0x51ce('‫2d', 'smmP') + _0x304cec[_0x51ce('‮2e', 'f*4j')](_0x2aad72, 0x1) + _0x51ce('‮2f', '%dCI'));
        let _0x79cf4a = await _0x304cec[_0x51ce('‮30', 'ytXa')](request, {
            'api': _0x304cec[_0x51ce('‮31', 'IORW')],
            'data': '{}'
        });
        if (_0x304cec[_0x51ce('‮32', 'KZt(')](_0x79cf4a, _0x304cec[_0x51ce('‮33', 'VtP4')])) continue;
        else console[_0x51ce('‫34', 'iDRY')](_0x304cec[_0x51ce('‫35', 'smmP')]);
        tasks = new Set();
        console[_0x51ce('‮36', 'IORW')](_0x304cec[_0x51ce('‮37', 'Mjg!')]);
        await _0x304cec[_0x51ce('‮38', 'nG6p')](query);
        await _0x304cec[_0x51ce('‮39', '#03b')](sleep);
        console[_0x51ce('‮3a', '9&2o')](_0x304cec[_0x51ce('‫3b', '$nH)')]);
        let _0x2e3447 = _0x5b140e[_0x51ce('‮3c', '17Jv')](_0x21cb11 => !tasks[_0x51ce('‫3d', 'n^eQ')](_0x21cb11[_0x51ce('‫3e', 'BD!n')]));
        console[_0x51ce('‫3f', 'N)BA')](_0x2e3447[_0x51ce('‫40', 'jg)j')] + _0x51ce('‮41', 'ytXa'));
        for (let {
                collectionId, defId, type
            }
            of _0x2e3447) {
            if (_0x304cec[_0x51ce('‮42', 'aMpO')](type, _0x304cec[_0x51ce('‮43', '#03b')])) await _0x304cec[_0x51ce('‮44', 'n^eQ')](act, defId, collectionId);
            else if (_0x304cec[_0x51ce('‫45', ']s1^')](type, _0x304cec[_0x51ce('‮46', 'kBBJ')])) {
                await _0x304cec[_0x51ce('‫47', 'f*4j')](act, defId, collectionId, _0x304cec[_0x51ce('‮48', 'puG#')]);
                await _0x304cec[_0x51ce('‮30', 'ytXa')](sleep, 0x1770);
                await _0x304cec[_0x51ce('‮49', 'PJup')](pageView, defId, collectionId);
            }
            await _0x304cec[_0x51ce('‮4a', '*Xc7')](sleep, 0x1770);
        }
    }
})();
async

function request(_0x5dd62c) {
    var _0x2a02f4 = {
        'bGOLQ': _0x51ce('‮4b', 'kBBJ'),
        'RMEEh': _0x51ce('‫4c', 'BD!n'),
        'BmHrJ': function(_0x255fcf, _0x666000) {
            return _0x255fcf !== _0x666000;
        },
        'TqzWE': _0x51ce('‮4d', 'QNOt'),
        'jNctT': function(_0x5eaad7, _0xf6d36d) {
            return _0x5eaad7(_0xf6d36d);
        },
        'ArRYi': _0x51ce('‫4e', 'kBBJ'),
        'QdKUN': _0x51ce('‮4f', 'BD!n'),
        'MemVz': _0x51ce('‫50', 'PJup'),
        'yyolo': _0x51ce('‮51', '$WGW'),
        'dvAbX': _0x51ce('‮52', 'PJup'),
        'TJeKi': _0x51ce('‮53', 'VtP4'),
        'SvYFB': _0x51ce('‫54', 'puG#'),
        'FzzJr': _0x51ce('‮55', 'wknF'),
        'Umtwd': _0x51ce('‮56', '$gEi'),
        'WYWFA': _0x51ce('‮57', 'wVd9'),
        'OSsyj': function(_0x33b948, _0x42e85a) {
            return _0x33b948 !== _0x42e85a;
        },
        'wPBoR': _0x51ce('‮58', 'dEVQ'),
        'DObOB': _0x51ce('‮59', 'v^Gf'),
        'umuAw': function(_0x15f016, _0x198d15) {
            return _0x15f016(_0x198d15);
        },
        'aRFNV': function(_0x2f0797, _0x4fd0e4) {
            return _0x2f0797 == _0x4fd0e4;
        },
        'BGjHI': _0x51ce('‮5a', '#03b'),
        'tsvXw': _0x51ce('‮5b', 'puG#'),
        'iqvyG': function(_0x21d8cd, _0x5b67d8) {
            return _0x21d8cd === _0x5b67d8;
        },
        'Idzvh': _0x51ce('‮5c', '$PO0'),
        'hQwYU': _0x51ce('‮5d', 'N)BA'),
        'FJRCK': _0x51ce('‮5e', 'jg)j'),
        'bncgL': _0x51ce('‫5f', '%dCI'),
        'poOEo': _0x51ce('‮60', 'dEVQ'),
        'poUuw': _0x51ce('‫61', ']s1^'),
        'Xxplp': function(_0x391ed7, _0x5ad99c) {
            return _0x391ed7(_0x5ad99c);
        },
        'MyLjp': function(_0x125a32) {
            return _0x125a32();
        },
        'nHTtN': function(_0x1e4f7a, _0x1bb343) {
            return _0x1e4f7a == _0x1bb343;
        },
        'BUVBl': _0x51ce('‮62', '#03b'),
        'vQriu': _0x51ce('‫63', '$nH)')
    };
    let _0x44ee6a = _0x2a02f4[_0x51ce('‫64', 'KB7Q')](cookieToJson, cookie),
        _0x561f0e = _0x44ee6a[_0x51ce('‫65', '$WGW')] && _0x44ee6a[_0x51ce('‫66', '&IbV')][_0x51ce('‫67', 'k4J0')]('_')[0x0],
        {
            t = Date[_0x51ce('‮68', '9C&5')](), api, data
        } = _0x5dd62c,
        _0x126d6b = {
            'url': _0x51ce('‮69', '9&2o') + api + _0x51ce('‫6a', 'f*4j'),
            'method': _0x2a02f4[_0x51ce('‫6b', '&IbV')],
            'params': {
                'jsv': _0x2a02f4[_0x51ce('‫6c', '9&2o')],
                'appKey': _0x2a02f4[_0x51ce('‮6d', 'iDRY')],
                't': t,
                'sign': crypto[_0x51ce('‮6e', 'BD!n')](_0x561f0e + '&' + t + _0x51ce('‮6f', 'Tt]2') + data)[_0x51ce('‮70', 'BD!n')](),
                'api': api,
                'v': _0x2a02f4[_0x51ce('‫71', '1IvF')],
                'app': _0x2a02f4[_0x51ce('‫72', 'Blw&')],
                'dataType': _0x2a02f4[_0x51ce('‮73', 'aS8j')],
                'data': _0x5dd62c[_0x51ce('‫74', 'v^Gf')]
            },
            'headers': {
                'content-type': _0x2a02f4[_0x51ce('‮75', 'IORW')],
                'cookie': cookie,
                'host': _0x2a02f4[_0x51ce('‫76', 'wknF')],
                'referer': _0x2a02f4[_0x51ce('‮77', 'nG6p')],
                'user-agent': _0x51ce('‫78', 'IORW') + num + _0x51ce('‫79', 'wVd9') + num + _0x51ce('‮7a', 'N)BA')
            }
        };
    try {
        if (_0x2a02f4[_0x51ce('‮7b', 'Blw&')](_0x2a02f4[_0x51ce('‫7c', 'oU5o')], _0x2a02f4[_0x51ce('‮7d', '1IvF')])) {
            let {
                data, headers
            } = await _0x2a02f4[_0x51ce('‫7e', '9C&5')](axios, _0x126d6b);
            let [_0x24d059, _0xe18373] = data[_0x51ce('‫7f', 'ytXa')][0x0][_0x51ce('‮80', 'n^eQ')]('::');
            if (_0x2a02f4[_0x51ce('‫81', '$WGW')](_0x24d059, _0x2a02f4[_0x51ce('‫82', 'aMpO')])) return data;
            else if (_0x2a02f4[_0x51ce('‫83', 'f95H')](_0x24d059, _0x2a02f4[_0x51ce('‮84', 'wknF')])) {
                if (_0x2a02f4[_0x51ce('‫85', 'KB7Q')](_0x2a02f4[_0x51ce('‮86', '9C&5')], _0x2a02f4[_0x51ce('‮87', 'QNOt')])) {
                    console[_0x51ce('‮88', 'QNOt')](data[_0x51ce('‮89', 'iDRY')]);
                    console[_0x51ce('‮8a', 'PJup')](_0x2a02f4[_0x51ce('‫8b', 'IORW')]);
                } else {
                    console[_0x51ce('‮8c', 'BD!n')](_0xe18373);
                    return _0x24d059;
                }
            } else if ([_0x2a02f4[_0x51ce('‫8d', 'GvvM')], _0x2a02f4[_0x51ce('‫8e', 'PoeV')]][_0x51ce('‫8f', 'puG#')](_0x24d059)) {
                console[_0x51ce('‫2c', 'o88m')](_0x2a02f4[_0x51ce('‮90', '#03b')]);
                headers[_0x2a02f4[_0x51ce('‫91', '562d')]][_0x51ce('‮92', 'Ugac')](_0x36ecfb => {
                    if (_0x2a02f4[_0x51ce('‫93', 'nG6p')](_0x2a02f4[_0x51ce('‫94', 'dEVQ')], _0x2a02f4[_0x51ce('‫95', 'kBBJ')])) {
                        data = res[_0x51ce('‮96', 'BD!n')][_0x51ce('‮97', 'n^eQ')][_0x2a02f4[_0x51ce('‫98', 'kBBJ')]][_0x51ce('‫99', 'smmP')];
                    } else {
                        _0x36ecfb = _0x2a02f4[_0x51ce('‫9a', 'BD!n')](cookieToJson, _0x36ecfb[_0x51ce('‮9b', 'puG#')](';')[0x0]);
                        _0x44ee6a = Object[_0x51ce('‮9c', 'v^Gf')](_0x44ee6a, _0x36ecfb);
                    }
                });
                cookie = _0x2a02f4[_0x51ce('‫9d', '9C&5')](jsonToCookie, _0x44ee6a);
                await _0x2a02f4[_0x51ce('‮9e', 'puG#')](sleep);
                return _0x2a02f4[_0x51ce('‮9f', 'f*4j')](request, _0x5dd62c);
            } else if (_0x2a02f4[_0x51ce('‮a0', 'VtP4')](data[_0x51ce('‫a1', '562d')][0x0], _0x2a02f4[_0x51ce('‫a2', '$gEi')])) {
                if (_0x2a02f4[_0x51ce('‫a3', 'wknF')](_0x2a02f4[_0x51ce('‫a4', '9C&5')], _0x2a02f4[_0x51ce('‫a5', 'PJup')])) {
                    console[_0x51ce('‫a6', 'Ugac')](data[_0x51ce('‫a7', '%dCI')]);
                    console[_0x51ce('‮a8', '#03b')](_0x2a02f4[_0x51ce('‫a9', 'wVd9')]);
                } else {
                    return Object[_0x51ce('‫aa', '9&2o')](cookie[_0x51ce('‮ab', 'dEVQ')](';')[_0x51ce('‮ac', 'PJup')](_0x24596c => _0x24596c[_0x51ce('‫ad', 'v^Gf')]())[_0x51ce('‫ae', '562d')](_0x454fb6 => _0x454fb6[_0x51ce('‫af', 'nG6p')]()[_0x51ce('‮b0', 'oU5o')]('=')));
                }
            } else console[_0x51ce('‫b1', 'KB7Q')](_0xe18373);
        } else {
            let {
                extend: {
                    value
                },
                msgInfo,
                success
            } = res[_0x51ce('‫b2', 'Bnvs')] || {
                'extend': {}
            };
            if (value) console[_0x51ce('‫b3', 'wVd9')]('获得' + value + _0x51ce('‫b4', 'o88m'));
            else if (success) console[_0x51ce('‮22', 'Tt]2')](_0x2a02f4[_0x51ce('‮b5', 'wknF')]);
            else console[_0x51ce('‮b6', '9C&5')](msgInfo);
        }
    } catch (_0x4ec258) {
        console[_0x51ce('‫b7', 'Bnvs')](_0x4ec258[_0x51ce('‮b8', 'Ugac')]);
    }
}
async

function query() {
    var _0x10bf07 = {
        'YVAMM': function(_0x10db07, _0x12a51) {
            return _0x10db07(_0x12a51);
        },
        'oQBqb': _0x51ce('‮b9', 'jg)j'),
        'OtSNI': _0x51ce('‮ba', 'k4J0'),
        'RQjhq': _0x51ce('‮bb', 'Ugac'),
        'LTflf': function(_0xda1733, _0x43bed0) {
            return _0xda1733 === _0x43bed0;
        },
        'itRFU': _0x51ce('‫bc', '9&2o'),
        'uyrhP': _0x51ce('‮bd', '17Jv'),
        'ZrhjU': _0x51ce('‫be', 'PoeV'),
        'ExQKI': function(_0x5e5be8, _0x188574) {
            return _0x5e5be8 == _0x188574;
        },
        'uvScv': _0x51ce('‮bf', 'dEVQ'),
        'ZNvqq': function(_0x26682d, _0x52d568) {
            return _0x26682d == _0x52d568;
        },
        'bIrQe': _0x51ce('‫c0', 'f95H'),
        'oXUzm': function(_0x4d4c3b, _0x272e3a, _0x36d6f0) {
            return _0x4d4c3b(_0x272e3a, _0x36d6f0);
        },
        'MeZwW': _0x51ce('‫c1', ']s1^'),
        'PROOD': _0x51ce('‫c2', 'BD!n'),
        'DEnmK': function(_0x21f511, _0x58c1f0, _0x34b232, _0x351851) {
            return _0x21f511(_0x58c1f0, _0x34b232, _0x351851);
        },
        'dxlPw': function(_0x276b41, _0x5589a3) {
            return _0x276b41(_0x5589a3);
        },
        'eeast': _0x51ce('‮c3', '&IbV')
    };
    let _0x445375 = await _0x10bf07[_0x51ce('‫c4', '%dCI')](request, {
        'api': _0x10bf07[_0x51ce('‫c5', 'iDRY')],
        'data': JSON[_0x51ce('‮c6', 'o88m')]({
            'callSource': _0x10bf07[_0x51ce('‫c7', 'N)BA')],
            'lgrsRequestItems': JSON[_0x51ce('‮c8', 'Blw&')]([{
                'resId': 0x36ba6
            }]),
            'extra': JSON[_0x51ce('‫c9', 'iDRY')]({
                'source': _0x10bf07[_0x51ce('‫ca', '$gEi')]
            }),
            'latitude': _0x51ce('‮cb', 'puG#') + num,
            'longitude': _0x51ce('‮cc', 'f95H') + num
        })
    });
    let _0xf4b607;
    try {
        if (_0x10bf07[_0x51ce('‫cd', 'puG#')](_0x10bf07[_0x51ce('‮ce', 'oU5o')], _0x10bf07[_0x51ce('‮cf', 'f*4j')])) {
            v = _0x10bf07[_0x51ce('‫d0', 'GvvM')](cookieToJson, v[_0x51ce('‮d1', 'KZt(')](';')[0x0]);
            ck = Object[_0x51ce('‮d2', 'Ugac')](ck, v);
        } else {
            _0xf4b607 = _0x445375[_0x51ce('‫d3', 'EEw5')][_0x51ce('‫d4', 'f95H')][_0x10bf07[_0x51ce('‮d5', '562d')]][_0x51ce('‫d6', '$PO0')];
        }
    } catch (_0x45b9ec) {
        console[_0x51ce('‮8a', 'PJup')](_0x45b9ec[_0x51ce('‮d7', '562d')]);
    }
    if (_0xf4b607) {
        for (let {
                missionCollectionId: collectionId,
                missionDefId: defId,
                missionType: type,
                pageSpm,
                receiveStatus,
                rewardStatus,
                showTitle: title
            }
            of _0xf4b607) {
            tasks[_0x51ce('‫d8', '$(y@')](defId);
            if (_0x10bf07[_0x51ce('‫d9', '$(y@')](rewardStatus, _0x10bf07[_0x51ce('‫da', 'iDRY')])) continue;
            console[_0x51ce('‫db', 'EEw5')](title);
            if (_0x10bf07[_0x51ce('‮dc', '9&2o')](type, _0x10bf07[_0x51ce('‫dd', '$WGW')])) await _0x10bf07[_0x51ce('‫de', 'N)BA')](act, defId, collectionId);
            else if (_0x10bf07[_0x51ce('‮df', 'n^eQ')](type, _0x10bf07[_0x51ce('‮e0', 'Ugac')])) {
                if (_0x10bf07[_0x51ce('‮e1', '$WGW')](receiveStatus, _0x10bf07[_0x51ce('‫e2', '$nH)')])) await _0x10bf07[_0x51ce('‮e3', 'o88m')](act, defId, collectionId, type);
                await _0x10bf07[_0x51ce('‮e4', '*Xc7')](sleep, 0x1770);
                await _0x10bf07[_0x51ce('‮e5', '#03b')](pageView, defId, collectionId, pageSpm);
            }
            await _0x10bf07[_0x51ce('‫e6', 'kBBJ')](sleep, 0x1770);
        }
    } else console[_0x51ce('‫e7', 'ytXa')](_0x10bf07[_0x51ce('‮e8', '$gEi')]);
}
async

function act(_0x241d13, _0x2a3ce5, _0x4cfd7f = _0x51ce('‫c0', 'f95H')) {
    var _0x535995 = {
        'Focaj': function(_0x3988a5, _0x49177f) {
            return _0x3988a5(_0x49177f);
        },
        'leUbL': _0x51ce('‮e9', 'PoeV'),
        'iEJdz': _0x51ce('‫ea', '9&2o'),
        'EYBat': _0x51ce('‮eb', 'f95H'),
        'lSNhw': function(_0x1ae921, _0x4d0c35) {
            return _0x1ae921 instanceof _0x4d0c35;
        },
        'kLaBD': _0x51ce('‮ec', 'Mjg!')
    };
    let _0x3e4f4e = await _0x535995[_0x51ce('‮ed', 'f95H')](request, {
        'api': _0x535995[_0x51ce('‫ee', 'QNOt')],
        'data': JSON[_0x51ce('‮c8', 'Blw&')]({
            'resId': 0x367be,
            'source': _0x535995[_0x51ce('‮ef', 'k4J0')],
            'extra': JSON[_0x51ce('‮f0', 'n^eQ')]({
                'missionDefId': _0x241d13,
                'missionCollectionId': _0x2a3ce5,
                'missionType': _0x4cfd7f,
                'source': _0x535995[_0x51ce('‮f1', 'wknF')]
            }),
            'callSource': _0x535995[_0x51ce('‮f2', '#03b')],
            'latitude': _0x51ce('‮f3', 'dEVQ') + num,
            'longitude': _0x51ce('‫f4', 'jg)j') + num
        })
    });
    if (_0x535995[_0x51ce('‫f5', 'GvvM')](_0x3e4f4e, Object)) {
        let {
            extend: {
                value
            },
            msgInfo,
            success
        } = _0x3e4f4e[_0x51ce('‮f6', 'PoeV')] || {
            'extend': {}
        };
        if (value) console[_0x51ce('‮f7', 'Blw&')]('获得' + value + _0x51ce('‫f8', 'nG6p'));
        else if (success) console[_0x51ce('‮f9', 'VtP4')](_0x535995[_0x51ce('‮fa', 'VtP4')]);
        else console[_0x51ce('‮f9', 'VtP4')](msgInfo);
    }
}
async

function pageView(_0x3f2f6a, _0x379286, _0x332107 = _0x51ce('‮fb', 'puG#')) {
    var _0x3a14d6 = {
        'jlSts': function(_0x17a800, _0xe41d4c) {
            return _0x17a800(_0xe41d4c);
        },
        'UXway': _0x51ce('‮fc', 'PoeV'),
        'kOBkM': _0x51ce('‮fd', 'f95H'),
        'owQPq': _0x51ce('‫fe', '17Jv'),
        'ZhDeM': _0x51ce('‫ff', '562d'),
        'UXaPd': _0x51ce('‫100', '*Xc7'),
        'vVDKB': function(_0x1e897c, _0x17c377) {
            return _0x1e897c instanceof _0x17c377;
        },
        'ZRhly': _0x51ce('‫101', 'PoeV')
    };
    let _0xfedbfa = Date[_0x51ce('‮102', 'BD!n')](),
        _0x48be6c = _0x51ce('‮103', 'dEVQ') + _0xfedbfa,
        _0x5afb58 = _0x51ce('‫104', '%dCI') + _0xfedbfa;
    let _0x4bf6bc = await _0x3a14d6[_0x51ce('‮105', 'aS8j')](request, {
        't': _0xfedbfa,
        'api': _0x3a14d6[_0x51ce('‫106', 'k4J0')],
        'data': JSON[_0x51ce('‮c6', 'o88m')]({
            'collectionId': _0x379286,
            'missionId': _0x3f2f6a,
            'actionCode': _0x3a14d6[_0x51ce('‫107', 'Tt]2')],
            'pageFrom': _0x332107,
            'viewTime': 0xf,
            'bizScene': _0x3a14d6[_0x51ce('‫108', 'wknF')],
            'accountPlan': _0x3a14d6[_0x51ce('‮109', 'Bnvs')],
            'sync': !![],
            'asac': _0x3a14d6[_0x51ce('‫10a', 'Blw&')],
            'ua': _0x48be6c,
            'umidtoken': _0x5afb58
        })
    });
    if (_0x3a14d6[_0x51ce('‫10b', 'VtP4')](_0x4bf6bc, Object)) console[_0x51ce('‫db', 'EEw5')](_0x3a14d6[_0x51ce('‫10c', 'Tt]2')]);
}

function cookieToJson(_0x647056) {
    return Object[_0x51ce('‫10d', '17Jv')](_0x647056[_0x51ce('‮10e', 'v^Gf')](';')[_0x51ce('‮10f', 'Ugac')](_0x2d167e => _0x2d167e[_0x51ce('‮110', 'BD!n')]())[_0x51ce('‫111', 'ytXa')](_0x439bd0 => _0x439bd0[_0x51ce('‮112', 'KZt(')]()[_0x51ce('‫113', 'wknF')]('=')));
}

function jsonToCookie(_0x32f20) {
    return Object[_0x51ce('‮114', 'nG6p')](_0x32f20)[_0x51ce('‫115', '$nH)')](_0x235965 => _0x235965 + '=' + _0x32f20[_0x235965])[_0x51ce('‮116', '#03b')](';');
}

function sleep(_0x56c62d = 0x7d0) {
    return new Promise(_0x38417a => setTimeout(_0x38417a, _0x56c62d));
}

function getHideTasks() {
    var _0x2a1504 = {
        'VmiOo': _0x51ce('‮117', 'ytXa'),
        'gfnsr': _0x51ce('‮118', 'jg)j')
    };
    let _0x9194e6 = [{
        'collectionId': 0x24,
        'defId': 0x39211,
        'type': _0x2a1504[_0x51ce('‮119', ']s1^')]
    }, {
        'collectionId': 0x24,
        'defId': 0x118c31,
        'type': _0x2a1504[_0x51ce('‮11a', 'QNOt')]
    }, {
        'collectionId': 0xaa,
        'defId': 0x2e3bf1,
        'type': _0x2a1504[_0x51ce('‮11b', 'dEVQ')]
    }, {
        'collectionId': 0x24,
        'defId': 0x3567e1,
        'type': _0x2a1504[_0x51ce('‮11c', 'puG#')]
    }, {
        'collectionId': 0x24,
        'defId': 0x3e87d1,
        'type': _0x2a1504[_0x51ce('‮11d', '17Jv')]
    }, {
        'collectionId': 0x24,
        'defId': 0x3ff701,
        'type': _0x2a1504[_0x51ce('‫11e', 'wVd9')]
    }, {
        'collectionId': 0x24,
        'defId': 0x402db1,
        'type': _0x2a1504[_0x51ce('‮11f', 'Ugac')]
    }, {
        'collectionId': 0x24,
        'defId': 0x40ba51,
        'type': _0x2a1504[_0x51ce('‮11d', '17Jv')]
    }, {
        'collectionId': 0x24,
        'defId': 0x46d4d1,
        'type': _0x2a1504[_0x51ce('‮11a', 'QNOt')]
    }, {
        'collectionId': 0x24,
        'defId': 0x46ec41,
        'type': _0x2a1504[_0x51ce('‫120', '$WGW')]
    }, {
        'collectionId': 0x24,
        'defId': 0x4bd611,
        'type': _0x2a1504[_0x51ce('‮121', '*Xc7')]
    }, {
        'collectionId': 0x24,
        'defId': 0x534851,
        'type': _0x2a1504[_0x51ce('‫122', 'aS8j')]
    }, {
        'collectionId': 0x24,
        'defId': 0x586102,
        'type': _0x2a1504[_0x51ce('‫123', 'v^Gf')]
    }, {
        'collectionId': 0x24,
        'defId': 0x5f3701,
        'type': _0x2a1504[_0x51ce('‮124', 'nG6p')]
    }, {
        'collectionId': 0x24,
        'defId': 0x5fd341,
        'type': _0x2a1504[_0x51ce('‮125', 'KB7Q')]
    }, {
        'collectionId': 0x24,
        'defId': 0x630f61,
        'type': _0x2a1504[_0x51ce('‮126', '$PO0')]
    }, {
        'collectionId': 0x24,
        'defId': 0x661ca2,
        'type': _0x2a1504[_0x51ce('‫127', '9C&5')]
    }, {
        'collectionId': 0xaa,
        'defId': 0x663be3,
        'type': _0x2a1504[_0x51ce('‫128', 'GvvM')]
    }, {
        'collectionId': 0xaa,
        'defId': 0x686691,
        'type': _0x2a1504[_0x51ce('‮121', '*Xc7')]
    }, {
        'collectionId': 0x24,
        'defId': 0x6eb7c1,
        'type': _0x2a1504[_0x51ce('‮11c', 'puG#')]
    }, {
        'collectionId': 0x24,
        'defId': 0x6ebf91,
        'type': _0x2a1504[_0x51ce('‫129', 'iDRY')]
    }, {
        'collectionId': 0x24,
        'defId': 0x70f211,
        'type': _0x2a1504[_0x51ce('‫123', 'v^Gf')]
    }, {
        'collectionId': 0x24,
        'defId': 0x711921,
        'type': _0x2a1504[_0x51ce('‮12a', 'N)BA')]
    }, {
        'collectionId': 0x24,
        'defId': 0x714801,
        'type': _0x2a1504[_0x51ce('‮119', ']s1^')]
    }, {
        'collectionId': 0x24,
        'defId': 0x733431,
        'type': _0x2a1504[_0x51ce('‮12b', 'wknF')]
    }, {
        'collectionId': 0x24,
        'defId': 0x7372b2,
        'type': _0x2a1504[_0x51ce('‮12c', 'k4J0')]
    }, {
        'collectionId': 0x24,
        'defId': 0x7493c1,
        'type': _0x2a1504[_0x51ce('‮12d', 'ytXa')]
    }];
    let _0x503cd2 = [{
        'collectionId': 0x24,
        'defId': 0x74361,
        'type': _0x2a1504[_0x51ce('‫12e', '9&2o')]
    }, {
        'collectionId': 0x24,
        'defId': 0x4b2a31,
        'type': _0x2a1504[_0x51ce('‫12f', '*Xc7')]
    }, {
        'collectionId': 0x24,
        'defId': 0x56e231,
        'type': _0x2a1504[_0x51ce('‮130', 'v^Gf')]
    }, {
        'collectionId': 0x24,
        'defId': 0x56e231,
        'type': _0x2a1504[_0x51ce('‮131', 'EEw5')]
    }, {
        'collectionId': 0x24,
        'defId': 0x6ceb03,
        'type': _0x2a1504[_0x51ce('‮132', 'puG#')]
    }, {
        'collectionId': 0x24,
        'defId': 0x6deca1,
        'type': _0x2a1504[_0x51ce('‫133', '17Jv')]
    }, {
        'collectionId': 0x24,
        'defId': 0x6e5231,
        'type': _0x2a1504[_0x51ce('‮134', 'Ugac')]
    }, {
        'collectionId': 0x24,
        'defId': 0x7270e1,
        'type': _0x2a1504[_0x51ce('‮135', '&IbV')]
    }, {
        'collectionId': 0x24,
        'defId': 0x729fc1,
        'type': _0x2a1504[_0x51ce('‫136', 'N)BA')]
    }, {
        'collectionId': 0x24,
        'defId': 0x7343d1,
        'type': _0x2a1504[_0x51ce('‮135', '&IbV')]
    }, {
        'collectionId': 0x24,
        'defId': 0x73d071,
        'type': _0x2a1504[_0x51ce('‫137', 'oU5o')]
    }, {
        'collectionId': 0x24,
        'defId': 0x73d841,
        'type': _0x2a1504[_0x51ce('‮138', '%dCI')]
    }, {
        'collectionId': 0x24,
        'defId': 0x7464e1,
        'type': _0x2a1504[_0x51ce('‫139', 'Mjg!')]
    }, {
        'collectionId': 0x24,
        'defId': 0x746cb1,
        'type': _0x2a1504[_0x51ce('‮13a', 'IORW')]
    }, {
        'collectionId': 0x24,
        'defId': 0x747481,
        'type': _0x2a1504[_0x51ce('‮13b', 'aMpO')]
    }, {
        'collectionId': 0x24,
        'defId': 0x747c51,
        'type': _0x2a1504[_0x51ce('‮13a', 'IORW')]
    }, {
        'collectionId': 0x24,
        'defId': 0x748421,
        'type': _0x2a1504[_0x51ce('‫13c', 'Blw&')]
    }, {
        'collectionId': 0x24,
        'defId': 0x752061,
        'type': _0x2a1504[_0x51ce('‮13d', '$(y@')]
    }, {
        'collectionId': 0x24,
        'defId': 0x752061,
        'type': _0x2a1504[_0x51ce('‮13a', 'IORW')]
    }, {
        'collectionId': 0x24,
        'defId': 0x752831,
        'type': _0x2a1504[_0x51ce('‫13e', 'jg)j')]
    }, {
        'collectionId': 0x24,
        'defId': 0x752831,
        'type': _0x2a1504[_0x51ce('‫133', '17Jv')]
    }, {
        'collectionId': 0x24,
        'defId': 0x752832,
        'type': _0x2a1504[_0x51ce('‫139', 'Mjg!')]
    }, {
        'collectionId': 0x24,
        'defId': 0x753001,
        'type': _0x2a1504[_0x51ce('‫13f', 'f*4j')]
    }, {
        'collectionId': 0x24,
        'defId': 0x753001,
        'type': _0x2a1504[_0x51ce('‫140', '562d')]
    }, {
        'collectionId': 0x24,
        'defId': 0x754771,
        'type': _0x2a1504[_0x51ce('‫12e', '9&2o')]
    }, {
        'collectionId': 0x24,
        'defId': 0x754771,
        'type': _0x2a1504[_0x51ce('‫141', 'GvvM')]
    }, {
        'collectionId': 0x24,
        'defId': 0x754f41,
        'type': _0x2a1504[_0x51ce('‮142', 'nG6p')]
    }, {
        'collectionId': 0x24,
        'defId': 0x754f41,
        'type': _0x2a1504[_0x51ce('‫13e', 'jg)j')]
    }, {
        'collectionId': 0x24,
        'defId': 0x758dc1,
        'type': _0x2a1504[_0x51ce('‫143', 'QNOt')]
    }, {
        'collectionId': 0x24,
        'defId': 0x75ad01,
        'type': _0x2a1504[_0x51ce('‫139', 'Mjg!')]
    }];
    return [..._0x9194e6, ..._0x503cd2];
};
_0xodS = 'jsjiami.com.v6';