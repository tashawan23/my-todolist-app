import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useStarredTasks } from '../components/hooks/index';
import moment from 'moment'


export const StarredTasksContext = createContext();
export const StarredTasksProvider = ({ children }) => {
  const { starredTasks, setStarredTasks } = useStarredTasks();



  return (
    <StarredTasksContext.Provider value={{ starredTasks, setStarredTasks }}>
      {children}
    </StarredTasksContext.Provider>
  );
};

export const useStarredTasksValue = () => useContext(StarredTasksContext);

StarredTasksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};