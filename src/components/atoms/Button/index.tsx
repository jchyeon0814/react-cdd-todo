import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  readonly color: string;
}

const Container = styled.button<ButtonProps>`
  border: 0;
  color: #ffffff;
  background-color: ${(props) => props.color};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.color};
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

interface Props {
  readonly color?: string;
  readonly label: string;
  readonly onClick?: () => void;
}

export const Button = ({ label, color = '#ff5722', onClick }: Props) => {
  return (
    <Container color={color} onClick={onClick}>
      {label}
    </Container>
  );
};
