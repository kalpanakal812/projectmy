import { act } from "react-dom/test-utils"

const fetchUsers = (state = [], action)  => {
  switch (action.type) {
    case 'GET_ALL_USERS':
        return [...state, action.users]
    case 'DELETE_USERS':
        return [...state, action.deletedId]
    default:
      return state
  }
}

export { fetchUsers }