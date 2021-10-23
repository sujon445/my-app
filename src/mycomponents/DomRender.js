import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class DomRender extends Component {


    myFun(){

        var container = document.getElementById("myID");
        var element = <h1>My Name Is Rana. I am From ReactDOM</h1>
        var callback = function(){
            alert("Hi I am callback");
        }

        ReactDOM.hydrate(element, container, callback)
    }



    render() {
        return (
            <div>
                <button onClick={this.myFun}>Change</button>
                <h1 id="myID">My Name Is Sujon</h1>
            </div>
        );
    }
}

export default DomRender;