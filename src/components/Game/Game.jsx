import React from 'react';
import PropTypes from 'prop-types';

//Components
import Bet from '../Bet/Bet';
import Tickets from '../Tickets/Tickets';
import Drawing from '../Drawing/Drawing';

//Helpers
import {
    updateCurentTicket,
    updateTickets,
    addNewRandomNumer,
    checkForWinners
} from '../../utils/game.helpers';

//Constants
import {
    ADD_TICKET,
    START_GAME,
    MAX_NUMBERS_IN_TICKET,
    NUMBER_OF_DRAWING,
    DRAWING_INTERVAL
} from './Game.constants';

//Styles
import styles from './Game.module.scss';

export default class Game extends React.Component {
    static propTypes = {
        addNumber: PropTypes.func
    }
    constructor(props) {
        super(props);
        this.addNumber = this.addNumber.bind(this);
        this.addTicket = this.addTicket.bind(this);
        this.startGame = this.startGame.bind(this);
    }
    state = {
        currentTicket: [],
        tickets: [],
        drawn: [],
        winners: [],
        clearNumberTable: false,
        isPlaying: false
    }

    addNumber(number) {
        this.setState(
            prevState =>
                ({
                    ...prevState,
                    currentTicket: updateCurentTicket(prevState.currentTicket, number),
                    clearNumberTable: Boolean(!prevState.currentTicket.length && prevState.tickets.length && false)
                }));
    }

    addTicket() {
        if (!this.state.currentTicket.length) return;
        this.setState(
            prevState =>
                ({
                    ...prevState,
                    tickets: updateTickets(prevState.tickets, prevState.currentTicket),
                    currentTicket: [],
                    clearNumberTable: true
                }));
    }

    drawNext() {
        this.setState(
            prevState =>
                ({
                    ...prevState,
                    drawn: addNewRandomNumer(prevState.drawn),
                }));
        (this.state.drawn.length === NUMBER_OF_DRAWING ) && this.finishGame();
    }

    startGame() {
        this.setState({ isPlaying: true });
        const startTime = Date.now();
        const drawingDuration = (NUMBER_OF_DRAWING + 1) * DRAWING_INTERVAL;
        let interval = setInterval(() => {
            if (Date.now() - startTime > drawingDuration) {
                clearInterval(interval);
            } else {
                this.drawNext();
            }
        }, DRAWING_INTERVAL);
    }

    finishGame() {
        this.setState(
            prevState =>
                ({
                    isPlaying: false,
                    winners: checkForWinners(prevState.tickets, prevState.drawn)
                }));
    }

    render() {
        const { currentTicket, tickets, drawn, winners, clearNumberTable, isPlaying } = this.state;
        const BUTTON_TEXT = tickets.length > MAX_NUMBERS_IN_TICKET ? START_GAME : ADD_TICKET;
        const handleClick = tickets.length > MAX_NUMBERS_IN_TICKET ? this.startGame : this.addTicket;
        return (
            <div className={styles.Game}>
                <Drawing
                    drawn={drawn}
                />
                <Bet
                    addNumber={this.addNumber}
                    ticketNum={currentTicket.length}
                    clearNumberTable={clearNumberTable}
                    isPlaying={isPlaying}
                />
                <Tickets
                    tickets={tickets}
                    winners={winners}
                />
                <button
                    className={styles.Button}
                    type="button"
                    disabled={isPlaying}
                    onClick={handleClick}
                >
                    {BUTTON_TEXT}
                </button>
            </div>
        )
    }
}
