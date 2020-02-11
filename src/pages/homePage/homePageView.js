import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './homePageStyles.scss';

// Selectors
import { coinsSelector } from '../../redux/selectors';

// Components
import { CryptoTable, Summary } from '../../components';

const HomePage = ({ coins }) => (
  <div className="container">
    <div className="home-background" />
    <div className="summary">
      <Summary data={coins} />
    </div>
    {coins && coins.length > 0 ? <CryptoTable data={coins} /> : <strong> There is no data </strong>}
  </div>
);
HomePage.propTypes = {
  coins: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  coins: coinsSelector(state),
});

export default withRouter(connect(mapStateToProps)(HomePage));
