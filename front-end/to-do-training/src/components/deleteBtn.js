import React, {Component} from 'react'

export default class EditBtn extends Component {
  constructor (props) {
    super(props)
  }

  handleClick = () => {
    fetch('/todolist/delete/' + this.props.id, {
        method: 'delete'
      })
    window.location.reload()
  }

  render () {
    return (
      <button onClick={this.handleClick}> Delete </button>
    )
  }
}
