import React,{Component} from 'react';


class Welcome extends Component{
    
    constructor(){
        super()

        var obj = {
            name: "সুজন",
            age:["25","24","23","18"], 
            height: "5 feet 7 inch",
            weight: {
                class7: ["50","48","49"],
                class8: "51",
                class9: "52"
            }
        }       
        this.state = obj;
    
    }


    render(){
        return(
            <div>
                <h1>My name is: {this.state.name}</h1>
                <h1>My age is: {this.state.age[2]}</h1>
                <h1>My height is: {this.state.height}</h1>
                <h1>My weight is: {this.state.weight.class7[2]}</h1>
            </div>
        );
    }
}


export default Welcome;