const results = require('./seaUnicorn-results');

var seedrandom = require('seedrandom');
var tickets= require('./seaUnicorn-results');
console.log("addresses", Object.keys(results).length);
var args = process.argv.slice(2);

if(!args[0]) {
    console.log("Seed not provided");
    return;
}
const seed = args[0];

const getWinners = (seed, prizes, logsData, options = {}) => {

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
    console.log("tickets", names.length);

    let i = prizes;
    
    while(i--){
        const winnerIndex = Math.floor(random()*names.length);        
        const winnerName = names[winnerIndex];

        winners.push(winnerName);     
        names = names.filter(name=>name!==winnerName);
        
    }
    
    return winners;
};

const winners = getWinners(seed, 1);
console.log(winners);