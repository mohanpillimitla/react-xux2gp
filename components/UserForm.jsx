import React, { Component } from 'react';


import UserDetail from './UserDetail';

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

  nextstep  =()=>
  {
    const {step}=this.state;
    this.setState({
      step:(step+1)%4

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
     
       const {step}=this.state;
       const{ firstname,email,lastname,bio,occupation,city}=this.state;
       const values={firstname,email,lastname,bio,occupation,city}
     switch(step)  
     {
       case 0:
       return(
                 <UserDetail

                 nextstep={this.nextstep}
                 prevstep={this.prevstep}
                 values={} 
                 />

           ) 
       case 1:
       return(
         <h1>world</h1>

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