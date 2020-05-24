import React, {Component} from 'react';
import './Table.css'

class TodoItem extends Component {
    
    render() {
        //const { item } = this.props;
        let className = 'TodoItem';
        // if (item.isComplete) {
        //     className += ' TodoItem-complete';
        // }
        return <div class="table">
                <div className={className}>
                  <tr>
                    <th>#</th>
                    <th>Fisrt</th>
                    <th>Last</th>
                    <th>Handle</th>
                  </tr>
                  <tr>
                    
                  </tr>
                  <td>
                    <tr>1</tr>
                  </td>
                </div>
                
            </div>;
    }
}

export default TodoItem;