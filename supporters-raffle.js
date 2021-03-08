var seedrandom = require('seedrandom');
const supporters = require('./supporters');

module.exports = (seed, prizes, logsData, options = {}) => {
    let random;
    if(options.algo){
        random = seedrandom[options.algo](seed.toString(), options);
    }else{
        random = seedrandom(seed.toString(), options);
    }    

    const winners = [];

    let names = Object.values(supporters)
        .reduce((acc,current) => [...acc, ...new Array(current.score).fill(current.address)], [])
        .sort((a,b)=>a.localeCompare(b));

    let i = prizes;
    
    while(i--){
        const winnerIndex = Math.floor(random()*names.length);        
        const winnerName = names[winnerIndex];

        winners.push(winnerName);     
        names = names.filter(name=>name!==winnerName);        
    }
    
    return winners;
}