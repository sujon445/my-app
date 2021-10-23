import React, {Component} from 'react';


class Hello extends Component {

    constructor (){
        super();

        this.state = {
            name: "Rana"
        }
    }

    changeName (a){
        this.setState({name: a})
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName.bind(this," Sujon")} >Change Name</button>
            </div>
          
        );
    }


}

export default Hello;