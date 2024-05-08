#!/bin/bash

#1) Install node:
sudo rm -rf /etc/yum.repos.d/nodesource-el*

# Install Node.js repository for YUM
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -

# Install Node.js using YUM
sudo yum install nodejs -y

#2) install http-server
sudo npm install -g http-server &&

#3) serve:
cd /home/ec2-user/personal-website/browser &&
nohup http-server -p 4200 -a 0.0.0.0 >/dev/null 2>&1 &
## Check with $ps aux | grep http-server