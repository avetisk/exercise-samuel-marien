import styled from "@emotion/styled";
import { RiKnifeBloodFill } from "react-icons/ri";

import { useContext } from "react";
import Context from "../context/Context";

const StyledScreen = styled("div")`
  border-radius: 15px;
  background: #c0c295;
  box-shadow: 3px 3px 2px #6c6e58 inset, 7px 7px 7px #9a9c7c inset;
  text-shadow: 2px 2px 2px #6c6e58;
  color: #47412d;
  transition: 0.9s;
`;

const Kills = styled("div")`
  color: #47412d;
  font-family: monospace;
`;

const StyledPara = styled("div")`
  font-size: 1.5rem;
  color: #47412d;
  font-family: monospace;
`;

const Icon = styled(RiKnifeBloodFill)`
  font-size: 25px;
`;

const IconSmall = styled(RiKnifeBloodFill)`
  font-size: 15px;
`;

const getDisplaySize = (count) => {
  if (count < 10000) {
    return "display-4";
  }
  if (count < 100000) {
    return "h1";
  }
  if (count < 1000000) {
    return "h2";
  }
};

const KillStats = (props) => {
  const { count } = useContext(Context);
  const { dps } = useContext(Context);

  return (
    <StyledScreen className="text-center mt-4 py-2">
      <Kills className={getDisplaySize(count)}>
        {count}
        <Icon />
      </Kills>
      <StyledPara>
        {dps}
        <IconSmall />
        /s
      </StyledPara>
    </StyledScreen>
  );
};

export default KillStats;
