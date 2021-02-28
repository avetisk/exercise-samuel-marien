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
    <div className="container m-auto border border-dark p-5">
      <header className="App-header text-primary text-center">Title App</header>
      <div className="theMain border border-dark d-flex justify-content-between">
        <div className="screens">
          <Screen />
          <div className="minionScreens">
            <h2 className="text-center">Yours Army</h2>
            <ScreenMinionOne />
            <ScreenMinionTwo />
            <ScreenMinionThree />
          </div>
        </div>
        <div className="shop">
          <h2 className="text-center">Store</h2>
          <Shop />
        </div>
      </div>
    </div>
  );
}

export default App;
