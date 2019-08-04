export const updateCurentTicket = (currentTicket, number) => {
    const index = currentTicket.indexOf(number);
    return (index === -1 && currentTicket.length < 5) ? [...currentTicket, number] : currentTicket;
}

export const updateTickets = (tickets, currentTicket) => {
    const length = currentTicket.length;
    if (length < 5) {
        currentTicket = currentTicket.concat(new Array(5 - length).fill(0));
    }
    return [...tickets, [...currentTicket]]
}

const getRandomNum = (min,max) => {
    return Math.floor(Math.random() * (max - min)) + 1;
}
export const addNewRandomNumer = drawn => {
    let random = getRandomNum(1, 30);
    for(;;){
        if (drawn.indexOf(random) === -1) {
            drawn.push(random);
            break;
        }
        else {
            random = getRandomNum(1, 30);
        }
    }
    return drawn;
}

export const checkForWinners = (tickets, drawn) => {
    const winners = new Array(5).fill(0);
    let ticketsClone = [...tickets]
    for (let i = 0; i < ticketsClone.length; i++) {
        ticketsClone[i] = ticketsClone[i].filter(val => val != 0);
        if (ticketsClone[i].every(val => drawn.includes(val))) {
            winners[i] = 1;
        }
    }
    return winners;
}