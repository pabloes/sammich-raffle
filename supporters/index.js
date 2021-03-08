
const merged = [
    ...Object.values(require('./dappcraft-wearable-1')),
    ...Object.values(require('./dappcraft-wearable-2')),
    ...Object.values(require('./decentralgames-wearables')),
    ...Object.values(require('./mana-fever')),
    ...Object.values(require('./metazone-wearable')),
    ...Object.values(require('./rarible-pablo')),
    ...Object.values(require('./rarible-slywest')),
    ...Object.values(require('./sammich-game')),
    ...Object.values(require('./sammich-wearable')),
    ...Object.values(require('./wonderzone-wearable-1')),
    ...Object.values(require('./wonderzone-wearable-2')),
].reduce(
    (acc, current)=>{
        acc[current.address] = {
            address:current.address,
            score:(acc[current.address] && acc[current.address].score||0)+(current.score||0)
        };
        return acc;
    },{}
)

module.exports = merged;