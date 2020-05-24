import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import Table from './components/Table.js'

class App extends Component {
  constructor(){
    super();
    this.items = [
      {id: 1, first:'Mark', last: 'Otto', handle: '@mdo'},
      {id: 2, first:'Jacob', last: 'Thornton', handle: '@fat'},
      {id: 3, first:'Mark', last: 'Otto', handle: '@mdo'}
    ];
  }
  
  render() {
    return (
      <div className="App">
        <Table item={this.items}/>
      </div>
    );
  }
}

export default App;
