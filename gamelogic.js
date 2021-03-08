function itemsDisplay() {
    if (itemsPlayerOne == "boots") {
        document.getElementById("bootsItem").style.display = "block";
    } else if (itemsPlayerOne == "staff") {
        document.getElementById("staffItem").style.display = "block";
    } else if (itemsPlayerOne == "sword") {
        document.getElementById("swordItem").style.display = "block";
    } else if (itemsPlayerOne == "bow") {
        document.getElementById("bowItem").style.display = "block";
    }
};

function raceDisplay() {
    if (racePlayerOne == "human") {
        document.getElementById("humanDisplay").style.display = "block";
    } else if (racePlayerOne == "orc") {
        document.getElementById("orcDisplay").style.display = "block";
    } else if (racePlayerOne == "elve") {
        document.getElementById("elveDisplay").style.display = "block";
    } else if (racePlayerOne == "vampire") {
        document.getElementById("vampireDisplay").style.display = "block";
    };
};

function itemsDisplayTwo() {
    if (itemsPlayerTwo == "boots") {
        document.getElementById("bootsItemTwo").style.display = "flex";
    } else if (itemsPlayerTwo == "staff") {
        document.getElementById("staffItemTwo").style.display = "flex";
    } else if (itemsPlayerTwo == "sword") {
        document.getElementById("swordItemTwo").style.display = "flex";
    } else if (itemsPlayerTwo == "bow") {
        document.getElementById("bowItemTwo").style.display = "flex";
    }
};

function raceDisplayTwo() {
    if (racePlayerTwo == "human") {
        document.getElementById("humanDisplayTwo").style.display = "flex";
    } else if (racePlayerTwo == "orc") {
        document.getElementById("orcDisplayTwo").style.display = "flex";
    } else if (racePlayerTwo == "elve") {
        document.getElementById("elveDisplayTwo").style.display = "flex";
    } else if (racePlayerTwo == "vampire") {
        document.getElementById("vampireDisplayTwo").style.display = "flex";
    };
};


function randomNumberHeal(min, max) {  
    return(parseInt(Math.random() * (max - min) + min)); 
}

function randomNumberHit(min, max) {  
    return(parseInt(Math.random() * (max - min) + min)); 
}

let healValuePone;
function healPlayerOne() {
    healValuePone = randomNumberHeal(playerOneFunc.min, playerOneFunc.maxHealing);
    healthPlayerOne.value+=healValuePone;
}
// function percentage of chance for hit
let d;
let w;
function chanceOf(percentage) {
    d = Math.random();
    for (w=0; w<1; w++) {
        if (d <= 0.3) {
            attackValuePOne = 0;
            healthPlayerTwo.value-=attackValuePOne;
            console.log(attackValuePOne);
            console.log(d);
        } else {
            attackValuePOne = randomNumberHit(playerOneFunc.min, playerOneFunc.maxDamage);
            console.log(attackValuePOne);
            healthPlayerTwo.value-=(attackValuePOne*percentage);
            console.log(attackValuePOne);
            console.log(d);
        }
    };
};
// function percentage of chance for hit twice
let o;
let q;
function chanceOfAttackTwice() {
    o = Math.random();
    for (q=0; q<1; q++) {
        if (o <= 0.3) {
            attackValuePOne = randomNumberHit(playerOneFunc.min, playerOneFunc.maxDamage);
            healthPlayerTwo.value-=(attackValuePOne*2);
            console.log(attackValuePOne);
        } else {
            attackValuePOne = randomNumberHit(playerOneFunc.min, playerOneFunc.maxDamage);
            healthPlayerTwo.value-=attackValuePOne;
            console.log(attackValuePOne);
        }
    };
};
// function click hit player one
let attackValuePOne;
function attackPlayerOne() {
    if (playerOneFunc.item == "boots") {
        if(playerTwoFunc.item == "boots") {
            chanceOf(1);
        } else {
            attackValuePOne = randomNumberHit(playerOneFunc.min, playerOneFunc.maxDamage);
            console.log(attackValuePOne);
            healthPlayerTwo.value-=attackValuePOne;
            console.log(attackValuePOne);
        }
    } else if (playerOneFunc.item == "staff") {
        if(playerTwoFunc.item == "boots") {
            chanceOf(1);
        } else {
            attackValuePOne = randomNumberHit(playerOneFunc.min, playerOneFunc.maxDamage);
            console.log(attackValuePOne);
            healthPlayerTwo.value-=attackValuePOne;
            console.log(attackValuePOne);
        }
    } else if (playerOneFunc.item == "sword") {
        if(playerTwoFunc.item == "boots") {
            chanceOf(1.30);
        } else {
            attackValuePOne = randomNumberHit(playerOneFunc.min, playerOneFunc.maxDamage);
            console.log(attackValuePOne);
            healthPlayerTwo.value-=(attackValuePOne*1.30);
            console.log(attackValuePOne);
        }
    } 
    else if (playerOneFunc.item == "bow") {
        if(playerTwoFunc.item == "boots") {
            chanceOf(2);
        } else {
            chanceOfAttackTwice();
        }
    }
}
// Race choosen
function raceChoose() {
    if(playerOneFunc.race == "human") {
        healthPlayerOne.value-=20;
    } else if (playerOneFunc.race == "orc") {
        healthPlayerOne.value-=50;
    } else if (playerOneFunc.race == "elve") {
        healthPlayerOne.value-=50;
    } else if (playerOneFunc.race == "vampire") {
        healthPlayerOne.value-=50;
    };
};

// Player Two


let healValuePTwo;
function healPlayerTwo() {
    healValuePTwo = randomNumberHeal(playerTwoFunc.min, playerTwoFunc.maxHealing);
    healthPlayerTwo.value+=healValuePTwo;
}
// function percentage of chance for hit
let r;
let v;
function chanceOfTwo(percentage) {
    r = Math.random();
    for (v=0; v<1; v++) {
        if (r <= 0.3) {
            attackValuePTwo = 0;
            healthPlayerOne.value-=attackValuePTwo;
            console.log(attackValuePTwo);
            console.log(r);
        } else {
            attackValuePTwo = randomNumberHit(playerTwoFunc.min, playerTwoFunc.maxDamage);
            console.log(attackValuePTwo);
            healthPlayerOne.value-=(attackValuePTwo*percentage);
            console.log(attackValuePTwo);
            console.log(r);
        }
    };
};
// function percentage of chance for hit twice
let b;
let k;
function chanceOfAttackTwiceTwo() {
    o = Math.random();
    for (k=0; k<1; k++) {
        if (b <= 0.3) {
            attackValuePTwo = randomNumberHit(playerTwoFunc.min, playerTwoFunc.maxDamage);
            healthPlayerOne.value-=(attackValuePTwo*2);
            console.log(attackValuePTwo);
        } else {
            attackValuePTwo = randomNumberHit(playerTwoFunc.min, playerTwoFunc.maxDamage);
            healthPlayerOne.value-=attackValuePTwo;
            console.log(attackValuePTwo);
        }
    };
};
// function click hit player one
let attackValuePTwo;
function attackPlayerTwo() {
    if (playerTwoFunc.item == "boots") {
        if(playerOneFunc.item == "boots") {
            chanceOfTwo(1);
        } else {
            attackValuePTwo = randomNumberHit(playerTwoFunc.min, playerTwoFunc.maxDamage);
            console.log(attackValuePTwo);
            healthPlayerOne.value-=attackValuePTwo;
            console.log(attackValuePTwo);
        }
    } else if (playerTwoFunc.item == "staff") {
        if(playerOneFunc.item == "boots") {
            chanceOfTwo(1);
        } else {
            attackValuePTwo = randomNumberHit(playerTwoFunc.min, playerTwoFunc.maxDamage);
            console.log(attackValuePTwo);
            healthPlayerOne.value-=attackValuePTwo;
            console.log(attackValuePTwo);
        }
    } else if (playerTwoFunc.item == "sword") {
        if(playerOneFunc.item == "boots") {
            chanceOfTwo(1.30);
        } else {
            attackValuePTwo = randomNumberHit(playerTwoFunc.min, playerTwoFunc.maxDamage);
            console.log(attackValuePTwo);
            healthPlayerOne.value-=(attackValuePTwo*1.30);
            console.log(attackValuePTwo);
        }
    } 
    else if (playerTwoFunc.item == "bow") {
        if(playerOneFunc.item == "boots") {
            chanceOfTwo(2);
        } else {
            chanceOfAttackTwiceTwo();
        }
    }
}
// Race choosen
function raceChooseTwo() {
    if(playerTwoFunc.race == "human") {
        healthPlayerTwo.value-=20;
    } else if (playerTwoFunc.race == "orc") {
        healthPlayerTwo.value-=50;
    } else if (playerTwoFunc.race == "elve") {
        healthPlayerTwo.value-=50;
    } else if (playerTwoFunc.race == "vampire") {
        healthPlayerTwo.value-=50;
    };
};






//Turn by turn

function disableButtonPlayerOne() {
    document.getElementById("hitPlayerOne").disabled=true;
    document.getElementById("healPlayerOne").disabled=true;
    document.getElementById("yieldPlayerOne").disabled=true;

    document.getElementById("hitPlayerTwo").disabled=false;
    document.getElementById("healPlayerTwo").disabled=false;
    document.getElementById("yieldPlayerTwo").disabled=false;
}

function disableButtonPlayerTwo() {
    document.getElementById("hitPlayerTwo").disabled=true;
    document.getElementById("healPlayerTwo").disabled=true;
    document.getElementById("yieldPlayerTwo").disabled=true;

    document.getElementById("hitPlayerOne").disabled=false;
    document.getElementById("healPlayerOne").disabled=false;
    document.getElementById("yieldPlayerOne").disabled=false;
}