let clickUpgrades = [
    {name: "first click", pointsRequired: 5, active: false, mod: ()=>{clickPower++; score -= 5;}},
    {name: "second click", pointsRequired: 50, active: false, mod: ()=>{clickPower+=2; score -= 50}},
    {name: "third click", pointsRequired: 500, active: false, mod: ()=>{clickPower+=20; score -= 500}}
];
let autoClickUpgrades = [
    {name: "first auto click", pointsRequired: 10, active: false, mod: ()=>{autoClick++; score -= 10;}},
    {name: "second auto click", pointsRequired: 110, active: false, mod: ()=>{autoClick+=2; score -= 110}},
    {name: "second auto click", pointsRequired: 1100, active: false, mod: ()=>{autoClick+=20; score -= 1100}}

];

let upgrades = clickUpgrades.concat(autoClickUpgrades);
upgrades.sort((a, b) => {return a.pointsRequired - b.pointsRequired;})
console.table(upgrades);