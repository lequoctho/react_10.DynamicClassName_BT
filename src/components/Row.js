import React, {Component} from 'react';
import './Row.css'

class Row extends Component {
    
    render() {
        const { row } = this.props;
        let className = '';
        if (row.id % 2 === 0) {
            className += 'item-even';
        }
        return <tr className={className}>
                    <td>{row.id}</td>
                    <td>{row.first}</td>
                    <td>{row.last}</td>
                    <td>{row.handle}</td>
                  </tr>;
    }
}

export default Row;