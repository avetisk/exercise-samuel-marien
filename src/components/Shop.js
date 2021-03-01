import styled from '@emotion/styled';
import { useState } from 'react';
import { GiGecko } from 'react-icons/gi';
import { RiKnifeBloodFill } from 'react-icons/ri';
import { GiParasaurolophus } from 'react-icons/gi';
import { GiHydra } from 'react-icons/gi';
import { GiMonsterGrasp } from 'react-icons/gi';
import { GiPocketWatch } from 'react-icons/gi';
import { GiBestialFangs } from 'react-icons/gi';
import { GiFlamingClaw } from 'react-icons/gi';
import { GiFrontTeeth } from 'react-icons/gi';

import { useContext } from 'react';
import Context from '../context/Context';

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
    miniBoost: {
      count: 0,
      price: 10,
      dps: 1,
      time: 5,
    },
    middleBoost: {
      count: 0,
      price: 100,
      dps: 5,
      time: 5,
    },
    superBoost: {
      count: 0,
      price: 300,
      dps: 20,
      time: 7,
    },
    xtraBoost: {
      count: 0,
      price: 1000,
      dps: 60,
      time: 12,
    },
  },
};

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
  transition: 0.3s;

  &:hover {
    box-shadow: none;
  }
  &:hover h2 {
    color: white;
    transition: 0.6s;
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

const StyledBonus = styled('div')`
  width: 60px;
  height: 70px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  box-shadow: 0 0 5px #333633;
  transition: 0.3s;

  &:hover {
    box-shadow: none;
  }
  &:hover :nth-of-type(2) {
    color: #9fd2d2;
    transition: 0.3s;
  }
`;

const StyledParaBonus = styled('div')`
  font-size: 0.6rem;
  width: 60px;
  color: white;
`;

const StyledDiv = styled('div')`
  background: #eef0dd;
  padding: 20px;
`;

const Shop = (props) => {
  const [items, setItems] = useState(initialState);

  const { gecko, setGecko } = useContext(Context);
  const { parasauro, setParasauro } = useContext(Context);
  const { hydra, setHydra } = useContext(Context);
  const { boostCount, setboostCount } = useContext(Context);
  const { dps, setDps } = useContext(Context);
  const { count, setCount } = useContext(Context);

  const Timer = (props) => {
    const dpsUp = () => setCount((count) => count + props);
    setInterval(dpsUp, 1000);
  };

  const handleClick = (event) => {
    if (event.currentTarget.id === 'gecko') {
      setGecko(gecko + 1);
      setDps(dps + items.production.gecko.dps);
      Timer(items.production.gecko.dps);
      items.production.gecko.price = items.production.gecko.price * 2;
    } else if (event.currentTarget.id === 'parasauro') {
      setParasauro(parasauro + 1);
      setDps(dps + items.production.parasauro.dps);
      Timer(items.production.parasauro.dps);
      items.production.parasauro.price = items.production.parasauro.price * 2;
    } else {
      setHydra(hydra + 1);
      setDps(dps + items.production.hydra.dps);
      Timer(items.production.hydra.dps);
      items.production.hydra.price = items.production.hydra.price * 2;
    }
  };

  const handleBoostClick = (event) => {
    if (event.currentTarget.id === 'boost1') {
      items.boost.miniBoost.price += items.boost.miniBoost.price * 2;
      setboostCount(boostCount + 1);
    } else if (event.currentTarget.id === 'boost2') {
      items.boost.middleBoost.price += items.boost.middleBoost.price * 4;
      setboostCount(boostCount + 1);
    } else if (event.currentTarget.id === 'boost3') {
      items.boost.superBoost.price += items.boost.superBoost.price * 6;
      setboostCount(boostCount + 1);
    } else {
      items.boost.xtraBoost.price += items.boost.xtraBoost.price * 8;
      setboostCount(boostCount + 1);
    }
  };

  return (
    <StyledDiv>
      <h1 className="titleFont text-center">St0re</h1>
      <ul>
        <h3 className="titleFont">Army</h3>
        <StyledThumbnail
          style={{
            background: '#333633',
          }}
          onClick={handleClick}
          id="gecko"
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
          <StyledCounter>{gecko}</StyledCounter>
        </StyledThumbnail>
        <StyledThumbnail
          style={{
            background: '#333633',
          }}
          onClick={handleClick}
          id="parasauro"
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
          <StyledCounter>{parasauro}</StyledCounter>
        </StyledThumbnail>
        <StyledThumbnail
          style={{
            background: '#333633',
          }}
          onClick={handleClick}
          id="hydra"
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
          <StyledCounter>{hydra}</StyledCounter>
        </StyledThumbnail>
      </ul>
      <h3 className="titleFont">Boost({boostCount})</h3>
      <ul className="d-flex justify-content-between">
        <StyledBonus
          style={{
            background: '#7F5D5D',
          }}
          onClick={handleBoostClick}
          id="boost1"
        >
          <div>
            <GiMonsterGrasp
              style={{
                fontSize: 28,
                color: '#B9D29F',
              }}
            />
          </div>
          <StyledParaBonus>
            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              Dps : {items.boost.miniBoost.dps}
              <RiKnifeBloodFill
                style={{
                  fontSize: 10,
                  marginLeft: '12px',
                }}
              />
            </div>

            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              Price : {items.boost.miniBoost.price}
            </div>
            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              time : {items.boost.miniBoost.time}
              <GiPocketWatch
                style={{
                  fontSize: 10,
                  marginLeft: '11px',
                }}
              />
            </div>
          </StyledParaBonus>
        </StyledBonus>
        <StyledBonus
          style={{
            background: '#7F5D5D',
          }}
          onClick={handleBoostClick}
          id="boost2"
        >
          <div>
            <GiBestialFangs
              style={{
                fontSize: 28,
                color: '#B9D29F',
              }}
            />
          </div>
          <StyledParaBonus>
            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              Dps : {items.boost.middleBoost.dps}
              <RiKnifeBloodFill
                style={{
                  fontSize: 10,
                  marginLeft: '12px',
                }}
              />
            </div>
            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              Price : {items.boost.middleBoost.price}
            </div>
            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              time : {items.boost.middleBoost.time}
              <GiPocketWatch
                style={{
                  fontSize: 10,
                  marginLeft: '11px',
                }}
              />
            </div>
          </StyledParaBonus>
        </StyledBonus>
        <StyledBonus
          style={{
            background: '#7F5D5D',
          }}
          onClick={handleBoostClick}
          id="boost3"
        >
          <div>
            <GiFlamingClaw
              style={{
                fontSize: 28,
                color: '#B9D29F',
              }}
            />
          </div>
          <StyledParaBonus>
            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              Dps : {items.boost.superBoost.dps}
              <RiKnifeBloodFill
                style={{
                  fontSize: 10,
                  marginLeft: '8px',
                }}
              />
            </div>
            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              Price : {items.boost.superBoost.price}
            </div>
            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              time : {items.boost.superBoost.time}
              <GiPocketWatch
                style={{
                  fontSize: 10,
                  marginLeft: '11px',
                }}
              />
            </div>
          </StyledParaBonus>
        </StyledBonus>
        <StyledBonus
          style={{
            background: '#7F5D5D',
          }}
          onClick={handleBoostClick}
          id="boost4"
        >
          <div>
            <GiFrontTeeth
              style={{
                fontSize: 28,
                color: '#B9D29F',
              }}
            />
          </div>
          <StyledParaBonus>
            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              Dps : {items.boost.xtraBoost.dps}
              <RiKnifeBloodFill
                style={{
                  fontSize: 10,
                  marginLeft: '8px',
                }}
              />
            </div>
            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              Price : {items.boost.xtraBoost.price}
            </div>
            <div className="w-100 d-flex flex-row justify-content-start ml-1">
              time : {items.boost.xtraBoost.time}
              <GiPocketWatch
                style={{
                  fontSize: 10,
                  marginLeft: '11px',
                }}
              />
            </div>
          </StyledParaBonus>
        </StyledBonus>
      </ul>
    </StyledDiv>
  );
};
export default Shop;
