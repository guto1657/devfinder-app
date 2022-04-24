import React, { createContext, useContext, useReducer, useRef } from 'react';
import { reducer } from './reducer';
import P from 'prop-types';
import { buildActions } from './build-actions';

const initState = {
  theme: 'light',
  user: {},
  loading: false,
  hasError: false,
};

const Context = createContext();

export const AppProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(reducer, initState);
  const actions = useRef(buildActions(appDispatch));

  return <Context.Provider value={[appState, actions.current]}>{children}</Context.Provider>;
};

AppProvider.propTypes = {
  children: P.node.isRequired,
};

export const useAppContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined') {
    throw new Error('You have to useAppContext Context inside <AppProvider>');
  }

  return [...context];
};
