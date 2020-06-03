import React, { Component } from "react";
import PropTypes from "prop-types";
import "./css/styling.css";
class EForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.FirstName,
      lastName: this.props.LastName,
      edit: false,
      edited: false,
      cancel: false,
      back: false,
      front:false,
    };
  }

  render() {
    const back = this.state.back;
    const front = this.state.front;
    return (
      <div className={"main"}>
          <div className={"Canvas"}>
          <div className={"Form"} style={{
            transform:front ?  "rotateY(-180deg)":null,
            transform: back ? "rotateY(180deg)" : null,
            backfaceVisibility: back ? "visible" : "hidden"
            
          }}>
                {this.state.edit ?
                    <div className={"FormI FormI--back"}>
                        <form onSubmit={this.handleSubmit}>
                  <input type="text" name="firstName" placeholder="First Name Goes Here" value={this.state.firstName} onChange={this.handleChange}></input>
                  <br/>
                        <input type="text" name="lastName" placeholder="Last Name Goes Here" value={this.state.lastName} onChange={this.handleChange}></input><br/>
                        <button>Submit</button>
                        </form>
                    </div> : <div className={"FormI FormI--front"}><h1>{this.state.firstName}</h1>
                            <h1>{this.state.lastName}</h1></div>}
                    </div>
                </div>        
             

          
          <div>
            {this.state.edited ? (
              <span></span>
            ) : (
              <button onClick={this.handleClick}>Edit</button>
            )}
        </div>
        <div>
          {this.state.cancel ? (
            <button onClick={this.handleCancel}>Cancel</button>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    );
  }
  tog = () => {
  }
  handleClick = () => {
    if (this.state.edit === false) {      
      this.tog();
      this.setState({ edited: true, edit: true, cancel: true,back:true });
    } else {
      this.setState({ edit: false });
    }
  };
  handleCancel = () => {
    this.setState({
      firstName: this.props.FirstName,
      lastName: this.props.LastName,
      edited: false,
      edit: false,
      cancel: false,
      front: true,
      back:false,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      edit: false,
      edited: false,
      cancel: false,
      front: true,
      back:false,
    });
    this.setState({ cancel: false });
  };
  handleChange = (event) => {
    const val = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: val,
    });
  };
}

export default EForm;
