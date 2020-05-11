import React from 'react';
import Greeter from './Greeter'



export default class App extends React.Component{
    render(){ 
         return (
             <div>
                 <Greeter name = "하이"/>
                 <Greeter name = "마이콜"/>
                 <Greeter name = "도우너"/>
             </div>
            
         );
    }
}

export { App };
