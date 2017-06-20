/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';

var FontAwesome = require('react-fontawesome');

const FooterContainer = styled.div`
  display: flex;
  background-color: #3E606F;
  color: #FCFFF5;
  font-family: 'Raleway', sans-serif;
`;

const ContentLeft = styled.div`
  flex: 3;
  padding: 2em 1em;
`;

const ContentRight = styled.div`
  flex: 5;
  padding: 2em 1em;
`

const SocialContainer = styled.div`
  background-color: #193441;
  padding: 0.5em 1em;
  text-align: right;
  color: #FCFFF5;
  font-family: 'Raleway', sans-serif;
`;

const ContentHeading = styled.h2`
  font-weight: 400;
  border-bottom: 1px solid;
  line-height: 0.9;
  & span{
    text-decoration: underline;
  }
`;

const Content = styled.div`
`;

function Footer() {
  return (
    <div>
      <FooterContainer>
        <ContentLeft>
          <ContentHeading><span>About</span></ContentHeading>
          <Content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veniam, totam non illum quod libero in aperiam, iure atque quae, eius quam. Nulla illo molestiae laborum cupiditate. Tempore voluptatem, illo!</Content>
        </ContentLeft>
        <ContentRight>
          <ContentHeading><span>Recent Posts</span></ContentHeading>
          <Content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta veniam, totam non illum quod libero in aperiam, iure atque quae, eius quam. Nulla illo molestiae laborum cupiditate. Tempore voluptatem, illo!</Content>
        </ContentRight>
      </FooterContainer>
      <SocialContainer>
        <span className='fa-stack fa-lg'>
          <FontAwesome name='square-o' stack='2x' />
          <FontAwesome name='facebook' stack="1x"/>
        </span>
        <span className='fa-stack fa-lg'>
          <FontAwesome name='square-o' stack='2x' />
          <FontAwesome name='instagram' stack="1x"/>
        </span>
        <span className='fa-stack fa-lg'>
          <FontAwesome name='square-o' stack='2x' />
          <FontAwesome name='twitter' stack="1x"/>
        </span>
      </SocialContainer>
    </div>
  );
}

Footer.propTypes = {

};

export default Footer;
