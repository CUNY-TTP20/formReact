import React, { Component } from "react";
import PropTypes from "prop-types";

class EForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                firstName: this.props.FirstName,
                lastName: this.props.LastName,
                edit: false,
                edited: false,
                cancel:false,

            }
  }
    render() {
        // const edited = this.state.edited;
        return(<div>
            <div>
                {this.state.edit ?
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="firstName" placeholder="First Name Goes Here" value={this.state.firstName} onChange={this.handleChange}></input>
                        <input type="text" name="lastName" placeholder="Last Name Goes Here" value={this.state.lastName} onChange={this.handleChange}></input>
                        <button>Submit</button>
                    </form>:<div><h1>{this.state.firstName}</h1>
                    <h1>{this.state.lastName}</h1></div>}
                <div>{this.state.edited ? <span></span> : <button onClick={this.handleClick}>Edit</button> }</div>
                <button onClick={this.handleCancel}>Cancel</button>
            </div>
        </div>)
    }
    handleClick = () => {
        if (this.state.edit === false) {
            // this.setState({})
            this.setState({ edited: true,edit: true });
        } else {
            this.setState({edit:false})
        }
        
    }
    handleCancel = () => {
        this.setState({
            firstName: this.props.FirstName,
            lastName: this.props.LastName, edited: false, edit: false });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            edit: false,
            edited: true
        })

    }
    handleChange = (event) => {
        const val = event.target.value;
        this.setState({
        ...this.state,[event.target.name]: val
        })
    }
}

export default EForm;