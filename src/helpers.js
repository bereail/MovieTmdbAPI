//contert time to hours and minutes
export const calcTime = time => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
};

//conver number to money formatting
export const convertMoney = money => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return formatter.format(money);
};


export const isPersistedState = (stateName) => {
    const sessionState = sessionStorage.getItem(stateName);
    console.log(`Retrieved state for ${stateName}:`, sessionState); // Debugging
    return sessionState && JSON.parse(sessionState);
  };