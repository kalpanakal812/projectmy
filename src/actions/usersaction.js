import { getUsersApi } from "../api/api"

export const getUsersAction = (users) => ({
  type: 'GET_ALL_USERS',
  users
})

export const deleteUsersAction = (deletedId) => ({
  type: 'DELETE_USERS',
  deletedId
})

export const getAllUsers = () => dispatch => {
  getUsersApi().then(data => {
    dispatch(getUsersAction(data))
  }).catch(err=>{
    console.log("Error :  "+ err)
  })
}

export const deleteUser = (deletedId) => dispatch => {
  dispatch(deleteUsersAction(deletedId))
}