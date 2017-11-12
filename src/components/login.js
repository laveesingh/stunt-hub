// screen displayed at /login endpoint
import React from 'react'
import { Link } from 'react-router-dom'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux'

import { 
  loginUsernameChange,
  loginPasswordChange,
} from '../actions/login'
import '../styles/login.css'

class Login extends React.Component {

  render () {
    return (
      <Grid container>
        <Grid item lg={2}></Grid>
        <Grid item lg={8}>
          <Paper id='paper'>
            <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={12} >
                <Grid container justify='center'>
                  <form noValidate autoComplete='off' >
                    <TextField  id='username' label='Username' value={this.props.username} 
                      onChange={this.props.handleUsernameChange} margin='normal' autoFocus
                    />
                    <br />
                    <TextField type='password' id='password'  value={this.props.password}
                      onChange={this.props.handlePasswordChange} margin='normal' label='Password'
                    />
                    <br />
                    <Button id='btn-submit' raised color='primary'>
                      Submit
                    </Button>
                  </form>
                </Grid>
              </Grid> {/* item ends */}
              <Grid item lg={12} md={12} sm={12}>
                <Typography type='body1' component='p'>
                  Not yet registered?
                </Typography>
                <Button raised color='primary' id='btn-reg'>
                  <Link to='/signup'>Register here</Link>
                </Button>
              </Grid>  {/* item ends */ }
            </Grid> {/* container ends */}
          </Paper> 
        </Grid>
        <Grid item lg={2}></Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.loginUsernameChange.username,
    password: state.loginPasswordChange.password,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUsernameChange: (event) => dispatch(loginUsernameChange(event.target.value)),
    handlePasswordChange: (event) => dispatch(loginPasswordChange(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

