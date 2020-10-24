module.exports = (data) => {
     const people = data.reduce((acc,current)=>{
         const player1Name = current.player1Name;
         const player2Name = current.player2Name;
 
         if(player1Name && player1Name.indexOf("Guest") !== 0) acc[player1Name] = {name:player1Name};
         if(player2Name && player2Name.indexOf("Guest") !== 0) acc[player2Name] = {name:player2Name};
         return acc;
     },{});
     
     Object.values(people).forEach(({name}, index)=>{  
         people[name].games = data
         .filter(game=>game.player1Name === name || game.player2Name === name)
         .filter(game=>!isGuest(game.player1Name) && !isGuest(game.player2Name))
         .filter(game=>{
             const date = new Date(game.date);
             return date > new Date(`2020-10-18T17:37:50.050Z`) && date < new Date(`2020-10-26T23:59:59.999Z`)
         })
         ;//TODO filter by date
         let opponents = Array.from(new Set(people[name].games.map(g=>getOpponentName(name,g))));
         let locations = Array.from(new Set(people[name].games.map(g=>g.land)))
         people[name].opponents = opponents;
         people[name].locations = locations;        
         people[name].score = Math.min(opponents.length, locations.length);
     });
 
     const result = Object.values(people)
     .map(({name, locations, opponents, score})=>({name, locations:locations.length, opponents:opponents.length, score}))
     .filter(({score})=>score)
     .filter(({name})=>name!=="pablo")
     .sort((a,b)=>{return b.score - a.score});
 
     return result;
 };
 
 function getOpponentName(playerName, game){
     if(game.player1Name === playerName) return game.player2Name;
     if(game.player2Name === playerName) return game.player1Name;
 }
 function isGuest(name){
     return !name || name.indexOf("Guest-") === 0;
 }