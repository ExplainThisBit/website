/*
 *
 * PostPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectPostPage from './selectors';

import styled from 'styled-components';

const PostContainer = styled.div`
  display: flex;
  width: 66%;
  margin: auto;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  color: #193441;
  margin-top: 3em;
  margin-bottom: 2em;
`;

const Heading = styled.h1`
  font-weight: 400;
  line-height: 0.9;
`;

const Content = styled.p`

`;

const Quote = styled.div`
  border-left: 10px solid #91AA9D;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  &:before {
    color: #91AA9D;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  & p{
    display: inline;
  }
`;

export class PostPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <PostContainer>
        <Helmet
          title="PostPage"
          meta={[
            { name: 'description', content: 'Description of PostPage' },
          ]}
        />
        <Heading>Page Title</Heading>
        <Content>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, harum error accusamus quod cumque maxime, fuga doloribus amet, ipsam atque dolorum aperiam voluptatem cum, inventore impedit dolore perferendis aspernatur tempore!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, harum error accusamus quod cumque maxime, fuga doloribus amet, ipsam atque dolorum aperiam voluptatem cum, inventore impedit dolore perferendis aspernatur tempore!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, harum error accusamus quod cumque maxime, fuga doloribus amet, ipsam atque dolorum aperiam voluptatem cum, inventore impedit dolore perferendis aspernatur tempore!</p>
          <Quote>thiasd  is a blockque</Quote>
        </Content>
      </PostContainer>
    );
  }
}

PostPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  PostPage: makeSelectPostPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
