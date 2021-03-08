const getRaffleResult = require('./supporters-raffle');

var myArgs = process.argv.slice(2);

if(!myArgs[0]) {
    console.log("Seed not provided");
    return;
}

(async ()=>{
    const winners = getRaffleResult(myArgs[0], 6);
    const prizes = `helmet,upbody,pants,sneakers,fins,hair`.split(',');
    
    console.log(winners.map((name, index) => {
        return `${prizes[index]}: ${name}`;
    }).join('\n'));
})();

/* 
const test = {};

let times = 999;


(async () => {
    const logsData = await axios.get("https://mana-fever.fun/logs-json").then((response)=>response.data);
    while(times--){
        const winners = getRaffleResult(Number.MAX_SAFE_INTEGER-times, 6, logsData);
      // console.log(winners)
        winners.forEach((name)=>{
            test[name] = test[name] || 0;
            test[name]++;
        })
    }    
    
    const sorted = Object.keys(test).map((name)=>({name, times:test[name]})).sort((a,b)=>b.times-a.times);

    console.log(sorted.map(s=>`${s.name} ${s.times}`).join('\n'));
})(); */
