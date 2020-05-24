import React, {Component} from 'react';
import './Table.css'

class TodoItem extends Component {
    
    render() {
        //const { item } = this.props;
        let className = 'item';
        // if (item.isComplete) {
        //     className += ' TodoItem-complete';
        // }
        return <div class="table">
                <div className={className}>
                  <table>
                    <tr>
                      <th>#</th>
                      <th>Fisrt</th>
                      <th>Last</th>
                      <th>Handle</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </table>
                </div>
            </div>;
    }
}

export default TodoItem;