
import ContectDisplay from './components/Displays/contentDisplay/ContectDisplay';
import InfoDisplay from './components/Displays/infoDisplay/InfoDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
    {/* <div >Siddhant Gupta Web</div> */}
    <div className='display'>
      <ContectDisplay />
      <InfoDisplay />
    </div>
    </div>
  );
}

export default App;
