import React, { Component } from 'react';
import PropTypes from 'prop-types';

import shortid from 'shortid';


//Components
import Ticket from './Ticket/Ticket';

//Styles
import styles from './Tickets.module.scss';

export default class Tickets extends Component {
    static propTypes = {
        tickets: PropTypes.array.isRequired,
        winners: PropTypes.array       
    }

    render() {
        const { tickets, winners } = this.props;
        return (
            <div className={styles.Tickets}>
                {tickets
                    .map((ticket,index) => 
                    <Ticket 
                        key={shortid.generate()}
                        ticket={ticket}
                        winLoss={winners[index]}
                    />
                    )
                }
            </div>
        )
    }
}
