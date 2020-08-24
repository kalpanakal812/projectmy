import React from 'react'

const UserTable = (props) => {
    return (
        <div>
            <table>
                <UserHeader />
                {
                    props.userData.map(user => {
                        return <UserData userProfile={user} onDeleteUser = {(_id)=>{
                            props.deleteClick(_id)
                        }}/>
                    })
                }
            </table>
        </div>
    )
}

const UserHeader = () => {
    return (<tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Role Name</th>
        <th>Active</th>
    </tr>)
}

const UserData = (props) => {
    return (<tr>
        <td>{props.userProfile.firstName}</td>
        <td>{props.userProfile.lastName}</td>
        <td>{props.userProfile.role}</td>
        <td><input type="checkbox" checked={props.userProfile.isActive} /></td>
        <td><button onClick = {()=>{props.onDeleteUser(props.userProfile._id)}}>Delete</button></td>
    </tr>)
}

export default UserTable;