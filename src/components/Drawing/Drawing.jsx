import React from 'react';
import PropTypes from 'prop-types';

//Components
import Ball from '../Ball/Ball';

//Styles
import styles from './Drawing.module.scss';

function Drawing(props) {
    const { drawn } = props;
    return (
        <div className={styles.Drawing}>
            {drawn.map(
                (number, index) => 
                    <Ball
                        key={index}
                        number={number}
                        toggleActiveClass={false}
                        colored
                    />
                )
            }
        </div>
    )
}

Drawing.propTypes = {
    drawn: PropTypes.array
}

export default Drawing
