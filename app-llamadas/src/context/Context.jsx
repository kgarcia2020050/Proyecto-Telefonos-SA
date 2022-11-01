import { createContext, useState} from "react";
export const DataContext = createContext();
const Context = ({ children }) => {
  const [value, setValue] = useState(
    localStorage.getItem("state") != null ? localStorage.getItem("state") : 0
  );

  return (
    <DataContext.Provider value={{ value, setValue }}>
      {children}
    </DataContext.Provider>
  );
};

export default Context;
