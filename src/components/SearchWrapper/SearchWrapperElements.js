import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 30px 0;
  background: ${({ light }) => (light ? '#FEFEFE' : '#1e2a47')};
  padding: 12px 12px 12px 24px;
  width: 100%;
  box-shadow: 0px 16px 30px -10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
`;

export const SearchIcon = styled.img`
  position: relative;
  z-index: 999;
  pointer-events: none;
`;

export const Input = styled.input`
  width: 100%;
  margin-right: 7px;
  background: transparent;
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 1em;
  color: ${({ light }) => (light ? '#4B6A9B' : '#fff')};
  /* border: 1px solid red; */

  &::placeholder {
    color: ${({ light }) => (light ? '#4B6A9B' : '#fff')};
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8em;
  }

  @media screen and (max-width: 380px) {
    font-size: 0.7em;
  }
`;

export const Button = styled.button`
  margin-left: auto;
  padding: 16px 24px;
  font-weight: bold;
  background: #0079ff;
  border: none;
  transition: 0.3s ease-in-out all;
  cursor: pointer;
  color: #fff;
  border-radius: 7px;

  &:hover {
    background: #60abff;
    transition: 0.3s ease-in-out all;
  }
`;

export const ErrorSpan = styled.span`
  display: block;
  font-size: 1em;
  color: #f64646;
  font-weight: bold;
  padding: 0 12px;
  white-space: nowrap;
`;
