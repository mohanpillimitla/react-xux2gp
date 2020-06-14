import React, { Component } from 'react';


import UserDetail from './UserDetail';
import UserPersonal from './UserPersonal';
import Confirm from './Confirm';



class UserForm extends Component
{

  state={

    step:1,
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
      step:step+1

    })
  }
//nexstep
  prevStep  =()=>
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
       case 1:
       return(
                 <UserDetail

                 nextStep={this.nextStep}
                
                 handleChange={this.handleChange}
                 values={values}
                 />

           ) 
       case 2:
       return(
                <UserPersonal

                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                 handleChange={this.handleChange}
                 values={values}
                 />
           ) 
       case 3:
       return(
               <Confirm

                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                
                 values={values}
                 />

           ) 

        case 4:
        return(
          <h1>helloworld</h1>

            )
     }
  }

}

export default UserForm;