import React from 'react';
import P from 'prop-types';
import { useAppContext } from '../../contexts/AppContext';
import { currentTheme } from '../../utils/getCurrentTheme';
import { Box, SocialIcon, SocialTitle } from './SocialBoxElements';

export const SocialBox = ({ icon, text }) => {
  const [appState, actions] = useAppContext();
  const { theme } = appState;
  const isEmpty = text === 'Not Available' ? true : false;

  return (
    <Box>
      <SocialIcon src={icon} light={!!text && currentTheme(theme)} empty={isEmpty} />
      <SocialTitle light={currentTheme(theme)} empty={isEmpty}>
        {text}
      </SocialTitle>
    </Box>
  );
};

SocialBox.propTypes = {
  icon: P.string.isRequired,
  text: P.string.isRequired,
};
