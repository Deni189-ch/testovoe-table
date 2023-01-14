import React, { createContext } from 'react';

export const DataTableRowContext = createContext(null);

export const DataTableRowContextProvider = ({ children, ...rest }: any) => {
  return (
    <DataTableRowContext.Provider
      value={{
        ...rest,
      }}
    >
      {children}
    </DataTableRowContext.Provider>
  );
};
