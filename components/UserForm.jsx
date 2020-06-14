import React, { Component } from 'react';


import UserDetail from './UserDetail';
import UserPersonal from './UserPersonal';


class UserForm extends Component
{

  state={

    step:0,
    firstname:'',
    email:'',
    lastname:'',
    bio:'',
    occupation:'',
    city:''
  }
  //handlechange
  handleChange=input=>(event)=>{

    this.setState({[input]:event.target.value})

  }
  //nextstep

  nextStep  =()=>
  {
    const {step}=this.state;
    this.setState({
      step:(step+1)%4

    })
  }
//nexstep
  prevtep  =()=>
  {
    const {step}=this.state;
    this.setState({
      step:step-1

    })

  }

   render()
   {
     
       const {step}=this.state;
       const{ firstname,email,lastname,bio,occupation,city}=this.state;
       const values={firstname,email,lastname,bio,occupation,city}
     switch(step)  
     {
       case 0:
       return(
                 <UserDetail

                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                 handleChange={this.handleChange}
                 values={values}
                 />

           ) 
       case 1:
       return(
                <UserPersonal

                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                 handleChange={this.handleChange}
                 values={values}
                 />
           ) 
       case 2:
       return(
         <h1>helloworld</h1>

           ) 

        case 3:
        return(
          <h1>helloworld</h1>

            )
     }
  }

}

export default UserForm;