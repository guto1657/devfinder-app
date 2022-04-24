import React from 'react';
import styled from 'styled-components';
import P from 'prop-types';
import { useAppContext } from '../../contexts/AppContext';
import { currentTheme } from '../../utils/getCurrentTheme';

export const BioText = () => {
  const [appState, actions] = useAppContext();
  const { theme, user, loading } = appState;

  if (user.bio === '' || user.bio === 'undefined' || user.bio === null) {
    return <Bio light={currentTheme(theme)}>This profile has no bio</Bio>;
  }

  return <Bio light={currentTheme(theme)}>{user.bio}</Bio>;
};

export const Bio = styled.p`
  grid-area: bio;
  width: 100%;
  margin: 20px 0;
  font-size: 1em;
  color: ${({ light }) => (light ? '#4b6a9b' : '#fff')};
  opacity: ${({ light }) => (light ? 1 : 0.8)};

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;
