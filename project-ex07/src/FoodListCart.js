import React from 'react';

export default class FoodListCart extends React.Component{
    
    
    render(){ 
        console.log(this.props); 
         return (
          
         <li>{ this.props.price } : { this.props.level }</li>
            
         );
    }
}