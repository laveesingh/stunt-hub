
export function loginUsernameChange(state={username: ""}, action){
  switch(action.type){
    case 'LOGIN_USERNAME_CHANGE':
      return { username: action.username }
      break
  }
  return state
}

export function loginPasswordChange(state={password: ""}, action){
  switch(action.type){
    case 'LOGIN_PASSWORD_CHANGE':
      return { password: action.password }
      break
  }
  return state
}

