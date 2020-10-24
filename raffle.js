const getScoreJson = require("./event-score");
var seedrandom = require('seedrandom');

module.exports = (seed, prizes, logsData) => {
    var random = seedrandom(seed.toString());

    const winners = [];
    const scores = getScoreJson(logsData);

    let names = scores.reduce((acc,current) => [...acc, ...new Array(current.score).fill(current.name)], []);
    names = shuffle(names);
    let i = prizes;
    
    while(i--){
        const winnerIndex = Math.floor(random()*names.length);        
        const winnerName = names[winnerIndex];

        winners.push(winnerName);     
        names = names.filter(name=>name!==winnerName);
        
    }
    
    return winners;

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
}