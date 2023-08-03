// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Link } from 'components/Layout/Layout.styled';
import { Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Nav>
  );
};
