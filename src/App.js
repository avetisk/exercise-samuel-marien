// import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Screen from './components/Screen';
import ScreenMinionOne from './components/ScreenMinionOne';
import ScreenMinionTwo from './components/ScreenMinionTwo';
import ScreenMinionThree from './components/ScreenMinionThree';

function App() {
  return (
    <div className="container m-5 border border-dark p-5">
      <header className="App-header text-primary text-center"></header>
      <div className="screens">
        <Screen />
        <div className="minionScreens">
          <ScreenMinionOne />
          <ScreenMinionTwo />
          <ScreenMinionThree />
        </div>
      </div>
    </div>
  );
}

export default App;
