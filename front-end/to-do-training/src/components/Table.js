import React, {Component} from 'react'
import TableRow from './TableRow'
import activitiesService from '../services/activity.service'

export default class Table extends Component {

  componentDidMount () {
    const props = activitiesService.getActivities()
    console.log(props)
  }
  render(){return(<h1>hola</h1>) }

  /*render () {
    const {activities} = this.props   
    return(
      <table>
        <thead>
          <tr>
            <th>Activities</th>          
          </tr>
        </thead>
        <tbody>
          {activities.map( a => <TableRow name={a.title} description={a.description}/>)}
        </tbody>
      </table>
        )
    }*/

}