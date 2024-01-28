import './header.css'
import { useState } from 'react'

export const Header = () => {
  const [isOpen, setOpen] = useState();

  const toggleMenu = () => {
    setOpen(!isOpen)
  }
  
  return (
    <>
    <div className="banner">
      <div className="header-container">
        <div className="header-text">Travel Diary</div>
        <div className="navigation">
            <div className={`rollout-menu ${isOpen ?  '' : 'menu--close' }`}> 
            <a href="#kostarika">Domů</a>   
            <a href="#kostarika">Kostarika</a>
            <a href="#seychely">Seychely</a>
            <a href="#mauritius">Mauricius</a>
            <a href="#dominican">Dominikánská republika</a>
            </div>
            <div className="navigation-button">
            <button className={`menu--btn ${isOpen ? '' : 'close'}`} onClick={toggleMenu}>
            </button>
            </div>
        </div>
      </div>
      </div>
      </>
  )
}
