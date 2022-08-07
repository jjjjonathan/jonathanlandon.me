import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import {
  TiHome as HomeIcon,
  TiCamera as CameraIcon,
  TiVideo as VideoIcon,
  TiNews as NewsIcon,
} from 'react-icons/ti';

const Nav = styled.nav``;

const Navbar = () => (
  <Nav>
    <Link to="/">
      <HomeIcon />
    </Link>
    <Link to="/">
      <CameraIcon />
    </Link>
    <Link to="/">
      <VideoIcon />
    </Link>
    <Link to="/">
      <NewsIcon />
    </Link>
  </Nav>
);

export default Navbar;
