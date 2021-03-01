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

import { Provider } from './context/Context';

function App() {
  return (
    <div className="theMain container mt-5 p-5">
      <div className="theMain d-flex justify-content-between">
        <Provider>
          <div className="test">
            <h1 className="appTitle text-center font-weight-bold">
              Kill the Hunters
            </h1>

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
          </div>
          <div className="shop border-dark border-left">
            <Shop />
          </div>
        </Provider>
      </div>
    </div>
  );
}

export default App;
