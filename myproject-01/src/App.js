import React from 'react';
import FunctionNumber from './FunctionNumber';


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            number:0,
            fixNumber : 0
        };
    }

    render(){ 
        const {number, fixNumber} = this.state;
        console.log(this.state);
       
         return (
        <div>
           <FunctionNumber/>
           <h1>number : {number}</h1>
           <h2>fixNumber : {fixNumber}</h2>
           <button onClick={()=> {
                this.setState({number : number+1});
                this.setState({number : this.state.number + 1}); // 2씩 증가 안한다.
            }}
            >
              +1</button>
        </div>
         );

    }
}

export { App };