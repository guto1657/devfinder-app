import styled from 'styled-components';

export const InfoBox = styled.div``;
export const InfoTitle = styled.h4`
  font-size: 0.9em;
  color: ${({ light }) => (light ? '#2b3442' : 'rgba(70,88,109,0.8)')};
  text-align: center;

  @media screen and (max-width: 320px) {
    font-size: 0.6em;
  }
`;
export const InfoValue = styled.h6`
  font-size: 1.4em;
  color: ${({ light }) => (light ? '#2b3442' : '#fff')};
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 320px) {
    font-size: 0.8em;
  }
`;
