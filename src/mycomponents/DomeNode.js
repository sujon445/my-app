import React, { Component } from 'react';
import ReactDOM from 'react-dom'
class DomeNode extends Component {

    changeImg (){

        var imgID = document.getElementById("imgID");
        ReactDOM.findDOMNode(imgID).src="https://media.istockphoto.com/photos/horizontal-view-of-an-empty-sports-oval-picture-id483135005?s=612x612";

    }




    render() {
        return (
            <div>
                <button onClick={this.changeImg}>Change Image</button> <br/>
                <img id="imgID" src="https://media.istockphoto.com/photos/on-the-wings-of-freedom-birds-flying-and-broken-chains-charge-concept-picture-id1141549703?s=612x612"></img>
            </div>
        );
    }
}

export default DomeNode;