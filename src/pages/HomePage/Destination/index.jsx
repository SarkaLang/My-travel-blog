import './destination.css'
import costarica from './costa-rica.jpg'
import mauritius from './mauritius.jpg'
import seychely from './seychelly.jpg'

export const Destination = () => {
  
  return (
    <div className="destination-container">
    <h2>Navštívené destinace</h2>
    <div className="destination-col3">
      <div className="destination-one">
      <h3>Kostarika</h3>
      <img src={costarica}></img>
      </div>
      <div className="destination-two">
      <h3>Seychely</h3>
      <img src={seychely}></img>
      </div>
      <div className="destination-three">
      <h3>Mauricius</h3>
      <img src={mauritius}></img>
      </div>
    </div>
   </div>
  )
}
