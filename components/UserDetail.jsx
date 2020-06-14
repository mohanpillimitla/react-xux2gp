import React, { Component } from 'react';
import  RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';









class UserDetail extends Component
{
   
   render()
   {
     const {values}=this.props
      return(
        <MuiThemeProvider>

        <React.Fragment>

                 <AppBar/>
                 <TextField

                   hintText="enter your firstname"
                   floatingLabelText='firstname'
                   onChange={this.props.handleChange('firstname')}
                   defaultValue={values.firstname}


                 />
                   <TextField

                   hintText="enter your lastname"
                   floatingLabelText='LastName'
                   onChange={this.props.handleChange('lastname')}
                   defaultValue={values.lastname}


                 />
         

        </React.Fragment>
      </MuiThemeProvider>




      )


   }



}

export default UserDetail
