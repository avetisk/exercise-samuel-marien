import styled from '@emotion/styled';
import { GiMonsterGrasp } from 'react-icons/gi';
import { GiBestialFangs } from 'react-icons/gi';
import { GiFlamingClaw } from 'react-icons/gi';
import { GiFrontTeeth } from 'react-icons/gi';
import { GiPocketWatch } from 'react-icons/gi';

const StyledDiv = styled('div')`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const StyledBtn = styled('h1')`
  width: 80px;
  height: 90px;
  margin: 0;
  background: #c0c295;
  box-shadow: 3px 3px 2px #6c6e58 inset, 7px 7px 7px #9a9c7c inset;
  text-shadow: 2px 2px 2px #6c6e58;
  color: #47412d;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & :nth-of-type(1) {
    opacity: 0.3;
  }
`;

const BonusScreen = (props) => {
  return (
    <StyledDiv>
      <StyledBtn>
        <GiMonsterGrasp
          style={{
            fontSize: 50,
            color: '#47412d',
          }}
        />
        <div className="d-flex justify-content-between align-items-start w-75">
          <p className="h3">5</p>

          <GiPocketWatch
            style={{
              fontSize: 30,
            }}
          />
        </div>
      </StyledBtn>
      <StyledBtn>
        <GiBestialFangs
          style={{
            fontSize: 50,
            color: '#47412d',
          }}
        />
        <div className="d-flex justify-content-between align-items-start w-75">
          <p className="h3">5</p>

          <GiPocketWatch
            style={{
              fontSize: 30,
            }}
          />
        </div>
      </StyledBtn>
      <StyledBtn>
        <GiFlamingClaw
          style={{
            fontSize: 50,
            color: '#47412d',
          }}
        />
        <div className="d-flex justify-content-between align-items-start w-75">
          <p className="h3">7</p>

          <GiPocketWatch
            style={{
              fontSize: 30,
            }}
          />
        </div>
      </StyledBtn>
      <StyledBtn>
        <GiFrontTeeth
          style={{
            fontSize: 50,
            color: '#47412d',
          }}
        />
        <div className="d-flex justify-content-between align-items-start w-75">
          <p className="h3">12</p>

          <GiPocketWatch
            style={{
              fontSize: 30,
            }}
          />
        </div>
      </StyledBtn>
    </StyledDiv>
  );
};

export default BonusScreen;
