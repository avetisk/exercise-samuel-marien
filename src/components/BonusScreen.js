import styled from '@emotion/styled';

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
`;

const BonusScreen = (props) => {
  return (
    <StyledDiv>
      <StyledBtn />
      <StyledBtn />
      <StyledBtn />
      <StyledBtn />
    </StyledDiv>
  );
};

export default BonusScreen;
