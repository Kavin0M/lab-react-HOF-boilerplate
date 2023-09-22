import { Component } from 'react'

class NameDisplay extends Component {
  render() {
    return (
        <tr>
            <td>ID: {this.props.id} </td>
            <td>Name: {this.props.name} </td>
            <td>User Type: {this.props.userType} </td>
        </tr>
    )
  }
}

export default NameDisplay
