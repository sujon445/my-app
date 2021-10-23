import React, { Component } from 'react';

class Form2SignUp extends Component {

    
    constructor(){
        super();
        this.state = {
            fName:" ",
            lName:" ",
            email:" ",
            mobile:" "
        }
    }


    onChangeHandler =(event) => {
        var inputName = event.target.name;
        var inputValue = event.target.value;

        this.setState({[inputName]: inputValue});


        if (inputName === "fName"){

            var namePattern = /^[a-zA-Z ]{2,30}$/;
            if(!namePattern.test(inputValue)){
                this.setState({fName:"First Name Is Not valid"});
            }
        }

        if (inputName === "lName"){
            var lnamePattern = /^[a-zA-Z ]{2,30}$/;
            if(!lnamePattern.test(inputValue)){
                this.setState({lName:"Last Name Is Not valid"});
            }
        }

        if (inputName === "email"){
            var emailPattern = /\S+@\S+\.\S+/;
            if(!emailPattern.test(inputValue)){
                this.setState({email:"Email Name Is Not valid"});
            }
        }

        if (inputName === "mobile"){
            if(!Number(inputValue)){
                this.setState({mobile:"Mobile Name Is Not valid"});
            }
        }



    }

    render() {
        return (
            <div>
                <p>First Name: {this.state.fName}</p>
                <p>Last Name: {this.state.lName}</p>
                <p>Email: {this.state.email}</p>
                <p>Mobile no: {this.state.mobile}</p>

                <form>
                    <p>Working With Multiple Input Fields</p>
                    <h3>Sign Up</h3>

                    <input onChange={this.onChangeHandler} name="fName" type="text" placeholder="First Name"></input> <br/>

                    <input onChange={this.onChangeHandler} name="lName" type="text" placeholder="Last Name"></input><br/>

                    <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Email"></input><br/>

                    <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder="Mobile"></input><br/>

                    <input name="submit" type="submit" value="Save Now"></input>
                    
                </form>
            </div>
        );
    }
}

export default Form2SignUp;