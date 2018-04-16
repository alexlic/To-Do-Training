import React, {Component} from 'react'
import TableRow from './TableRow'

export default class Table extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: ''
    };
  }

  componentDidMount () {
    fetch('http://localhost:3001/todolist/get-activities')
      .then(response => response.json())
      .then(data => data.map( (data) => {
        this.setState( {title: data.title, description: data.description}) 
        console.log(data)
      }));
    console.log(this.state)
  }

  render () {
    return(
      <table>
        <thead>
          <tr>
            <th>Activities</th>          
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
        )
    }
}