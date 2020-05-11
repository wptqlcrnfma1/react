import React, { Component } from 'react';

class EventPractice extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            message : '',
            username : ''
        }
    }

    usernameChange(event){
        this.setState({
            username: event.target.value
        })
    }

    handleChange(event){
        this.setState({
            message: event.target.value
        });
    }

    buttonClick(event){
        alert(this.state.message + ":" + this.state.username)
    }

    keyPressEvent(event){
        if(event.key == 'Enter'){
        this.buttonClick();
         }
    }
   
    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value = {this.state.message}
                    onChange={this.handleChange.bind(this)
                        }
                    onKeyPress={this.keyPressEvent.bind(this)}
                    
                    >
                    </input>

                <input
                    type="text"
                    name="username"
                    placeholder="이름입력"
                    value= {this.state.username}
                    onChange={
                        this.usernameChange.bind(this)
                    }
                    >
                    </input>
                <button onClick = {this.buttonClick.bind(this)}

                >확인</button>
            </div>
        );
    }
}

export default EventPractice;