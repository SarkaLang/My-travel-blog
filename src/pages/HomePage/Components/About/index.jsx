import data from '../../Data'
import './about.css'
import about from './about.jpg'

export const About = () => {
  return (
    <div className="about-container">
    <div className="about-col2">
    <img className="about-picture" src={about} alt="about me"></img>
    <p className="about-title"> Jmenuji se Šárka a cestování se věnuji již několik let. Navštívila jsem mnoho krásných destinací po celém světě. Vášeň k cestování se u mě rozhořela na mé první cestě do Kostariky, kde do sebe všechno začalo zapadat. Ten pocit, který člověk nedokáže vysvětlit už od pvní chvíle kdy se předním otevřou brány letiště. 
    <br /> 
    <br/>
    Miluju poznávání nových zemí a kultur. Stát se na chvíli toho všeho součástí.</p>
    </div>
    <div>
      <h1>{data.uvod.nadpis}</h1>
      <p>{data.uvod.popis}</p>
    </div>
    <div>
    <ul>
        {data.fotky.map((foto, index) => (
          <li key={index}>
            <img src={foto.src} alt={foto.popis} />
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}
