function getMergeFlight(arr) {
    return  {
        'oneway': arr[0],
        'twoway': arr[1],
        'fare': arr[0].fare + arr[1].fare
    }
}

function filterByJourney(oneway, twoway) {
    let flightDetails = [],
        length = Math.min(oneway.length, Array.isArray(twoway) ? twoway.length : 0);
    for (let i = 0; i < length; i++) {
        if (twoway && Array.isArray(twoway) && twoway[i])
            flightDetails.push([oneway[i], twoway[i]]);
    }
    return flightDetails.length ? Array.from(flightDetails, getMergeFlight) : flightDetails;
}
export default filterByJourney;