export function signupUsernameChange(username){
  return {
    type: 'SIGNUP_USERNAME_CHANGE',
    username
  }
}

export function signupPasswordChange(password){
  return {
    type: 'SIGNUP_PASSWORD_CHANGE',
    password
  }
}
