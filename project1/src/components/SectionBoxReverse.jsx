import './SectionBox.css'
import img1 from '../assets/images/img6.jpg'
function SectionBox(props) {
   return (<section>
      <div className="mainContainer" style={{ flexDirection: "row-reverse" }}>
         <div className="infoBox rev leftBox">
            <div>
               <h2>{props.firstHeader}</h2>
               <h1>{props.secondHeader}</h1>
               <h3>{props.thirdHeader}</h3>
               <p>{props.para}</p>
            </div>
         </div>
         <div className="imgBoxRev rightBox">
            <img src={props.image} alt="" />
         </div>
      </div>
   </section>)
}
export default SectionBox;