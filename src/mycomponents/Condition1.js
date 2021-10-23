import React, {Component} from 'react';

class Condition1 extends Component {

    constructor (){
        super();

        this.state ={
            name: true
        }
    }
    
    
    
    render(){
        if (this.state.name=== true){
            return(
                <button>Log Out</button>
            );
        }
        else {
            return(
                <button>Login Button</button>
            );
        }
    }

}

export default Condition1;