import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { useTodayTasks } from '../components/hooks/index';
import moment from 'moment'


export const TodayTasksContext = createContext();
export const TodayTasksProvider = ({ children }) => {
    var today = moment().format('YYYY-MM-DD')
  const { todayTasks, setTodayTasks } = useTodayTasks(today);



  return (
    <TodayTasksContext.Provider value={{ todayTasks, setTodayTasks }}>
      {children}
    </TodayTasksContext.Provider>
  );
};

export const useTodayTasksValue = () => useContext(TodayTasksContext);

TodayTasksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};