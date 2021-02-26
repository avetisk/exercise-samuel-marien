import styled from '@emotion/styled';
import { GiGecko } from 'react-icons/gi';

const StyledScreen = styled('div')`
  border-radius: 5px;
  width: 400px;
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

const ScreenMinionOne = (props) => {
  return (
    <div>
      <StyledScreen className="p-2">
        <GiGecko
          style={{
            fontSize: 35,
          }}
        />
      </StyledScreen>
    </div>
  );
};

export default ScreenMinionOne;
