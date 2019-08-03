import React from 'react';
import PropTypes from 'prop-types';

//Styles
import styles from './Ball.module.scss';

export default class Ball extends React.Component {
    constructor(props) {
        super(props);
        this.toggleActive = this.toggleActive.bind(this);
    }
    state = {
        isActive: false
    }
    componentWillReceiveProps({clearNumberTable}) {
        clearNumberTable && this.setState({isActive:false});
    }
    toggleActive() {
        this.props.ticketNum !== 5
        &&
        this.setState({ isActive: true });
        this.props.addNumber(this.props.number);
    }
    render() {
        const { number, clickDisabled, colored } = this.props;
        const { isActive } = this.state;
        const clickHandler = clickDisabled ? null : this.toggleActive;
        const activeClass = (isActive || colored) && styles.BallActive;
        // if 0 is passed as number property, don't render Component (return empty span)
        if (!number) return (<span className={styles.Ball}></span>);
        return (
            <span
                className={`${styles.Ball} ${activeClass}`}
                onClick={clickHandler}
            >
                <span className={styles.BallInside}>{number}</span>
            </span>
        )
    }
}

Ball.propTypes = {
    number: PropTypes.number.isRequired,
    addNumber: PropTypes.func,
    ticketNum: PropTypes.number,
    clickDisabled: PropTypes.bool,
    clearNumberTable: PropTypes.bool,
    colored: PropTypes.bool
}
