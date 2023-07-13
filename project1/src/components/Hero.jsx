import './Hero.css'
import hero from '../assets/images/hero.jpg'
function Hero() {
    return (
        <section className='hero'>
            
            <div className="heroInfo">
                <div>
                <h2>Get Upto</h2>
                <h1>80% off</h1>
                <h3>on Beauty products</h3>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam vitae qui iure totam perspiciatis deleniti voluptate amet quod omnis eum. Lorem ipsum dolor sit amet.
                </p>
                </div>
            </div>
            <div className='heroImg'>
            <img  src={hero} alt="" />
            </div>
        </section>
    )
}
export default Hero;