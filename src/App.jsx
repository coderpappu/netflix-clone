import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './App.css';
import CardMovie from "./components/CardMovie";
import HeroSec from './components/HeroSec';
import Menu from './components/Menu';
import Data from "./server/data";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

let speed = 1000;


function App() {
  return(
    <>
    <div className='container'>
     <Menu/>
     <HeroSec/>
     
    <div className='card_wrapper'>
    


    <Carousel
    showDots={false}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={speed}
    transitionDuration={500}
    responsive={responsive}
    
    >

    {
      Data.map((d) => <CardMovie data={d}/>)
    }

    </Carousel>
   
    </div>

    
    </div>
    </>
  )
}

export default App
