import React, {Component} from 'react'
import TableRow from './TableRow'
import './Table.css'

export default class Table extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activities: []
    };
  }

  componentDidMount () {
    fetch(process.env.REACT_APP_BACK_SERVER+'/todolist/get-activities')
      .then(response => response.json())
      .then(data => 
        this.setState({activities: data }) 
      );
  }

  render () {
    const { activities } = this.state
    return(
      <table className="main-table">
        <thead>
          <tr className="thead-row">
            <th className="thead-row-content">TITLE</th>  
            <th colSpan="2" className="thead-row-content">DESCRIPTION</th>          
          </tr>
        </thead>
        <tbody>
          { activities.map( activity => <TableRow title={activity.title} description={activity.description}/> ) }
        </tbody>
      </table>
      )
    }
}