import React from 'react';
import logo from './logo.svg';
import './App.css';
import { User } from './User';


const val= (value :string)=>{
  console.log(value)
  console.log("its me boiii")
  return value
}

function App() {
  return (
    <div className="App">
      <User name='Testprop' lastname='Changed prop auto show' myfun={val} />
    </div>
  );
}

export default App;
