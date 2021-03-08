const POINT_PER_OWN = 10;
const POINT_PER_DEPLOY = 8;

const owners = ["0x4a7a92fe5fdee55e90e199aaeb99f5b0f36e026d","0x1ea027314c055705ac09d9bc742e6eacc7a1ceb2","0x628f0bb4d70618897348208470b39cdbd6cb8f3c"];
const deployers = ["0x4a7a92fe5fdee55e90e199aaeb99f5b0f36e026d","0x1ea027314c055705ac09d9bc742e6eacc7a1ceb2","0x628f0bb4d70618897348208470b39cdbd6cb8f3c"];


const ownerScores = owners.reduce((acc, current)=>{
    acc[current] = {
        address:current,
        score:(acc[current] && acc[current].score||0)+POINT_PER_OWN
    };
    return acc;
},{});

const deployerScores = deployers.reduce((acc, current)=>{
    acc[current] = {
        address:current,
        score:(acc[current] && acc[current].score||0)+POINT_PER_DEPLOY
    };
    return acc;
},{});

const merged = [...Object.values(ownerScores),...Object.values(deployerScores)].reduce(
    (acc, current)=>{
        acc[current.address] = {
            address:current.address,
            score:(acc[current.address] && acc[current.address].score||0)+(current.score||0)
        };
        return acc;
    },{}
)
module.exports = merged;
