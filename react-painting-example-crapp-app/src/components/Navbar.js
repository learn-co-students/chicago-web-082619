import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = props => {
  return (
    <div className={`ui top fixed inverted blue menu`}>
      <Link className="item" to='/'>
        <h2 className="ui header">
          <i className={`${props.icon} icon`} />
          <div className="content">{props.title}</div>
          <div className="sub header">{props.description}</div>
        </h2>
      </Link>
      <div className="right menu">
        <Link className="item" to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
