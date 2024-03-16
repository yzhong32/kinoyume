import {createContext, useState, useContext} from 'react';
import PropTypes from 'prop-types'; // Correct import for PropTypes

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

// Correct usage of PropTypes for validation
PageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


