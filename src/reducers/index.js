import { combineReducers } from 'redux'
import { loginUsernameChange, loginPasswordChange } from './login' 
import { signupUsernameChange, signupPasswordChange } from './signup' 

export default combineReducers({
  signupUsernameChange,
  signupPasswordChange,
  loginUsernameChange,
  loginPasswordChange
})
