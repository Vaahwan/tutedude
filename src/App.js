import logo from './logo.svg';
import './App.css';
import First from './components/first';
import Navbar from './components/Navbar'
import ReferAndEarn from './components/ReferAndEarn'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <First/>
      {/* <ReferAndEarn/> */}
    </div>
  );
}

export default App;
