import './SectionBox.css'
import img1 from '../assets/images/img6.jpg'
function SectionBox(props) {
   return (<section>
      <div className="mainContainer">
         <div className="infoBox leftBox">
            <div>
               <h2>{props.firstHeader}</h2>
               <h1>{props.secondHeader}</h1>
               <h3>{props.thirdHeader}</h3>
               <p>{props.para}</p>
            </div>
         </div>
         <div className="imgBox rightBox">
            <img src={props.image} alt="" />
         </div>
      </div>
   </section>)
}
export default SectionBox;