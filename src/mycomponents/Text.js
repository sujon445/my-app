import React, { Component } from 'react';

class Text extends Component {

    constructor(){
        super();

        this.state = {
            desc:"Please insert some text",
            userInput:""
        }
    }
    onChangeHandler= (event)=>{
        var myText = event.target.value;
        this.setState({userInput: myText});
    }
    
    render() {
        return (
            <div>
                <textarea onChange={this.onChangeHandler} placeholder="Your Message"/>
                <p>{this.state.userInput}</p>
            </div>
        );
    }
}

export default Text;