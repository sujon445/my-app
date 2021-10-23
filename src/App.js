import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello';
import Welcome from './mycomponents/Welcome';

import Condition1 from './mycomponents/Condition1';
import VariableElement from './mycomponents/VariableElement';

import Refresh  from './mycomponents/Refresh';

import DomRender from './mycomponents/DomRender';
import DomeNode from './mycomponents/DomeNode';

import Form from './mycomponents/Form';
import Form1 from './mycomponents/Form1';
import Form2SignUp from './mycomponents/Form2SignUp';
import Text from './mycomponents/Text';


function App() {
  return (
    <div className="App">
      
      <Text/> <hr/>
      
      <Form2SignUp/> <hr/><hr/>
      
      <Form1/> <hr/>
      
      <Form/><hr/>

      <DomeNode /><hr/>

      <DomRender></DomRender><hr/>

      <Refresh></Refresh> <hr/>

      <VariableElement></VariableElement> <hr/>

      <Condition1></Condition1><hr/>

      <Welcome></Welcome> <hr/>

      <Hello></Hello> <hr/>
    </div>
  );
}

export default App;
