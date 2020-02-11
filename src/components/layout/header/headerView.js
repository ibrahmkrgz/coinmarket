import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SelectBox from '../../selectBox/selectBoxView';
import './headerStyles.scss';

const Header = ({ history }) => (
  <div className="header">
    <header className="header-container">
      <div className="header-link" tabIndex={0} role="button" onClick={() => history.push('/')}>
        Coins Market
      </div>
      <img
        alt="logo"
        className="logo"
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
      />
      <div>
        <SelectBox />
      </div>
    </header>
  </div>
);

Header.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Header);
