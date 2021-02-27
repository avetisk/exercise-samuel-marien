// import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Screen from './components/Screen';
import ScreenMinionOne from './components/ScreenMinionOne';
import ScreenMinionTwo from './components/ScreenMinionTwo';
import ScreenMinionThree from './components/ScreenMinionThree';
import Shop from './components/Shop';

function App() {
  return (
    <div className="content container m-5 border border-dark p-5">
      <header className="App-header text-primary text-center"></header>
      <div className="theMain border border-dark d-flex justify-content-between">
        <div className="screens">
          <Screen />
          <div className="minionScreens">
            <ScreenMinionOne />
            <ScreenMinionTwo />
            <ScreenMinionThree />
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
