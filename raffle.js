const getScoreJson = require("./event-score");
var seedrandom = require('seedrandom');
var tickets= require('./dcl1yo');

module.exports = (seed, prizes, logsData, options = {}) => {
    let random;
    if(options.algo){
        random = seedrandom[options.algo](seed.toString(), options);
    }else{
        random = seedrandom(seed.toString(), options);
    }    

    const winners = [];
    const scores = Object.keys(tickets).map(a=>({name:a,score:tickets[a]}));

    let names = scores
        .reduce((acc,current) => [...acc, ...new Array(current.score).fill(current.name)], [])
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