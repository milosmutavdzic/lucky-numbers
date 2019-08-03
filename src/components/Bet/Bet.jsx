 import React from 'react';
import PropTypes from 'prop-types';

// Components
import Ball from '../Ball/Ball';

//Styles
import styles from './Bet.module.scss';

export default function Bet(props) {
    const numbers = [...Array(31).keys()].slice(1);
    const { addNumber, ticketNum, clearNumberTable,isPlaying } = props;
    return (
        <div className={styles.Bet}>
            {numbers.map(num =>
                <Ball
                    key={num}
                    number={num}
                    addNumber={addNumber}
                    ticketNum={ticketNum}
                    clearNumberTable={clearNumberTable}
                    clickDisabled={isPlaying}
        
                />
            )}
        </div>
    )
}
Bet.propTypes = {
    addNumber: PropTypes.func.isRequired,
    ticketNum: PropTypes.number.isRequired,
    clearNumberTable: PropTypes.bool,
    isPlaying: PropTypes.bool,
}