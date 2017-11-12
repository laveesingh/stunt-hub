import React from 'react'
import { Link } from 'react-router-dom'
import Grid from 'material-ui/Grid'
import List, { ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Button from 'material-ui/Button'

import '../styles/home.css'

export default class Home extends React.Component{
  render(){
    return (
      <Grid container>
        <Grid item lg={2}></Grid>
        <Grid item lg={8} className='list-container'>
          <List className='inline-list'>
            <ListItem button className='list-item'>
              <Link className='list-link' to='/login'>
                <Button raised color='primary'>
                  Login
                </Button>
              </Link>
            </ListItem>
            <Divider />
            <ListItem button className='list-item'>
              <Link className='list-link' to='/signup'>
                <Button raised color='primary'>
                  Signup
                </Button>
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item lg={2}></Grid>

      </Grid>

    )
  }
}
