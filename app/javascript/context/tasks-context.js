import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useTasks } from '../components/hooks/index';
import { useSelectedListValue } from './selectedList-context';

export const TasksContext = createContext();
export const TasksProvider = ({ children }) => {
    const {selectedList} = useSelectedListValue();
  const { tasks, setTasks } = useTasks(selectedList);


  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasksValue = () => useContext(TasksContext);

TasksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};