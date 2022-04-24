import React, { useContext } from 'react';
import P from 'prop-types';
import { useAppContext } from '../../contexts/AppContext';
import { currentTheme } from '../../utils/getCurrentTheme';
import { ContainerWrapper, ContainerBox } from './ContainerElements';

export const Container = ({ children }) => {
  const [appState, actions] = useAppContext();

  const { theme } = appState;

  return (
    <ContainerWrapper light={currentTheme(theme)}>
      <ContainerBox> {children}</ContainerBox>
    </ContainerWrapper>
  );
};

Container.propTypes = {
  children: P.node.isRequired,
};
