import { createContext, useState, useEffect, useContext } from "react";
import { fetchData } from "../backend/rapidAPI";

export const Auth = createContext();

export default function Authpro({ children }) {
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");
  const [sideOpn, setSideOpn] = useState(false);

  useEffect(() => {
    fetchYT(value);
  }, [value]);

  const fetchYT = (query) => {
    setLoad(true);
    fetchData(`search/?q=${query}`).then(({ contents }) => {
      setData(contents);
      setLoad(false);
    });
  };

  return (
    <Auth.Provider value={{ data, value, load, setValue, setSideOpn, sideOpn }}>
      {children}
    </Auth.Provider>
  );
}

export const useAuth = () => useContext(Auth);
