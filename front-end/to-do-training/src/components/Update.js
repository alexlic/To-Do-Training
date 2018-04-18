import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import "./Table.css"

export default class Update extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            description: this.props.description,
            open: false,
            newTitle: this.props.title,
            newDescription: this.props.description
        }
    }


    inputOnChangeTitle = (evt) => {
        this.setState({
            newTitle: evt.target.value
        })
    }

    inputOnChangeDescription = (evt) => {
        this.setState({
            newDescription: evt.target.value
        })
    }


    handleClick = () => {
        console.log("HOLISSS" + this.props.title)
        fetch(process.env.REACT_APP_BACK_SERVER + '/todolist/update-activities/' + this.props.id, {
            method: 'PUT',
            mode: 'CORS',
            body: JSON.stringify({ title: this.state.newTitle, description: this.state.newDescription }),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(function() {
                window.location.reload()
            })
    }

    openModal = () => {
        this.setState({
            open: true
        })
    }

    closeModal = () => {
        this.setState({
            open: false
        })
    }


    render() {
        return (
            <div>
                <button className = "button edit" onClick={this.openModal}>Edit</button>
                <Popup open={this.state.open} closeOnDocumentClick onClose={this.closeModal}>

                    <div className="modal">
                        <a className="close" onClick={this.closeModal}>
                            &times;
                            </a>

                        <p> EDIT TO-DO </p>
                        <label>Title</label>
                        <input input="text" value={this.state.newTitle} inputtitle={this.state.title} onChange={this.inputOnChangeTitle} />

                        <label>Description</label>
                        <input input="text" value={this.state.newDescription} inputedescription={this.newDescription} onChange={this.inputOnChangeDescription} />
                        <br />
                        <button onClick={this.handleClick}> OK </button>

                    </div>
                </Popup>

            </div>
        )
    }

}    