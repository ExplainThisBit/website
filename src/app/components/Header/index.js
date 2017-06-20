/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router";


const HeaderBar = styled.div`
	padding: 3em 1.5em 1em;
  background-color: #3E606F;
  // border-top: 5px solid #193441;
  border-bottom: 5px solid #91AA9D;
  position: relative;
  &:after{
    border-bottom: 5px solid #D1DBBD;
    content: '';
    position: absolute;
    bottom: -10px;
    width: 100%;
    left: 0;
  }
  & a{
    text-decoration: none;
    text-styling: none;
    color: #FCFFF5;
    font-size: 2em;
    font-family: 'Lobster', cursive;
  }
`;

function Header() {
  return (
    <div>
      <HeaderBar>
        <Link to="/">Explain This Bit!?</Link>
      </HeaderBar>
    </div>
  );
}

Header.propTypes = {

};

export default Header;
