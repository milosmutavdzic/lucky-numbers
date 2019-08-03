import React from 'react';
import PropTypes from 'prop-types';

// Style
import styles from './Error.module.scss';


const Error = (
  {
    message,
    buttonText,
  },
) => (
  <div className={styles.Error}>
    <h2 className={styles.ErrorMessage}>{ message }</h2>
    <button
      type="button"
      className={styles.ErrorButton}
      onClick={() => window.location.reload()}
    >
      { buttonText }
    </button>
  </div>
);

export default Error;

Error.propTypes = {
  message: PropTypes.string,
  buttonText: PropTypes.string,
};

Error.defaultProps = {
  message: 'Something went wrong.',
  buttonText: 'Refresh the page',
};
