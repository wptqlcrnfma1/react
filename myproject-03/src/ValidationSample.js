import React, {Component} from 'react';

class ValidationSample extends Component{
    constructor(){
        super(...arguments);

        this.state={
            password:'',
            clicked: false,
            validated: false
        }
    }

    handleChange(event){
        this.setState({
            password: event.target.value
        });
    }

    handleButtonClick(event){
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
       this.input.focus();
    }


    render(){
        return(
            <div>
                <input
                type = "password"
                value = {this.state.password}
                onChange={this.handleChange.bind(this)}
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : 'success'}
                />
                <button onClick={this.handleButtonClick.bind(this)}>검증하기</button>
                
            </div>
        );
        
    }
}

export default ValidationSample;