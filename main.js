let score = 0;
let multiplier = 1;
let clickPower = 1;
let autoClick = 0;



    setInterval(()=>{
        score+= autoClick;
        console.log(`score: ${score} auto click: ${autoClick}`);
        updateStats();
    }, 1000)


//Create and Populate upgrade list
let addUpgrades = ()=>{
    //container
    const container = document.createElement("div");
    container.id = "upgradescontainer";
    //"MODAL: 'not enough points!'"
    const pointsModal = document.createElement("div");
    pointsModal.innerText = "NOT ENOUGH POINTS!";
    pointsModal.style.position = "absolute";
    pointsModal.style.display = "none";
    //upgrade buttons
    for(let i = 0; i < upgrades.length; i++){ 
        let element = document.createElement("button");
        element.innerHTML = `${upgrades[i].name}<br>Cost: ${upgrades[i].pointsRequired} points`;
        element.addEventListener("click", ()=>{
            if(score >= upgrades[i].pointsRequired){
                upgrades[i].mod();
                console.log("current click power : " +  clickPower);
                console.log("score: " + score);
                updateStats();
            }
            else{
                console.log("there is not enough score");
                pointsModal.style.display = "block";
                document.body.append(pointsModal);
                setTimeout(()=>{
                    pointsModal.style.display = "none";
                }, 1000);
            }
        })
        container.append(element);
    }
    document.body.append(container);
} 

let addStatContainer = ()=>{
    const mainContainer = document.createElement("div");
    mainContainer.id = "maincontainer";
    const statContainer = document.createElement("div");
    statContainer.id = "statcontainer";
    const pointsDisplay = document.createElement("span");
    pointsDisplay.id = "pointsdisplay";
    pointsDisplay.innerText = "Score: " + score.toString();
    const clickDisplay = document.createElement("span");
    clickDisplay.id = "clickdisplay";
    clickDisplay.innerText = "Click power";
    const autoDisplay = document.createElement("span");
    autoDisplay.id = "autodisplay";
    autoDisplay.innerText = "Auto power";
    const multiplierDisplay = document.createElement("span");
    multiplierDisplay.id = "multiplierdisplay";
    multiplierDisplay.innerText = "Multiplier";
    const clicker = document.createElement("img");
    clicker.src = "imgs/bulldog.png";
    clicker.addEventListener("click", ()=>{
        score+=clickPower;
        updateStats();
        console.log(score);
    })
    statContainer.append(pointsDisplay, clickDisplay, autoDisplay, multiplierDisplay);
    mainContainer.append(statContainer, clicker);
    document.body.append(mainContainer);
}

const updateStats = ()=>{
    const pointsDisplay = document.getElementById("pointsdisplay");
    pointsDisplay.innerText = "Score: " + score.toString();
    const clickDisplay = document.getElementById("clickdisplay");
    clickDisplay.innerText = "Click power: " + clickPower.toString();
    const autoDisplay = document.getElementById("autodisplay");
    autoDisplay.innerText = "Auto: " + autoClick.toString();
}

addUpgrades();
addStatContainer();
createClickerButton();