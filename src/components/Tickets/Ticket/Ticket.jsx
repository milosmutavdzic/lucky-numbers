import React from 'react';
import PropTypes from 'prop-types';

import shortid from 'shortid';

// Components
import Ball from '../../Ball/Ball';

//Styles
import styles from './Ticket.module.scss';

export default function Ticket(props) {
    const { ticket, winLoss } = props;
    let isWinnerClass = '';
    winLoss === 0 && (isWinnerClass = styles.TicketLoser);
    winLoss === 1 && (isWinnerClass = styles.TicketWinner);

    return (
        <div className={`${styles.Ticket} ${isWinnerClass}`}>
            {ticket.map(num =>
                <Ball
                    key={shortid.generate()}
                    number={num}
                    toggleActiveClass={false}
                    colored        
                />
            )}
        </div>
    )
}
Ticket.propTypes = {
    ticket: PropTypes.array.isRequired,
    winLoss: PropTypes.number,
}