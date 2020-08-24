import React from 'react'

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            password: '',
            userName: ''
        }
    }

    render(){
        return(<div>
            <span>Please click login</span><br /><br />
            <span>User Name</span>
            <input type = "text" onChange = {this.onUserNameChange} value = {this.state.userName}/><br />
            <span>Password</span>
            <input type = "password" onChange = {this.onPasswordChange} value = {this.state.password}/><br /><br />
            <button onClick = {this.onLoginClick} >Login</button>
        </div>)
    }

    onLoginClick = ()=>{
        this.props.history.push("/home", {userName: this.state.userName})
    }

    onUserNameChange =(e)=>{
        this.setState({
            userName: e.target.value
        })
    }

    onPasswordChange =(e)=>{
        this.setState({
            password: e.target.value
        })
    }
}

export default Login