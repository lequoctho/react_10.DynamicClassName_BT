import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import Table from './components/Table.js'

class App extends Component {
  constructor(){
    super();
    this.items = [
      {id: 1, first:'Mark', last: true},
      {title:'Đi đá bóng', isComplete: true},
      {title:'Đi đổ xăng', isComplete: false}
    ];
  }
  
  render() {
    return (
      <div className="App">
        <Table/>
      </div>
    );
  }
}

export default App;
