import styled from 'styled-components';

export const Box = styled.div`
  flex-basis: 43%;
  margin-bottom: 5%;
  display: flex;
  color: #fff;
`;
export const SocialIcon = styled.img`
  display: block;
  margin-right: 12px;
  max-width: 100%;
  filter: ${({ light, empty }) =>
    empty === true
      ? 'invert(89%) sepia(13%) saturate(312%) hue-rotate(179deg) brightness(86%) contrast(84%);'
      : light
      ? 'invert(41%) sepia(21%) saturate(1018%) hue-rotate(178deg) brightness(91%) contrast(92%);'
      : 'invert(100%) sepia(0%) saturate(1%) hue-rotate(149deg) brightness(108%) contrast(101%);'};
`;
export const SocialTitle = styled.span`
  display: block;
  font-size: 0.8em;
  color: ${({ light, empty }) => (empty === true ? '#b3bdcc' : light ? '#4b6a9b' : '#ffffff')};
`;
