import './App.css';
import Accordions from './components/Accordions/Accordions';
import Header from './components/Header/Header';
import InfoCard from './components/InfoCard/InfoCard';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Header/>
    {/* <Accordions/> */}
    <InfoCard/>
    </div>
  );
}

export default App;
