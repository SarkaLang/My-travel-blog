import about from './../../../HomePage/img/about.jpg'
import './about.css'
export const About = () => {
  return (
    <div className="about-container">
      <div className="about-me">
       <img className="about-photo" src={about} alt="photoOfMe"></img>
      </div>
      <div className="about-information">
        <div className="about-text">
         <p className="about-text_p">
          Ahoj
         </p>
        </div>
      </div>
   </div>
  )
}
