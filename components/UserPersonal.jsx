import React, { Component } from 'react';
import  RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TextField from 'material-ui/TextField';









class UserPersonal extends Component
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

                            hintText="enter your city"
                            floatingLabelText='city'
                            onChange={this.props.handleChange('city')}
                            defaultValue={values.city}


                              />
                              <br/>
                            <TextField

                            hintText="enter your occupation"
                            floatingLabelText='occupation'
                            onChange={this.props.handleChange('occupation')}
                            defaultValue={values.occupation}


                          />
                              <br/>

                            <TextField

                            hintText="enter your bio "
                            floatingLabelText='bio'
                            onChange={this.props.handleChange('bio')}
                            defaultValue={values.bio}


                          />
                          <br/>

                          <div className='button'>
                      
                          
                          <RaisedButton
                          label='continue'
                          primary={true}
                          onClick={nextStep}
                           style={{width:105,margin:10}}


                          
                          
                          
                          >
                         </RaisedButton>

                            <RaisedButton
                          label=' back  '
                          primary={false}
                          onClick={prevStep}
                         style={{width:105,margin:10}}

                          
                        
                          >
                         </RaisedButton>
                         </div>


                      
                        





                    </div>

                  

        </React.Fragment>
      </MuiThemeProvider>




      )


   }



}

export default UserPersonal;
                         