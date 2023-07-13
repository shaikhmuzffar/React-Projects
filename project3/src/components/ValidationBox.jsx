import { TiTick } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

export default function ValidationBox({email}){
    const navigate=useNavigate();
    function handleDismiss(){
        navigate('/')
    }
    return(
        <section className="validationBox">
            <span className="tick"><TiTick /></span>
            <h1>Thanks for subscribing!</h1>
            <p>A conformation email has been sent to <span className='email'>{email}</span>. please open it and click the button inside to confirm your subscribtion.</p>
            <button type="submit" onClick={handleDismiss}>Dismiss message</button>
        </section>

    )
}