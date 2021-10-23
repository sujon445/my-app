import React, { Component } from 'react';

class Form extends Component {

    constructor(){
        super();
        this.state = {
            name:" "
        }
    }


    onChangeHandler =(event) => {
        var newName = event.target.value;
        this.setState({name:newName})

    }



    render() {
        return (
            <div>
                 {/* Event handler OnChange */}
                <form>
                    <p>Form: Event handler OnChange</p>
                    <p>{this.state.name}</p>
                    <input onChange={this.onChangeHandler} type="text" placeholder="Your Name"></input><br/>
                    <input type="submit" value="Submit Now"></input>
                </form>
                
                
                
                
                
                
                
                
                <hr/>
                <form>
                    <p>Form: My First Form</p>
                    <input type="text" placeholder="Your Name"></input><br/>
                    <input type="submit" value="Submit Now"></input>
                </form>
            </div>
        );
    }
}

export default Form; 