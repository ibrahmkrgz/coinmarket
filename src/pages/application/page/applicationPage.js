import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import Favicon from 'react-favicon';
import { Helmet } from 'react-helmet';
import './applicationPage.scss';

// Components
import { Footer, Loader, ErrorBoundary, Header } from '../../../components';

const ApplicationPage = ({ routes, isLoading, status }) => {
  return (
    <div className="main">
      <Favicon url="https://github.com/favicon.ico" />
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>Coin Market</title>
      </Helmet>

      {isLoading && <Loader />}

      {status !== '' ? (
        <ErrorBoundary status={status} />
      ) : (
        <>
          <Header />
          <div className="body">
            <Switch>
              {Object.keys(routes).map(key => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <Route exact key={key} {...routes[key]} />
              ))}
              <Redirect from="*" to="/notfound" />
            </Switch>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

ApplicationPage.propTypes = {
  routes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
};

export default withRouter(ApplicationPage);
