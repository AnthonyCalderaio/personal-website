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
http-server -p 8080 -a 0.0.0.0
