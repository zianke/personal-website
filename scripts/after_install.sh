#!/bin/bash
./gradlew build
kill $(ps aux | grep 'java -jar build' | awk '{print $2}')
nohup java -jar build/libs/zian.ke-0.0.1-SNAPSHOT.jar & 
