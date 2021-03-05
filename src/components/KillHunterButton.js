import styled from "@emotion/styled";
import { GiCaveman } from "react-icons/gi";

import { useContext } from "react";
import Context from "../context/Context";

const StyledScreen = styled("div")`
  border-radius: 15px;
  background: #c0c295;
  box-shadow: 3px 3px 2px #6c6e58 inset, 7px 7px 7px #9a9c7c inset;
  text-shadow: 2px 2px 2px #6c6e58;
  color: #47412d;
  transition: 0.9s;
  cursor: pointer;
  user-select: none; /* prevent from selecting text when making multiple quick clicks */

  &:hover {
    color: black;
    transition: 0.9s;
  }
`;

const Icon = styled(GiCaveman)`
  font-size: 180px;
`;

const KillHunterButton = (props) => {
  const { count, setCount } = useContext(Context);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <StyledScreen className="p-2 text-center" onClick={handleClick}>
      <Icon />
    </StyledScreen>
  );
};

export default KillHunterButton;
