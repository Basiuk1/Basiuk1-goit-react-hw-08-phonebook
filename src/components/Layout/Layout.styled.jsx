import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  min-width: 320px;
  max-width: 1280px;
  margin: 0 auto;
  /* padding: 0 16px; */
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #1a202c;
  }
`;
