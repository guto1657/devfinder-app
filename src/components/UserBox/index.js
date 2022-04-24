import React, { useContext, useState } from 'react';
import {
  BoxWrapper,
  ImgWrapper,
  Img,
  UserName,
  NickName,
  SignInDate,
  InfoWrapper,
  SocialMedias,
  ErrorTitle,
  ErrorMessage,
} from './UserBoxElements';
import TwitterI from '../../img/icon-twitter.svg';
import LocationI from '../../img/icon-location.svg';
import WebsiteI from '../../img/icon-website.svg';
import CompanyI from '../../img/icon-company.svg';
import { useAppContext } from '../../contexts/AppContext';
import { LoadingSpinner } from '../LoadingSpinner';
import { SocialBox } from '../SocialBox';
import { InfoBox, UserInformationBox } from '../UserInformationBox';
import { currentTheme } from '../../utils/getCurrentTheme';
import { BioText } from '../BioText';

const S = {
  style: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    padding: '60px 0',
    flexDirection: 'column',
    textAlign: 'center',
    width: '100%',
  },
};

export const UserBox = () => {
  const [appState, actions] = useAppContext();
  const { theme, user, loading, hasError } = appState;

  const altText = 'Not Available';

  if (loading) {
    return (
      <BoxWrapper light={currentTheme(theme)} {...S}>
        <LoadingSpinner />
      </BoxWrapper>
    );
  }

  if (hasError) {
    return (
      <BoxWrapper light={currentTheme(theme)} {...S}>
        <ErrorTitle>Oops!!!</ErrorTitle>
        <ErrorMessage style={{ display: 'block' }}>
          There is no result found<br></br> please try again
        </ErrorMessage>
      </BoxWrapper>
    );
  }

  return (
    <BoxWrapper light={currentTheme(theme)}>
      <ImgWrapper>
        <Img src={user.url} />
      </ImgWrapper>
      <UserName light={currentTheme(theme)}>{user.name || 'UserName'}</UserName>
      <NickName light={currentTheme(theme)}>{user.nickname || 'NickName'}</NickName>
      <SignInDate light={currentTheme(theme)}>{user.joined || '00/00/0000 '}</SignInDate>
      <BioText>{user.bio || ''}</BioText>
      <InfoWrapper light={currentTheme(theme)}>
        <UserInformationBox title={'Repos'} value={user.repos || 0} light={currentTheme(theme)} />
        <UserInformationBox title={'Followers'} value={user.followers || 0} light={currentTheme(theme)} />
        <UserInformationBox title={'Fallowing'} value={user.fallowing || 0} light={currentTheme(theme)} />
      </InfoWrapper>
      <SocialMedias>
        {!!user.social && (
          <>
            <SocialBox icon={LocationI} text={user.social.location || altText} />
            <SocialBox icon={TwitterI} text={user.social.twitter || altText} />
            <SocialBox icon={WebsiteI} text={user.social.blog || altText} />
            <SocialBox icon={CompanyI} text={user.social.company || altText} />
          </>
        )}
      </SocialMedias>
    </BoxWrapper>
  );
};
