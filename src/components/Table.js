import React, {Component} from 'react';
import './Table.css'
import Row from './Row.js'

class Table extends Component {
    constructor(){
      super();
      this.items = [
        {id: 1, first:'Mark', last: 'Otto', handle: '@mdo'},
        {id: 2, first:'Jacob', last: 'Thornton', handle: '@fat'},
        {id: 3, first:'Mark', last: 'Otto', handle: '@mdo'}
      ];
    }
    
    render() {
        
        return <div class="table">
                <table>
                  <tr>
                    <th>#</th>
                    <th>Fisrt</th>
                    <th>Last</th>
                    <th>Handle</th>
                  </tr>
                  <div>
                    {
                      this.items.map((item, key) => <Row item={item} key={item.id}/> )
                    }
                  </div>
                </table>
            </div>;
    }
}

export default Table;