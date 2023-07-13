import { useState } from 'react';
import './ContactUs.css'
function ContactUs(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    const [status,setStatus]=useState(false)
    function submitHandler(e){
        e.preventDefault()
        console.log(true)
        setStatus(true)

    }
    return(
        <section className="contactUs">
            <h2>Contact Us</h2>
            <form onSubmit={submitHandler} action=""className="contactUs_form">
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Username'required /> 
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' required /> 
                <textarea name="" value={message} cols="30" onChange={(e)=>{setMessage(e.target.value)}} placeholder='give a message to us...' rows="6"/>
                <button type="submit">send</button>
            </form>
            {
                status ? <p className='response'>{name}, your response has been recorded!</p>:""
            }
        </section>
    )
}
export default ContactUs;