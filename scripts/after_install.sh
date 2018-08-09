#!/bin/bash
cd /home/ubuntu/zian.ke
./gradlew build
kill $(ps aux | grep 'java -jar' | awk '{print $2}')
java -jar "/home/ubuntu/zian.ke/build/libs/zian.ke-0.0.1-SNAPSHOT.jar" > /dev/null 2>&1 &
sudo cat nginx.conf > /etc/nginx/sites-available/default
sudo service nginx restart
