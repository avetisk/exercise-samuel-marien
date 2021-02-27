import styled from '@emotion/styled';
import { useState } from 'react';
import { GiGecko } from 'react-icons/gi';
import { GiBlood } from 'react-icons/gi';
import { RiKnifeBloodFill } from 'react-icons/ri';
import { GiParasaurolophus } from 'react-icons/gi';
import { GiHydra } from 'react-icons/gi';

const initialState = {
  production: {
    gecko: {
      count: 0,
      price: 1,
      dps: 1,
    },
    parasauro: {
      count: 0,
      price: 10,
      dps: 5,
    },
    hydra: {
      count: 0,
      price: 30,
      dps: 10,
    },
  },
  boost: {
    geckoBoost: {
      count: 0,
      price: 10,
      dps: 1,
    },
    parasauroBoost: {
      count: 0,
      price: 100,
      dps: 5,
    },
    hydraBoost: {
      count: 0,
      price: 300,
      dps: 10,
    },
  },
};

// const StyledDiv = styled('div')`
//   border: 1px solid black;
//   width: 350px;
//   height: 260px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const StyledThumbnail = styled('li')`
  margin-bottom: 10px;
  width: 300px;
  height: 80px;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 8px #333633;
  transition: 1s;

  &:hover {
    box-shadow: none;
  }
  &:hover h2 {
    color: white;
    transition: 1s;
  }
`;

const StyledTitle = styled('h2')`
  font-size: 1.5rem;
  color: #5a785b;
`;

const StyledPara = styled('p')`
  font-size: 0.7rem;
  color: #7b8c7b;
`;

const StyledCounter = styled('h1')`
  font-size: 2.5rem;
  color: #5a785b;
`;

const Shop = (props) => {
  const [items, setItems] = useState(initialState);
  return (
    <ul>
      <h1 className="text-center fw-bolder">Store</h1>
      {/* <StyledDiv> */}
      <StyledThumbnail
        style={{
          background: '#333633',
        }}
      >
        <GiGecko
          style={{
            fontSize: 40,
            color: '#5a785b',
          }}
        />
        <div
          className="text-center w-50"
          style={{
            borderLeft: '1px solid #7b8c7b',
            borderRight: '1px solid #7b8c7b',
          }}
        >
          <StyledTitle>Gecko</StyledTitle>
          <StyledPara>
            Yours next Gecko: {items.production.gecko.price}
            <RiKnifeBloodFill
              style={{
                fontSize: 15,
                marginLeft: 3,
              }}
            />
          </StyledPara>
        </div>
        <StyledCounter>{}00</StyledCounter>
      </StyledThumbnail>
      <StyledThumbnail
        style={{
          background: '#333633',
        }}
      >
        <GiParasaurolophus
          style={{
            fontSize: 40,
            color: '#5a785b',
          }}
        />
        <div
          className="text-center w-50"
          style={{
            borderLeft: '1px solid #7b8c7b',
            borderRight: '1px solid #7b8c7b',
          }}
        >
          <StyledTitle>Parasauro</StyledTitle>
          <StyledPara>
            Yours next Parasauro: {items.production.parasauro.price}
            <RiKnifeBloodFill
              style={{
                fontSize: 15,
                marginLeft: 3,
              }}
            />
          </StyledPara>
        </div>
        <StyledCounter>{}00</StyledCounter>
      </StyledThumbnail>
      <StyledThumbnail
        style={{
          background: '#333633',
        }}
      >
        <GiHydra
          style={{
            fontSize: 40,
            color: '#5a785b',
          }}
        />
        <div
          className="text-center w-50"
          style={{
            borderLeft: '1px solid #7b8c7b',
            borderRight: '1px solid #7b8c7b',
          }}
        >
          <StyledTitle>Hydra</StyledTitle>
          <StyledPara>
            Yours next Hydra: {items.production.hydra.price}
            <RiKnifeBloodFill
              style={{
                fontSize: 15,
                marginLeft: 3,
              }}
            />
          </StyledPara>
        </div>
        <StyledCounter>{}00</StyledCounter>
      </StyledThumbnail>
      {/* </StyledDiv> */}
    </ul>
  );
};
export default Shop;
