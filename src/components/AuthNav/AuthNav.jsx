// import { Link, NavLink } from 'react-router-dom';

import { Link } from 'components/Layout/Layout.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};
