import React, { createContext, useState } from 'react';

export const SphereContext = createContext();

export const SphereProvider = ({ children }) => {
  const [isSphereCreated, setSphereCreated] = useState(false);

  return (
    <SphereContext.Provider value={{ isSphereCreated, setSphereCreated }}>
      {children}
    </SphereContext.Provider>
  );
};
