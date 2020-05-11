import React, { Fragment, Component } from 'react';

//비제어 컴포넌트
//많은 데이터를 제어할때 쓴다.

class App extends Component{
    constructor(){
        super(...arguments);
    }
onLoginSubmit(event){ //값 빼와서 ajax로 로그인 시키면 된다.
    event.preventDefault();
    console.log(event.target.email.value + ":" + event.target.password.value)
}

    render(){

         return (
             <form onSubmit = {this.onLoginSubmit.bind(this)}>
                <div>
                    이메일 : <input name ='email' type = 'text'/> 
                </div>
                <br/>

                <div>
                    비밀번호 : <input name = 'password' type = 'password' />
                </div>

                <br/>

                <div>
                    <button type = 'submit'>로그인</button>
                </div>
             </form>

         );
    }
}

export { App };
