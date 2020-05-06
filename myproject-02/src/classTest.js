function Dog1(name){
    this.name = name;
}

Dog1.prototype.say = function(){
    console.log(this.name + ' 멍멍');
}

let dog1 = new Dog1('검둥이');
dog1.say();



//

class Dog2{
    constructor(name){
        this.name = name;
    }
    say(){
        console.log(this.name + " 멍멍");
    }
}

const dog2 = new Dog2('흰둥이');
dog2.say();