import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TodayInboxContext = createContext();
export const TodayInboxProvider = ({ children }) => {
  const [todayInbox, setTodayInbox] = useState(false);

  return (
    <TodayInboxContext.Provider
      value={{ todayInbox, setTodayInbox }}
    >
      {children}
    </TodayInboxContext.Provider>
  );
};

export const useTodayInboxValue = () => useContext(TodayInboxContext);

TodayInboxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};