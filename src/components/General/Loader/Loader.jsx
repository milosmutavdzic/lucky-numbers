import React from 'react';
import PropTypes from 'prop-types';

// Style
import styles from './Loader.module.scss';


const Loader = (
  {
    loaderClass,
  },
) => (
  <aside className={`${styles.LoaderWrapper} ${loaderClass}`}>
    <div className={styles.Loader}>
      <div className={styles.LoaderInner} />
    </div>
  </aside>
);

Loader.propTypes = {
  loaderClass: PropTypes.string,
};

Loader.defaultProps = {
  loaderClass: '',
};

export default Loader;
