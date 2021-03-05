import styled from "@emotion/styled";
// import Container from 'react-bootstrap/Container';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import KillHunterButton from "./components/KillHunterButton";
import MinionStats from "./components/MinionStats";
import Shop from "./components/Shop";
import KillStats from "./components/KillStats";
import BonusScreen from "./components/BonusScreen";

import { Provider } from "./context/Context";

const Container = styled("div")`
  background: url("https://wallpaperaccess.com/full/169668.jpg") no-repeat
    center 50%;
  border-radius: 20px;
  box-shadow: 0 0 10px;
`;

const Title = styled("h1")`
  color: #5a785b;
`;

const App = () => {
  return (
    <Provider>
      <Container className="container mt-5 p-5">
        <div className="row">
          <div className="col mr-4">
            <Title className="row justify-content-center mt-3 mb-5 display-3 font-weight-bold">
              Kill the Hunters
            </Title>
            <div className="row gx-5">
              <div className="col-4">
                <KillHunterButton />
                <KillStats />
              </div>
              <div className="col-8 d-flex flex-column justify-content-between">
                <MinionStats minion="gecko" />
                <MinionStats minion="parasauro" />
                <MinionStats minion="hydra" />
                <BonusScreen />
              </div>
            </div>
          </div>
          <div className="col-4 border-dark border-left">
            <Shop />
          </div>
        </div>
      </Container>
    </Provider>
  );
};

export default App;
