import React, { createContext, useState, FC, useEffect } from "react";
import { apiPhotosRequest, baseApiRequest } from "../api/fetch";
import { AppContextState, Rovers, Image } from "./types";
import { DateTime } from 'luxon';

const contextDefaultValues: AppContextState = {
  rovers: [],
  selectedRover: "curiosity",
  roverViewConfig: {
    date: DateTime.now().startOf('day').toISO(),
    sol: 0,
    dateType: "date",
  },
  images: [],
  fetchImages: () => {},
  changeRover: () => {},
  changeRoverViewConfig: () => {}
};

export const AppContext = createContext<AppContextState>(
  contextDefaultValues
);

const AppProvider: FC = ({ children }) => {
  const [selectedRover, setSelectedRover] = useState<AppContextState['selectedRover']>(contextDefaultValues.selectedRover);
  const [selectedRoverDetails, setSelectedRoverDetails] = useState<AppContextState['selectedRoverDetails']>(contextDefaultValues.selectedRoverDetails);
  const [rovers, setRovers] = useState<AppContextState['rovers']>(contextDefaultValues.rovers);
  const [images, setImages] = useState<AppContextState['images']>(contextDefaultValues.images);
  const [roverViewConfig, setRoverViewConfig] = useState<AppContextState['roverViewConfig']>(contextDefaultValues.roverViewConfig);
  const changeRover = (rover: Rovers) => {
    setSelectedRover(rover);
  };
  const changeRoverViewConfig = (newRoverViewConfig: Partial<AppContextState['roverViewConfig']>) => {
    const mergedConfig = {...roverViewConfig, ...newRoverViewConfig} as AppContextState['roverViewConfig'];
    setRoverViewConfig(mergedConfig);
  }
  const changeSelectedRoverDetails = (rover: Rovers) => rovers && setSelectedRoverDetails(rovers.find(r => r.name?.toLowerCase() === rover.toLowerCase())); // todo: write this data into state on app init, and merge selectedRover and selectedRoverDetails
  const fetchImages = (rover: Rovers, params?: URLSearchParams) => apiPhotosRequest(rover, params).then((res: {photos: Image[]}) => setImages(res.photos));

  useEffect(() => {
    setSelectedRover("curiosity");
    baseApiRequest().then(res => {
      setRovers(Object.values(res.rovers)); // todo: messy, but the typings align with the api response
    })
  }, [])

  useEffect(() =>{
    changeSelectedRoverDetails(selectedRover);
  }, [rovers, selectedRover])

  useEffect(() =>{
    const paramsObj = {rover: selectedRover};
    if (roverViewConfig?.dateType === 'date') paramsObj['earth_date'] = DateTime.fromISO(roverViewConfig?.date).toISODate();
    if (roverViewConfig?.dateType === 'sol') paramsObj['sol'] = roverViewConfig?.sol;
    const searchParams = new URLSearchParams(paramsObj);
    fetchImages(selectedRover, searchParams);
  }, [roverViewConfig])

  return (
    <AppContext.Provider
      value={{
        selectedRover,
        selectedRoverDetails,
        rovers,
        images,
        fetchImages,
        changeRover,
        changeRoverViewConfig,
        roverViewConfig,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;