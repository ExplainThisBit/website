/*
 *
 * PostPreview
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Seperator from '../../components/Seperator';
import { push } from 'react-router-redux';
const PreviewContainer = styled.div`
  font-family: 'Raleway', sans-serif;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  position: relative;
  padding: 5em;
  margin-top: 2px;
  transition: background-color 0.5s ease;
  &:hover{
    background-color: #E3E5DC;
    cursor: pointer;
  }
  &.reverse{
    flex-direction: row-reverse;
  }
`;

const PreviewTitle = styled.div`
  flex: 5;
  font-size: 1.5em;
  padding: 1.5em;
  text-align: center;
  position: relative;
  &:after{
    content: "";
    position: absolute;
    right: 0;
    top: -20px;
    bottom: -20px;
    width: 1px;
    background: #000;
  }
  .reverse &:after{
    left: 0;
    right: initial;
  }
`;

const PreviewText = styled.div`
  flex: 3;
  padding: 1.5em;
  text-align: justify;
`;


export class PostPreview extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    var item = this;
    return (
      <div>
        <PreviewContainer className={(item.props.reverse == 'true' ? "reverse" : "")} onClick={function(){item.props.dispatch(push(item.props.url));}}>
            <PreviewTitle>{item.props.title}</PreviewTitle>
            <PreviewText>{item.props.sneak_peek}</PreviewText>
        </PreviewContainer>
        <Seperator/>
      </div>
    );
  }
}

PostPreview.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(PostPreview);
