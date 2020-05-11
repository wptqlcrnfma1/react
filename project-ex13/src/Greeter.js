import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Greeter extends Component{    
    render(){ 
         return (
             <div>
            <h1>Hello {this.props.name}</h1>
            </div>
         );
    }
}


Greeter.propTypes = {
    name : PropTypes.string.isRequired
}

// Prop Default Value
Greeter.defaultProps = {
    name: '둘리의 친구'
}

// Prop Validator
/*
    기본형 Validator
        PropTypes.string
        PropTypes.number
        PropTypes.boolean
        PropTypes.object

    조합형 Validator
        PropTypes.oneOFType    ex) PropTypes.oneOFType([PropTypes.string, PropTypes.number])
        PropTypes.arrayOF      ex ) PropTypes.arrayOF(PropTypes.string)
        PropTypes.objectOF     ex ) PropTypes.objectOF(PropTypes.string) : string 타입의 속성이 있는 객체
    
            string 타입 속성 객체 ex {
                a : "hello"
            }
    
        PropTypes.shape         ex) PropTypes.shape(
                                                {
                                                    name: PropTypes.string,
                                                    price: PropTypes.number,
                                                    count: PropTypes.number,
                                                    isTrue : PropTypes.boolean
                                                }

    그 밖에 ...
        PropTypes.element : html의 element
        PropTypes.instanceof

*/

