import React from 'react'
import './Table.css'

/** 
 * Please replace buttons for your components
 * this buttons and CSS within them I made it just for test you can use, modify or delete if you want
 * 
*/

export default function TableRow ({title, description}) {
  title = title.toUpperCase()
  return <tr className="tbody-row">
    <td className="tbody-row-content"><strong>{title}</strong></td>
    <td className="tbody-row-content"> "{description}"</td>
    <td className="tbody-row-content">
      <i><button className="button edit">Edit</button></i>
      <i><button className="button delete">Del</button></i>
    </td>
  </tr>
}
