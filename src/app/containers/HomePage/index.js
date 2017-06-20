/*
 *
 * HomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectHomePage from './selectors';
import PostPreview from '../PostPreview';



export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="HomePage"
          meta={[
            { name: 'description', content: 'Description of HomePage' },
          ]}
        />
        <PostPreview
          title="Internet, How to, when to and why to?"
          url="/post/asd/"
          sneak_peek="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad reprehenderit nam rem ex et, alias, autem tempore maxime, non nesciunt sint accusamus harum in corrupti error atque dicta consectetur. Deleniti!"
        />
        <PostPreview
          title="Internet, How to, when to and why to?"
          url="/post/asd/"
          sneak_peek="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad reprehenderit nam rem ex et, alias, autem tempore maxime, non nesciunt sint accusamus harum in corrupti error atque dicta consectetur. Deleniti!"
          reverse="true"
        />
        <PostPreview
          title="Internet, How to, when to and why to?"
          url="/post/asd/"
          sneak_peek="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad reprehenderit nam rem ex et, alias, autem tempore maxime, non nesciunt sint accusamus harum in corrupti error atque dicta consectetur. Deleniti!"
        />
        <PostPreview
          title="Internet, How to, when to and why to?"
          url="/post/asd/"
          sneak_peek="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad reprehenderit nam rem ex et, alias, autem tempore maxime, non nesciunt sint accusamus harum in corrupti error atque dicta consectetur. Deleniti!"
          reverse="true"
        />
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HomePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
