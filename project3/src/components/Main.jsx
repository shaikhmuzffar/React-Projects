import { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
export default function Main({email,setEmail}) {
    const navigate=useNavigate();
    console.log(email);
    function submitHandler(e){
        e.preventDefault();
        navigate('/ValidationBox')
        setEmail("")
    }
    return (
        <section className="mainSection">
            <div className="leftBox">
                <h1>Stay Updated!</h1>
                <p>join 60,000+ products managers receving monthly updates on</p>
                <ul className="ticks">
                    <li> <span className="tick"><TiTick /></span> Prodcut discovery and building what matters  </li>
                    <li> <span className="tick"><TiTick /></span> Meausering to ensure updates are a success  </li>
                    <li> <span className="tick"><TiTick /></span> And much more!  </li>
                </ul>
                <form onSubmit={submitHandler}>
                    <div className="inputField">
                        <label htmlFor="input">Email address</label>
                        <input className="input" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='test@gmail.com' required />
                    </div>
                    <button type="submit">Subscribe to Monthly newsletter</button>
                </form>
            </div>
            <div className="rightBox"></div>
        </section>
    )
}

