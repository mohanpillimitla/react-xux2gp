import React, { Component } from 'react';

class UserForm extends Component
{

  state={

    step:1,
    firstname:'',
    email:'',
    lastname:'',
    bio:'',
    occupation:'',



  }
  //handlechange


  handleChange=input=>(event)=>{

    this.setState({[input]:event.target.value})

  }






  //nextstep

  nextstep  =()=>
  {
    const {step}=this.state;
    this.setState({
      step:step+1

    })




  }
//nexstep

   nextstep  =()=>
  {
    const {step}=this.state;
    this.setState({
      step:step-1

    })




  }

   render()
   {
     return (
       
       
       <h1>hello</h1>
       
       
       )

   }





}

export default UserForm;