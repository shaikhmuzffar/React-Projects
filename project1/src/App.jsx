import hero from './assets/images/hero.jpg'
import img from './assets/images/img6.jpg'
import img1 from './assets/images/img5.jpg'
import img2 from './assets/images/img4.jpg'
import img3 from './assets/images/img2.jpg'
import SectionBox from "./components/SectionBox.jsx"
import SectionBoxReverse from "./components/SectionBoxReverse.jsx"
import Navigation from './components/navigation'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero'
import ContactUs from './components/ContactUs'
function App() {
    const style = {
      flexDirection:"row-reverse",
    }
  return (
    <>
    <Navigation/>
    <Hero/>
    <SectionBox image={img} firstHeader={"Design"} secondHeader={"Nothing can stop"} thirdHeader={"A good design"} />
    <SectionBoxReverse image={img3} firstHeader={"design"} secondHeader={"Foxpro"} thirdHeader={"product designning"}   para={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur odit, autem dignissimos aut magni omnis quod cupiditate fugit tenetur, blanditiis, rerum deleniti maiores nobis. Atque earum veniam quaerat repellendus voluptatum."}/>
    <SectionBox image={img2} firstHeader={"Your"} secondHeader={"Product"} thirdHeader={"future"}   para={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur odit, autem dignissimos aut magni omnis quod cupiditate fugit tenetur, blanditiis, rerum deleniti maiores nobis. Atque earum veniam quaerat repellendus voluptatum."}/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default App
