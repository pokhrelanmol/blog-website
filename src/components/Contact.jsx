import React, { useState } from 'react';
// form validation

const Contact = () => {
	const[name,setName] = useState('')
	const[nameError,setNameError] = useState('')
  const[email,setEmail] = useState('')
	const[message,setMessage] = useState('')
	const[messageError,setMessageError]= useState('')
 
	const onSubmit =()=>{
	if(name.includes('@') ){
		setNameError('Invalid Name "@" is not Acceptable')
	}else if(name.length<3){
		setNameError('Name length must be more then 3 characters')

	}else if(message.length<5){
   setMessageError('message box must have more then 5 characters ')

	}else{ 
		return true
	 }
	
}
	return ( 

<form onSubmit = {(e)=>{
	e.preventDefault()
	
	onSubmit()}} style={{margin:'0 auto'}}>
   <h1> Contact us</h1>
<input type="text" onChange = {(e)=>setName(e.target.value)} value={name}  placeholder="Name"/>
<h5 style= {{color:"red",float:'left'}}>{nameError}</h5>
<input type="email" name="" id="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Email"/>

<textarea  id="message" onChange={(e)=>setMessage(e.target.value)} value={message} placeholder="Message"/>
<input type="submit" value=" Submit"/ > 

<h5 style= {{color:"red",float:'left'}}>{messageError}</h5>
</form>


	 );
}
 
export default Contact;