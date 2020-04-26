import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  width: 22rem;
  height: 4.7rem;
  border: none;
  border-radius: 5rem;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1.6rem;
  text-align: center;
  text-transform: uppercase;
  color: ${({ color }) => color || '#000'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#ffd82b'};

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ backgroundColor }) => backgroundColor || '#e6e6e6'};
      width: 15rem;
      height: 3rem;
      font-size: 1.2rem;
    `};
`;

export default Button;
