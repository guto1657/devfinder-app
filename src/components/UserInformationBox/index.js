import React from 'react';
import P from 'prop-types';
import { InfoBox, InfoTitle, InfoValue } from './UserInformationBoxElements';

export const UserInformationBox = ({ title, value = 0, light }) => {
  return (
    <InfoBox>
      <InfoTitle light={light}>{title}</InfoTitle>
      <InfoValue light={light}>{value}</InfoValue>
    </InfoBox>
  );
};

UserInformationBox.propTypes = {
  title: P.string.isRequired,
  value: P.number,
  light: P.bool.isRequired,
};
