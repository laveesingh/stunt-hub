import React from 'react'
import { Link } from 'react-router-dom'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux'

import { 
  signupUsernameChange,
  signupPasswordChange,
} from '../actions/signup'
import '../styles/signup.css'

class Signup extends React.Component {

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
    username: state.signupUsernameChange.username,
    password: state.signupPasswordChange.password,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUsernameChange: (event) => dispatch(signupUsernameChange(event.target.value)),
    handlePasswordChange: (event) => dispatch(signupPasswordChange(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

