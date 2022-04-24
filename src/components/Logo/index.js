import React, { useContext } from 'react';
import styled from 'styled-components';
import P from 'prop-types';
import { useAppContext } from '../../contexts/AppContext';
import { currentTheme } from '../../utils/getCurrentTheme';

export const Logo = ({ children = '' }) => {
  const [appState, actions] = useAppContext();

  const { theme } = appState;

  return <Title light={currentTheme(theme)}>{children}</Title>;
};

const Title = styled.h1`
  color: ${({ light }) => (light ? '#000' : '#fff')};
`;

Logo.propTypes = {
  children: P.string.isRequired,
};
