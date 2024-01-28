import './style.css';
import { Header } from './Components/Header';
import {Footer} from './Components/Footer'
import { Next } from './Components/Next';
import { About } from './Components/About';
import { Destinations } from './Components/Destinations';

export const HomePage = () => {
  return (
   <>
   <Header />
   <Next/>
   <About/>
   <Destinations/>
   <Footer />
   </>
  );
};
