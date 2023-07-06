import React, { Fragment } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { LOG_OUT } from "../redux/actions/actionTypes";
import PropTypes from 'prop-types';

interface NavbarProps {
  token: string | null;
}

const Navbar: React.FC<NavbarProps> = ({token}) => {
  const dispatch = useDispatch<AppDispatch>();
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>

      <li>
        <Link to="/posts"></Link>
      </li>

      <li>
        <Link to="/dashboard">
          <i className="fas fa-user"></i>
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>

      <li>
        <Link to="#!" onClick={() => dispatch({ type: LOG_OUT })}>
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Log Out</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevSolutions
        </Link>
      </h1>

      <Fragment>{ token ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  token: PropTypes.string,
};

const mapStateToProps = (state: any) => ({
  token: state.auth.token,
})

export default connect(mapStateToProps, {})(Navbar);
