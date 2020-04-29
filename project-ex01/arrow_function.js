//함수를 화살표로 만드는 작업

const f = function(x){
    return x + x;
}

// const f = x => x + x;

//a => {return a+a;}
a => a +a; //{}을 주지 않으면 return을 생략해야한다. 한 줄로 끝나지 않으면 {}을 사용해서 return을 넣어줘야한다.

a => {

    return a;
}




console.log(f(10));