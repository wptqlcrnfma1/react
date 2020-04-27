//node가 할 수 있는 일은 server를 만들어주는...

//express 라이브러리 설치

//내장서버 springboot에서 bootapp느낌


import * as path from 'path';
import express from 'express';

const app = express();

app.use('/', express.static(path.resolve('.', 'public')));
app.listen(8080, function(){
    console.log('starts.... at 8080');
});
