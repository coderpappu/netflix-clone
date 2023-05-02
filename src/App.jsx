import './App.css';
import CardMovie from './components/CardMovie';
import HeroSec from './components/HeroSec';
import Menu from './components/Menu';
import Data from "./server/data";



function App() {
  return(
    <>
    <div className='container'>
     <Menu/>
     <HeroSec/>
     
    <div className='card_wrapper'>
    {
      Data.map((d) => <CardMovie data={d}/>)
    }
   
    </div>

    
    </div>
    </>
  )
}

export default App
