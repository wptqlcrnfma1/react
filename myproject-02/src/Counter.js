import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        //state의 초깃값 설정
        this.state = {
            number: 0,
            fixNumber : 0
        };
    }

    render(){
        const {number, fixNumber} = this.state; //state 조회 시 this.state로 조회
        return(
            <div>
                <h1>{number}</h1>
                <h1>{fixNumber}</h1>
                <button onClick={
                    () => {
                    this.setState({number: number+1});
                    }
                }
                >
                    +1
                </button>
            </div>
        )
    }
}

export default Counter; //모듈 내보내기