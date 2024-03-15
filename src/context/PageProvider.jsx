import {createContext, useState, useContext} from 'react';

export const PageContext = createContext(null);

export const usePage = () => useContext(PageContext);

export const PageProvider = ({children}) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PageContext.Provider value={{currentPage, setCurrentPage}}>
      {children}
    </PageContext.Provider>
  );
};
