import React from 'react'

export default function TableRow ({title, description}) {
  return <tr>
    <td> {title} </td>
    <td> {description} </td>
  </tr>
}
