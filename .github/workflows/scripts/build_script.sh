#!/bin/bash

#1) Install node:
rm -rf /etc/yum.repos.d/nodesource-el* && 
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash - && 
yum install nodejs --enablerepo=nodesource && 
sudo dnf install nodejs -y && 

#2) install http-server
sudo npm install -g http-server &&

#3) serve:
cd /home/ec2-user/personal-website/browser &&
http-server -p 8080