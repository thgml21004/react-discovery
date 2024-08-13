import styled, { css } from 'styled-components';

// 예시: 버튼의 공통 스타일
export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  background-color: #007bff;

  ${(props) =>
    props.primary &&
    css`
      background-color: #0056b3;
    `}

  ${(props) =>
    props.secondary &&
    css`
      background-color: #6c757d;
    `}
`;