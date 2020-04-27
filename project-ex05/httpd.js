//node가 할 수 있는 일은 server를 만들어주는...

//express 라이브러리 설치

//내장서버 springboot에서 bootapp느낌


const path = require('path');
const express = require('express');


const app = express();

app.use('/', express.static(path.resolve(',' ,'public'))); //정적인 자원은 자동 assets, path는 경로관련 모듈들 resolve는 함수

app.listen(8080, function(){
    console.log('starts ... at 8080');
});

