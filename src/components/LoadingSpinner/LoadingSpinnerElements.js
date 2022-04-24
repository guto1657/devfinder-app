import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.div`
  display: block;
  width: 50px;
  height: 50px;

  text-align: center;
  animation: rotate 1s linear infinite;
  border-radius: 50%;
  border: 6px solid #fff;
  border-top: 6px solid #0bf;

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
`;
