import { useContext } from "react";
import styled from "@emotion/styled";
import { GiGecko, GiHydra, GiParasaurolophus } from "react-icons/gi";

import ucfirst from "../utils/ucfirst";
import Context from "../context/Context";

const StyledMinionStats = styled("div")`
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

const icons = {
  gecko: GiGecko,
  parasauro: GiParasaurolophus,
  hydra: GiHydra,
};

const MinionStats = (props) => {
  const { minion } = props;
  const { [`display${ucfirst(minion)}`]: minions } = useContext(Context);
  const Icon = icons[minion];

  return (
    <div>
      <StyledMinionStats className="p-2 rounded">
        {!minions.length ? (
          <Icon style={{ fontSize: 35, opacity: "30%" }} />
        ) : (
          minions
        )}
      </StyledMinionStats>
    </div>
  );
};

export default MinionStats;
