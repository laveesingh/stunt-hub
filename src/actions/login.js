export function loginUsernameChange(username){
  return {
    type: 'LOGIN_USERNAME_CHANGE',
    username
  }
}

export function loginPasswordChange(password){
  return {
    type: 'LOGIN_PASSWORD_CHANGE',
    password
  }
}
