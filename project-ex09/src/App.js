import React, { Fragment, Component } from 'react';

//제어 컴포넌트

//onChange의 this 잘보기

class App extends Component{
    constructor(){
        super(...arguments); //배열
        this.state={
            keyword: '',
            contents: '',
            birthYear: 1985
        }
    }
    onInputChanged(event){
        //속성이 아닌 상태값을 변화해야한다.
        console.log(event.target.value); 
        // this.state = ''; X
       
        //this.setState({
        //    keyword : event.target.value
       // });

        this.setState({
            keyword : event.target.value.substr(0,5)
        });
    }

    onTextChanged(event){
        this.setState({
            contents : event.target.value
        });
    }

    onSelectChanged(event){
        this.setState({
            birthYear : event.target.value
        });
    }

    //<Fragment> 컴포넌트 2개 이상 묶어주는 거

    render(){

         return (
             <Fragment> 
                <div>
                    검색 : <input type = 'text' value = {this.state.keyword} onChange={this.onInputChanged.bind(this)}/> 
                </div>
                <br/>

                <div>
                    내용 : <textarea value = {this.state.contents} onChange = {this.onTextChanged.bind(this)} />
                </div>

                <br/>

                <div>
                    <select value = {this.state.birthYear} onChange = {this.onSelectChanged.bind(this)}>
                        <option value='1984' >1984</option>
                        <option value='1985' >1985</option>
                        <option value='1986' >1986</option>
                        <option value='1987' >1987</option>
                    </select>
                </div>
            </Fragment>

         );
    }
}

export { App };
