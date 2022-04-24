import styled from 'styled-components';

export const Text = styled.span`
  color: ${({ light }) => (light ? '#4B6A9B' : '#fff')};
  font-weight: bold;
  margin-right: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const Icon = styled.img``;

export const ThemeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
`;
