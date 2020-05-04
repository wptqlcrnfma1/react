import React from 'react';
import FoodListItem from './FoodListItem'
import FoodListCart from './FoodListCart'

export default class FoodList extends React.Component{
    
    
    render(){ 
         return (
             <table>
                 <tr>
                    <td> <FoodListItem name='bread' quantity='1'/></td>
                    <td><FoodListItem name='Egg' quantity='3'/></td>
                    <td><FoodListItem name='Milk' quantity='5'/></td>
                 </tr>
                 <tr>
                    <td> <FoodListCart price='10000' level='1'/></td>
                    <td> <FoodListCart price='10000' level='1'/></td>
                    <td> <FoodListCart price='10000' level='1'/></td>
                 </tr>
             </table>
         );
    }
}