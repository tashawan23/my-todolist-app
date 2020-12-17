import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useLists } from '../components/hooks/index';

export const ListsContext = createContext();
export const ListsProvider = ({ children }) => {
  const { lists, setLists } = useLists();


  return (
    <ListsContext.Provider value={{ lists, setLists }}>
      {children}
    </ListsContext.Provider>
  );
};

export const useListsValue = () => useContext(ListsContext);

ListsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};