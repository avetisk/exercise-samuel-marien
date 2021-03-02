import { createContext, useState } from 'react';

export const Provider = (props) => {
  const [count, setCount] = useState(9999999);
  const [gecko, setGecko] = useState(0);
  const [parasauro, setParasauro] = useState(0);
  const [hydra, setHydra] = useState(0);
  const [boostCount, setboostCount] = useState(0);
  const [dps, setDps] = useState(0);
  const [displayGecko, setDisplayGecko] = useState([]);
  const [displayParasauro, setDisplayParasauro] = useState([]);
  const [displayHydra, setDisplayHydra] = useState([]);

  return (
    <Context.Provider
      {...props}
      value={{
        count,
        setCount,
        gecko,
        setGecko,
        parasauro,
        setParasauro,
        hydra,
        setHydra,
        boostCount,
        setboostCount,
        dps,
        setDps,
        displayGecko,
        setDisplayGecko,
        displayParasauro,
        setDisplayParasauro,
        displayHydra,
        setDisplayHydra,
      }}
    />
  );
};

const Context = createContext();
export default Context;
