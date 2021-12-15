import React, { createContext, useState, FC, useEffect } from "react";
import { start } from "../api/fetch";
import { AppContextState, Rovers } from "./types";

const contextDefaultValues: AppContextState = {
  selectedRover: "curiosity",
  rovers: [],
  changeRover: () => {}
};

export const AppContext = createContext<AppContextState>(
  contextDefaultValues
);

const AppProvider: FC = ({ children }) => {
  const [selectedRover, setSelectedRover] = useState<AppContextState['selectedRover']>(contextDefaultValues.selectedRover);
  const [rovers, setRovers] = useState<AppContextState['rovers']>(contextDefaultValues.rovers);
  const changeRover = (rover: Rovers) => {
    setSelectedRover(rover);
  };

  useEffect(() =>{
    start().then(res => {
      setRovers(Object.values(res));
    })
  },[])

  useEffect(() =>{
    console.log('All base rover data:', rovers);
  })

  useEffect(() =>{
    console.log(selectedRover);
  }, [selectedRover])

  return (
    <AppContext.Provider
      value={{
        selectedRover,
        rovers,
        changeRover,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;