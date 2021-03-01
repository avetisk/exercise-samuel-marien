import styled from '@emotion/styled';
import { RiKnifeBloodFill } from 'react-icons/ri';

import { useContext } from 'react';
import Context from '../context/Context';

const StyledScreen = styled('div')`
  // border: 1px solid black;
  border-radius: 5px;
  width: 200px;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #c0c295;
  box-shadow: 3px 3px 2px #6c6e58 inset, 7px 7px 7px #9a9c7c inset;
  text-shadow: 2px 2px 2px #6c6e58;
  color: #47412d;
  transition: 0.9s;
  margin-top: 20px;
`;

const StyledTitle = styled('h2')`
  font-size: 3rem;
  color: #47412d;
  font-family: monospace;
`;

const StyledPara = styled('p')`
  font-size: 1.5rem;
  color: #47412d;
  font-family: monospace;
`;

const DpsScreen = (props) => {
  const { count } = useContext(Context);
  const { dps } = useContext(Context);

  return (
    <StyledScreen>
      <StyledTitle>
        {count}
        <RiKnifeBloodFill
          style={{
            fontSize: 25,
          }}
        />
      </StyledTitle>
      <StyledPara>
        {dps}
        <RiKnifeBloodFill
          style={{
            fontSize: 15,
            marginLeft: 3,
          }}
        />
        /s
      </StyledPara>
    </StyledScreen>
  );
};

export default DpsScreen;
