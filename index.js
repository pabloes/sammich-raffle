const getRaffleResult = require('./raffle');

var myArgs = process.argv.slice(2);

if(!myArgs[0]) {
    console.log("Seed not provided");
    return;
}

(async ()=>{
    const winners = getRaffleResult(myArgs[0], 1);
   // const prizes = `helmet,upbody,pants,sneakers,fins,hair`.split(',');
    const prizes = `cap`.split(',');
    console.log(winners.map((name, index) => {
        return `${prizes[index]}: ${name}`;
    }).join('\n'));
})();