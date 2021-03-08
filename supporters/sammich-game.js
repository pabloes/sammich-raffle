const POINT_PER_OWN = 2;
const POINT_PER_DEPLOY = 3;

const owners = ["0x447fd541e7ee4b4d958692d1f35c2dcb5dbf25e7","0x605da60745750705647dc028e91bb3608a28939f","0x605da60745750705647dc028e91bb3608a28939f","0x8d1bf34397d31903320ac0a8fee81b3bb7531537","0x039e574ceb2c58519586ad10e353f7cdd09df92a","0x60652cc133c8e7e703059a046b19947d43939f7c","0xfcacace2713d41c02666e2643e5583793196c935","0x8d3ebdf03460a9fe5ad4e3202c07bae6fcf67a94","0xe5cf1bb88a59f9fc609689c681d1d14bfe7ce73a","0x5c4eab549a528bf15c47a01e174500010997235c","0x87528a1b6639d78e9f0b4c2f6f8ddd7ac60c5708","0xcd4fec10c8ad4873e209062b31defb684ff8cb7c","0x598f8af1565003ae7456dac280a18ee826df7a2c","0x628f0bb4d70618897348208470b39cdbd6cb8f3c"];
const deployers = ["0x447fd541e7ee4b4d958692d1f35c2dcb5dbf25e7","0x605da60745750705647dc028e91bb3608a28939f","0x8d1bf34397d31903320ac0a8fee81b3bb7531537","0x039e574ceb2c58519586ad10e353f7cdd09df92a","0x60652cc133c8e7e703059a046b19947d43939f7c","0x87528a1b6639d78e9f0b4c2f6f8ddd7ac60c5708","0xcd4fec10c8ad4873e209062b31defb684ff8cb7c","0x598f8af1565003ae7456dac280a18ee826df7a2c"];

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

const merged = [
    ...Object.values(ownerScores),
    ...Object.values(deployerScores)
].reduce((acc, current)=>{
        acc[current.address] = {
            address:current.address,
            score:(acc[current.address] && acc[current.address].score||0)+(current.score||0)
        };
        return acc;
    },{}
)

module.exports = merged;
