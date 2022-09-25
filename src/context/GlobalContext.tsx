import React, { createContext, useContext, useState } from "react";

export type GlobalContextType = {
  stepTwoDetails: Indefinable<Pages.Apply.StepOne.QueryParams>;
  setStepTwoDetails: React.Dispatch<
    React.SetStateAction<Indefinable<Pages.Apply.StepOne.QueryParams>>
  >;
};

export const GlobalContext = createContext<Nullable<GlobalContextType>>(null);

export const AppWrapper: React.FC = ({ children }) => {
  const [stepTwoDetails, setStepTwoDetails] =
    useState<GlobalContextType["stepTwoDetails"]>();

  return (
    <GlobalContext.Provider
      value={{
        stepTwoDetails,
        setStepTwoDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}
