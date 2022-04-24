import styled from 'styled-components';

export const BoxWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 200px 250px 250px;
  grid-template-areas: 'img username joined' 'img nick nick' 'img bio bio' 'img rep rep' 'img social social';
  background: ${({ light }) => (light ? '#FEFEFE' : '#1E2A47')};
  padding: 60px 30px;
  box-shadow: 0px 16px 30px -10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  @media screen and (max-width: 750px) {
    grid-template-columns: 50% 50%;
    grid-template-areas: 'img username' 'img nick' 'img joined' 'bio bio' 'rep rep' 'social social';
  }
`;
export const ImgWrapper = styled.div`
  grid-area: img;
  margin-right: 25px;

  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;
export const Img = styled.img`
  display: block;
  width: 100%;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;
export const UserName = styled.h1`
  grid-area: username;
  font-size: 20px;
  font-weight: bold;
  color: ${({ light }) => (light ? '#2b3442' : '#fff')};
  /* border: 1px solid red; */

  @media screen and (max-width: 768px) {
    height: fit-content;
  }
`;
export const NickName = styled.span`
  grid-area: nick;
  font-size: 14px;
  margin-top: 3px;
  display: block;
  color: #0079ff;
  /* border: 1px solid red; */

  @media screen and (max-width: 768px) {
    height: fit-content;
    margin: -35px 0;
  }

  @media screen and (max-width: 480px) {
    height: fit-content;
    margin: 0;
  }
`;
export const SignInDate = styled.span`
  grid-area: joined;
  display: block;
  text-align: right;
  color: #4b6a9b;

  @media screen and (max-width: 750px) {
    text-align: left;
    height: fit-content;
    margin: -35px 0;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
    font-size: 0.8em;
  }
`;

export const InfoWrapper = styled.div`
  grid-area: rep;
  margin: 15px 0;
  background: ${({ light }) => (light ? '#f6f8ff' : '#141D2F')};
  padding: 25px 50px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 5%;

  @media screen and (max-width: 768px) {
    padding: 25px 50px;
  }

  @media screen and (max-width: 480px) {
    padding: 25px 5px;
  }

  @media screen and (max-width: 320px) {
    padding: 25px 0px;
  }
`;

export const SocialMedias = styled.div`
  grid-area: social;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: nowrap;
    margin-top: 12px;
  }
`;

export const ErrorTitle = styled.span`
  display: block;
  color: #4b6a9b;
  font-weight: bold;
`;
export const ErrorMessage = styled.span`
  display: block;
  color: #4b6a9b;
  font-weight: bold;
`;
