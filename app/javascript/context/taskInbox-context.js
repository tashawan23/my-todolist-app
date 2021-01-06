import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TaskInboxContext = createContext();
export const TaskInboxProvider = ({ children }) => {
  const [taskInbox, setTaskInbox] = useState(true);

  return (
    <TaskInboxContext.Provider
      value={{taskInbox, setTaskInbox }}
    >
      {children}
    </TaskInboxContext.Provider>
  );
};

export const useTaskInboxValue = () => useContext(TaskInboxContext);

TaskInboxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};