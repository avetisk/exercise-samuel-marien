import styled from "@emotion/styled";

import { GiParasaurolophus } from "react-icons/gi";

import { useContext } from "react";
import Context from "../context/Context";

const StyledScreen = styled("div")`
  height: 50px;
  display: flex;
  align-items: center;
  background: #c0c295;
  box-shadow: 3px 3px 2px #6c6e58 inset, 7px 7px 7px #9a9c7c inset;
  text-shadow: 2px 2px 2px #6c6e58;
  color: #47412d;
  transition: 0.9s;

  &:hover {
    color: black;
    transition: 0.9s;
  }
`;

const ScreenMinionTwo = (props) => {
  const { displayParasauro } = useContext(Context);
  return (
    <div>
      <StyledScreen className="p-2 rounded">
        {displayParasauro.length === 0 ? (
          <GiParasaurolophus style={{ fontSize: 35, opacity: "30%" }} />
        ) : (
          displayParasauro
        )}
      </StyledScreen>
    </div>
  );
};

export default ScreenMinionTwo;
