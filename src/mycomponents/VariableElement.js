import React, {Component} from 'react';

class VariableElement extends Component {

    constructor (){
        super();

        this.state ={
            login: false
        }
    }
    
    
    
    render(){
        return(
            this.state.login? 
            (
                <h1>I am fast</h1>
            ) 
            :
            (
                <h1> I am Slow</h1>
            ) 
        );
    }

}

export default VariableElement;