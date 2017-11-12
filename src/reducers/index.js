import { combineReducers } from 'redux'
import { loginUsernameChange, loginPasswordChange } from './login' 

export default combineReducers({
  loginUsernameChange,
  loginPasswordChange
})
