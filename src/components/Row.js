import React, {Component} from 'react';
import './Table.css'

class Row extends Component {
    
    render() {
        const { item } = this.props;
        let className = '';
        if (item.id % 2 === 0) {
            className += 'item-even';
        }
        return <div class="table">
                <table>
                  <tr>
                    <th>#</th>
                    <th>Fisrt</th>
                    <th>Last</th>
                    <th>Handle</th>
                  </tr>
                  <tr className={className}>
                    <td>{item.id}</td>
                    <td>{item.first}</td>
                    <td>{item.last}</td>
                    <td>{item.handle}</td>
                  </tr>
                </table>
            </div>;
    }
}

export default Row;