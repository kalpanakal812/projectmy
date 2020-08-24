import React from 'react';
import UserTable from './Usertable/UserTable';
import {getAllUsers, deleteUser} from '../actions/usersaction';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        debugger;
        let {fetchUsers} = this.props.state
        return(<div>
            <span>Welcome to home page</span> &nbsp;&nbsp;
            <span style = {{color: "green"}}>{this.props.history.location.state.userName} </span><br /><br />
            <button onClick = {this.onLogoutClick} >{'Logout'}</button>
            {(fetchUsers && fetchUsers[0]) ? <UserTable userData = {fetchUsers[0]} deleteClick = {this.onDelete}/> : null}
        <br />
        Deleted ID :<span>{(fetchUsers && fetchUsers[0])? fetchUsers[1] : ''}</span>
        </div>)
    }

    onDelete = (id) =>{
        debugger;
        this.props.deleteUser(id);
    }

    onLogoutClick = ()=>{
        this.props.history.push("/")
    }

    componentDidMount () {
        this.props.getAllUsers()
    }
}

const mapStateToProps = state => {return {state}}
export default connect(mapStateToProps, { getAllUsers, deleteUser })(HomePage)
