import React, { Component } from 'react';
import  RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';









class UserDetail extends Component
{
   
   render()
   {
     const {values,prevStep,nextStep}=this.props
      return(
        <MuiThemeProvider>

        <React.Fragment>

                 <div className="container">
                          <AppBar  title="Enter Your Details"

                          

                          style={{textAlign:'center'}}
                          
                          
                          />

                            <TextField

                            hintText="enter your firstname"
                            floatingLabelText='firstname'
                            onChange={this.props.handleChange('firstname')}
                            defaultValue={values.firstname}


                              />
                              <br/>
                            <TextField

                            hintText="enter your lastname"
                            floatingLabelText='lastname'
                            onChange={this.props.handleChange('lastname')}
                            defaultValue={values.lastname}


                          />
                              <br/>

                            <TextField

                            hintText="enter your email"
                            floatingLabelText='email'
                            onChange={this.props.handleChange('email')}
                            defaultValue={values.email}


                          />
                          <br/>
                      
                          
                          <RaisedButton
                          label='continue'
                          primary={true}
                          onClick={nextStep}
                          
                          
                          >
                         </RaisedButton>

                      
                        





                    </div>

                  

        </React.Fragment>
      </MuiThemeProvider>




      )


   }



}

export default UserDetail;
                         