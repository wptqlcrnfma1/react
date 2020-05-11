setTimeout(function(){
    console.log('hello world1');
},1000);

setTimeout(() => {
    console.log('hello world2')
}, 1000);


//일반 함수는 자신이 종속된 객체를 this로 가르킨다
function BlackDog(){
    this.name = '흰둥이';
    return{
        name: '검둥이',
        bark: function(){
            console.log(this.name + ': 멍멍!');
        }
    }
}
const blackDog = new BlackDog();
blackDog.bark();

// 화살표 함수는 자신이 종속된 인스턴스를 가르킨다.
// 값을 연산해서 바로 반환 할 때 가독성이 좋다.
function WhiteDog(){
    this.name = '흰둥이';
    return{
        name: '검둥이',
        bark: () => {
            console.log(this.name + ': 멍멍!');
        }
    }
}
const whiteDog = new WhiteDog();
whiteDog.bark();


function twice(value){
    return value*2;
}

const triple = (value) => value *3;