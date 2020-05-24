import React, {Component} from 'react';
import './Table.css'

class Table extends Component {
    
    render() {
        const { items } = this.props;
        let className = '';
        
        return <div class="table">
                <table>
                  <tr>
                    <th>#</th>
                    <th>Fisrt</th>
                    <th>Last</th>
                    <th>Handle</th>
                  </tr>
                  items.map((item, key) => {
                    // if (item.id % 2 === 0) {
                    //   className += 'item-even';
                    // }
                   
                    <tr className={className}>
                      <td>item.id</td>
                      <td>item.first</td>
                      <td>item.last</td>
                      <td>item.handle</td>
                    </tr>
                  })
                  
                </table>
            </div>;
    }
}

export default Table;