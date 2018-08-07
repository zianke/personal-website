#!/bin/bash
./gradlew build
kill $(ps aux | grep 'java -jar' | awk '{print $2}')
nohup java -jar "/home/ubuntu/zian.ke/build/libs/zian.ke-0.0.1-SNAPSHOT.jar" & 
touch /home/ubuntu/mark3
