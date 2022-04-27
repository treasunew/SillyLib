const filehandle = require('fs');
const path = require('path');
/* *
    存储用户数据    
 */

//导出storeUser这个函数，可供外部使用  箭头函数有三个参数
    exports.storeUser = (userID, userData,userCk,ID) => {
        const user = {
          userID: userID,
          userData: userData,
          userCK: userCk,
          date: new Date().toLocaleString()
        }
      //调用主程序的getStore()
        const data = this.getStore()
        const file = path.join(__dirname, '../config/User.json')
        let i = 0
      
        // 存了则替换
        for (; i < data.users.length; i++) {
          if (data.users[i].userID === userID) {
            data.users[i] = user;
            break;
          }
        }
        // 未存则push
        if (i === data.users.length) {
          data.users.push(user)
        }      
        filehandle.writeFile(file, JSON.stringify(data), 'utf8', () => { })
      }
      
      exports.getStore = () => {
        return JSON.parse(filehandle.readFileSync(path.join(__dirname, '../config/User.json'), 'utf8'))
      }