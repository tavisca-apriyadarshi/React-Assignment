import React from "react";
import ReactDOM from "react-dom";
class UserData extends React.Component {
    constructor(props) {
        super();
        this.state = ({
            firstName : props.user.firstName,
            lastName : props.user.lastName
        })
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        this.setState({
            firstName: newProps.user.firstName,
            lastName: newProps.user.lastName
        })
    }
    render() {
        return (
            <div className="Details">
                <label>First Name </label><br />
                <input type="text" id="firstName" value={this.state.firstName || ''} onChange={event => this.setState({ firstName: event.target.value })} /><br /> <br />
                <label>Last Name </label><br />
                <input type="text" id="lastName" value={this.state.lastName || ''} onChange={event => this.setState({ lastName: event.target.value })} /><br /> <br />
                <button onClick={() => this.props.funcUpdateDetail(this.state.firstName, this.state.lastName)}>Update</button>
            </div>
        )
    }
}

module.exports = UserData;