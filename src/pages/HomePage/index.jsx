import './style.css';
import { Header } from './Components/Header';
import {Footer} from './Components/Footer'
import { About } from './Components/About';
import { Destination } from './Destination';

export const HomePage = () => {
  return (
   <>
   <Header />
   <About/>
   <Destination/>
   <Footer />
   </>
  );
};
