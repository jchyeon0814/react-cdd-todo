import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
`;

interface Props {
  readonly label: string;
}

export const AppTitle = ({ label }: Props) => {
  return <Container to="/">{label}</Container>;
};
