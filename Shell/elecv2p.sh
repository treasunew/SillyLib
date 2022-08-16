cd ~
if [ $(command -v wget | grep -c "wget") -lt 1 -o $(command -v node | grep -c "node") -lt 1 -o $(command -v yarn | grep -c "yarn") -lt 1 ]
then yum update || apt update
yes | yum upgrade || yes | apt upgrade
yum update || apt update
yum install wget nodejs yarn -y || apt install wget nodejs yarn -y
fi
npm install -g pm2
yarn global add pm2
last_version=$(curl -s https://github.com/elecV2/elecV2P/tags | grep -o "/tag/.*" | cut -c 6- | cut -d '"' -f1 | sed -n 1p)
rm -rf $last_version.tar.gz
wget https://github.com/elecV2/elecV2P/archive/refs/tags/$last_version.tar.gz
if [ ! -d elecV2P ]
then mkdir elecV2P
cz=安装
else cz=更新
fi
tar --extract --file=$last_version.tar.gz --strip-components=1 --directory=elecV2P
rm -rf $last_version.tar.gz
cd ~/elecV2P
yarn
if [ $(grep -c "$last_version" package.json) -ge 1 ]
then cd ~
echo "cd ~/elecV2P && PORT=8000 node index.js" > v2p.sh
chmod +x v2p.sh
clear
echo v2p已经$cz完成，当前版本为$last_version，输入 ./v2p.sh 启动
else clear
echo v2p$cz失败，请检查全局或更换代理后重新运行脚本
fi