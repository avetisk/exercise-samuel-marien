// import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Screen from './components/Screen';
import ScreenMinionOne from './components/ScreenMinionOne';
import ScreenMinionTwo from './components/ScreenMinionTwo';
import ScreenMinionThree from './components/ScreenMinionThree';
import Shop from './components/Shop';
import DpsScreen from './components/DpsScreen';
import BonusScreen from './components/BonusScreen';

function App() {
  return (
    <div className="container m-auto border border-dark p-5">
      <header className="App-header text-primary text-center">Title App</header>
      <div className="theMain border border-dark d-flex justify-content-between">
        <div className="screens">
          <div className="basicScreen">
            <Screen />
            <DpsScreen />
          </div>
          <div className="minionScreens">
            <ScreenMinionOne />
            <ScreenMinionTwo />
            <ScreenMinionThree />
            <BonusScreen />
          </div>
        </div>

        <div className="shop">
          <Shop />
        </div>
      </div>
    </div>
  );
}

export default App;
