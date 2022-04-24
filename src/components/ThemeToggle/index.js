import React, { useContext, useEffect, useRef, useState } from 'react';
import Moon from '../../img/icon-moon.svg';
import Sun from '../../img/icon-sun.svg';
import { ThemeWrapper, Text, Icon } from './ThemeToggleElements';
import { useAppContext } from '../../contexts/AppContext';

export const ToggleButton = () => {
  const [appState, actions] = useAppContext();
  const { theme } = appState;
  let isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      actions.CheckAppTheme();
    }

    return () => {
      isMounted.current = false;
    };
  }, [actions]);

  return (
    <ThemeWrapper onClick={() => actions.ToggleAppTheme()}>
      {theme == 'light' ? <Text light={true}>Dark</Text> : <Text light={false}>Light</Text>}
      <Icon src={theme === 'light' ? Moon : Sun}></Icon>
    </ThemeWrapper>
  );
};
