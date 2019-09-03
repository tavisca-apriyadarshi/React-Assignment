import React from "react";
import ReactDOM from "react-dom";
import UserList from "./userList.jsx";
import UserData from "./userData.jsx";
import Header from "./common/header.jsx";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            arr: [{
                id: '1',
                firstName: 'Akshay',
                lastName: 'Rai'
            }, {
                id: '2',
                firstName: 'Rupika',
                lastName: 'Pawar'
            }, {
                id: '3',
                firstName: 'Shirin',
                lastName: 'Niyazi'
            }, {
                id: '4',
                firstName: 'Shivani',
                lastName: 'Mulay'
            }, {
                id: '5',
                firstName: 'Rajat',
                lastName: 'Gupta'
            }, {
                id: '6',
                firstName: 'Raja',
                lastName: 'Sachin'
            }, {
                id: '7',
                firstName: 'Anoop',
                lastName: 'Jalotta'
            }],
            selected: {
                id: null,
                firstName: null,
                lastName: null
            }
        };
    }
    selectedList(id) {
        this.setState({
            selected: this.state.arr[id - 1]
        });
    }
    updateUserDetails(fname, lname) {
        let updated = this.state.arr;
        let selected = this.state.selected.id - 1;
        updated[selected].firstName = fname;
        updated[selected].lastName = lname;
        this.setState({
            arr: updated
        })
    }
    render() {
        return (<div className="main">
            <Header/>
            <UserList usersList={this.state.arr} funcSelectedList={this.selectedList.bind(this)} />
            <UserData user={this.state.selected} funcUpdateDetail={this.updateUserDetails.bind(this)} />
        </div>);
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('content')
);