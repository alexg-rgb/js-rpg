function Person(race,item,name,min,maxHealing){
    this.race = race;
    this.item = item;
    this.name = name
    this.currenthealth = 100;

    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){};

    this.damage = function(){};

    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
}

let racePlayerOne;
let itemsPlayerOne;
let namePlayerOne;
let healthPlayerOne;
let playerOneFunc;

document.getElementById("namePOneOutput").style.display = "none";
document.getElementById("racePOneOutput").style.display = "none";
document.getElementById("healthPlayerOne").style.display = "none";
document.getElementById("displayPlayerOne").style.display = "none";
document.getElementById("buttonPlayerOne").style.display = "none";
document.getElementById("playerOneLastMove").style.display = "none";
document.getElementById("itemPOneOutput").style.display = "none";

document.getElementById("bootsItem").style.display = "none";
document.getElementById("staffItem").style.display = "none";
document.getElementById("swordItem").style.display = "none";
document.getElementById("bowItem").style.display = "none";

document.getElementById("humanDisplay").style.display = "none";
document.getElementById("orcDisplay").style.display = "none";
document.getElementById("elveDisplay").style.display = "none";
document.getElementById("vampireDisplay").style.display = "none";


document.getElementById("runOne").addEventListener("click", () => {

    racePlayerOne = document.getElementById("racePlayerOne").value;
    itemsPlayerOne = document.getElementById("itemsPlayerOne").value;
    namePlayerOne = document.getElementById("namePlayerOne").value;

    document.getElementById("namePOneOutput").innerHTML = "Name: "+namePlayerOne;
    itemsDisplay();
    document.getElementById("racePOneOutput").innerHTML = "Race: "+racePlayerOne;
    raceDisplay();

    document.getElementById("createPlayerOne").style.display = "none";
    document.getElementById("buttonPlayerOne").style.display = "flex";
    document.getElementById("playerOneLastMove").style.display = "flex";
    document.getElementById("namePOneOutput").style.display = "flex";
    document.getElementById("racePOneOutput").style.display = "flex";
    document.getElementById("healthPlayerOne").style.display = "flex";
    document.getElementById("displayPlayerOne").style.display = "flex";
    document.getElementById("itemPOneOutput").style.display = "flex";


    
    playerOneFunc = new Person(racePlayerOne, itemsPlayerOne, namePlayerOne);
    document.getElementById("healthPlayerOne").setAttribute("value", playerOneFunc.currenthealth);
    healthPlayerOne = document.createElement("progress"); 
    healthPlayerOne.setAttribute("value", playerOneFunc.currenthealth); 
    healthPlayerOne.setAttribute("max", playerOneFunc.maxHealth); 
    document.getElementById("healthPlayerOne").appendChild(healthPlayerOne);
    raceChoose();
 });
 document.getElementById("hitPlayerOne").addEventListener("click", () => {
    attackPlayerOne();
    disableButtonPlayerOne();
 });
 document.getElementById("healPlayerOne").addEventListener("click", () => {
    healPlayerOne();
    disableButtonPlayerOne()
});
document.getElementById("yieldPlayerOne").addEventListener("click", () => {
    disableButtonPlayerOne()
});
// Plyer Two
let racePlayerTwo;
let itemsPlayerTwo;
let namePlayerTwo;
let healthPlayerTwo;
let playerTwoFunc;

document.getElementById("namePTwoOutput").style.display = "none";
document.getElementById("racePTwoOutput").style.display = "none";
document.getElementById("healthPlayerTwo").style.display = "none";
document.getElementById("displayPlayerTwo").style.display = "none";
document.getElementById("buttonPlayerTwo").style.display = "none";
document.getElementById("playerTwoLastMove").style.display = "none";
document.getElementById("itemPTwoOutput").style.display = "none";

document.getElementById("bootsItemTwo").style.display = "none";
document.getElementById("staffItemTwo").style.display = "none";
document.getElementById("swordItemTwo").style.display = "none";
document.getElementById("bowItemTwo").style.display = "none";

document.getElementById("humanDisplayTwo").style.display = "none";
document.getElementById("orcDisplayTwo").style.display = "none";
document.getElementById("elveDisplayTwo").style.display = "none";
document.getElementById("vampireDisplayTwo").style.display = "none";

document.getElementById("runTwo").addEventListener("click", () => {

    racePlayerTwo = document.getElementById("racePlayerTwo").value;
    itemsPlayerTwo = document.getElementById("itemsPlayerTwo").value;
    namePlayerTwo = document.getElementById("namePlayerTwo").value;

    document.getElementById("namePTwoOutput").innerHTML = "Name: "+namePlayerTwo;
    itemsDisplayTwo();
    document.getElementById("racePTwoOutput").innerHTML = "Race: "+racePlayerTwo;
    raceDisplayTwo();

    document.getElementById("createPlayerTwo").style.display = "none";
    document.getElementById("buttonPlayerTwo").style.display = "flex";
    document.getElementById("playerTwoLastMove").style.display = "flex";
    document.getElementById("namePTwoOutput").style.display = "flex";
    document.getElementById("racePTwoOutput").style.display = "flex";
    document.getElementById("healthPlayerTwo").style.display = "flex";
    document.getElementById("displayPlayerTwo").style.display = "flex";
    document.getElementById("itemPTwoOutput").style.display = "flex";
    
    playerTwoFunc = new Person(racePlayerTwo, itemsPlayerTwo, namePlayerTwo);
    document.getElementById("healthPlayerTwo").setAttribute("value", playerTwoFunc.currenthealth);
    healthPlayerTwo = document.createElement("progress"); 
    healthPlayerTwo.setAttribute("value", playerTwoFunc.currenthealth); 
    healthPlayerTwo.setAttribute("max", playerTwoFunc.maxHealth); 
    document.getElementById("healthPlayerTwo").appendChild(healthPlayerTwo);
    raceChooseTwo();
 });

 document.getElementById("hitPlayerTwo").addEventListener("click", () => {
    attackPlayerTwo()
    disableButtonPlayerTwo();
 });
 document.getElementById("healPlayerTwo").addEventListener("click", () => {
    healPlayerTwo();
    disableButtonPlayerTwo();
});
document.getElementById("yieldPlayerTwo").addEventListener("click", () => {
    disableButtonPlayerTwo();
});

document.getElementById("restartButton").addEventListener("click", () => {
    window.location.reload()
});