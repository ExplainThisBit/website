/**
*
* Seperator
*
*/

import React from 'react';
import styled from 'styled-components';

const SeperatorBar = styled.div`
  position: relative;
  &:after {
    background: linear-gradient(to right, #D1DBBD 25%,#91AA9D 25%, #91AA9D 50%, #3E606F 50%, #3E606F 75%, #193441 75%);
    position: absolute;
    content: '';
    height: 2px;
    right: 0;
    left: 0;
    top: 0;
  }
`;

function Seperator() {
  return (
    <div>
      <SeperatorBar />
    </div>
  );
}

Seperator.propTypes = {

};

export default Seperator;
