let score = 0;
let multiplier = 1;
let clickPower = 1;
let autoClick = 0;

const clicker = document.createElement("button");
clicker.innerText = "CLICK";
clicker.addEventListener("click", ()=>{
    score+=clickPower;
    console.log(score);
})
document.body.append(clicker);

const autoClicker = ()=>{
    setInterval(()=>{
        if(autoClick > 0){
            score+= autoClick;
            console.log(`score: ${score} auto click: ${autoClick}`);
        }
    }, 1000)
}

autoClicker();
//maybe two separate arrays (for click and auto-click) and join them, sort by pointsRequired for the list
let clickUpgrades = [
    {name: "first click", pointsRequired: 5, active: false, mod: ()=>{clickPower++; score -= 5;}},
    {name: "second click", pointsRequired: 50, active: false, mod: ()=>{clickPower+=2; score -= 50}}
];
let autoClickUpgrades = [
    {name: "first auto click", pointsRequired: 10, active: false, mod: ()=>{autoClick++; score -= 10;}},
    {name: "second auto click", pointsRequired: 100, active: false, mod: ()=>{autoClick+=2; score -= 100}}
];
let upgrades = clickUpgrades.concat(autoClickUpgrades);
upgrades.sort((a, b) => {return a.pointsRequired - b.pointsRequired;})
console.table(upgrades);

//Create and Populate upgrade list
let addUpgrades = ()=>{
    //container
    const container = document.createElement("div");
    //upgrade buttons
    for(let i = 0; i < upgrades.length; i++){
        let element = document.createElement("button");
        element.innerText = upgrades[i].name;
        element.addEventListener("click", ()=>{
            if(score >= upgrades[i].pointsRequired){
                upgrades[i].mod();
                console.log("current click power : " +  clickPower);
                console.log("score: " + score);
            }
            else{
                console.log("there is not enough score");
            }
        })
        container.append(element);
    }
    document.body.append(container);
} 

addUpgrades();



/*
const createAutoClick = ()=>{
    autoClick = document.createElement("button");
    autoClick.innerText = "auto +1";
autoClick.addEventListener("click", ()=>{
    if(score >= 10){
    score = score - 10; 
    setInterval(()=>{
        score++;
        displayScore();
    }, 1000);
}
    else{
        alert("not enough score");
    }
})
document.body.append(autoClick);
}

const enablePower = (power)=>{

}


const gameTarget = document.createElement("div");
gameTarget.style.height = "100px";
gameTarget.style.width = "100px";
gameTarget.style.backgroundColor = "darkred";
gameTarget.addEventListener("click", ()=>{
    score++;
    displayScore();
    if(score >= 10 && !autoClick){
        createAutoClick();
    }
    else{

    }
})
document.body.append(gameTarget);

let scoreTracker = document.createElement("p");
    scoreTracker.innerText = `Score: ${score}`;
    document.body.append(scoreTracker);

const displayScore = ()=>{
    scoreTracker.innerText = `Score: ${score}`;
    document.body.append(scoreTracker);
}


*/