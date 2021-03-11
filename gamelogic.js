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
    return (parseInt(Math.random() * (max - min) + min));
}

function randomNumberHit(min, max) {
    return (parseInt(Math.random() * (max - min) + min));
}

let healValuePone;

function healPlayerOne() {
    healValuePone = randomNumberHeal(playerOneFunc.min, playerOneFunc.maxHealing);
    healthPlayerOne.value += healValuePone;
};

function victoryOrLoose() {
    if (healthPlayerOne.value == 0) {
        document.getElementById("playerOneLastMove").innerHTML = "You LOOSE";
        document.getElementById("playerTwoLastMove").innerHTML = "You WIN !!!";
        disableButtonPlayerTwo();
    } else if (healthPlayerTwo.value == 0) {
        document.getElementById("playerTwoLastMove").innerHTML = "You LOOSE";
        document.getElementById("playerOneLastMove").innerHTML = "You WIN !!!";
        disableButtonPlayerOne();
    };
};
// function percentage of chance for hit
let d;
let w;

function chanceOf(percentage) {
    d = Math.random();
    for (w = 0; w < 1; w++) {
        if (d <= 0.3) {
            attackValuePOne = 0;
            healthPlayerTwo.value -= attackValuePOne;
            console.log(attackValuePOne);
            console.log(d);
        } else {
            attackValuePOne = randomNumberHit(playerOneFunc.min, playerOneFunc.maxDamage);
            console.log(attackValuePOne);
            healthPlayerTwo.value -= (attackValuePOne * percentage);
            console.log(attackValuePOne);
            console.log(d);
        }
    };
};
// function percentage of chance for hit twice
let o;
let q;

function chanceOfAttackTwice(decrease) {
    o = Math.random();
    for (q = 0; q < 1; q++) {
        if (o <= 0.3) {
            attackValuePOne = randomNumberHit(playerOneFunc.min, playerOneFunc.maxDamage);
            healthPlayerTwo.value -= ((attackValuePOne * 2) / decrease);
            console.log(attackValuePOne);
        } else {
            attackValuePOne = randomNumberHit(playerOneFunc.min, playerOneFunc.maxDamage);
            healthPlayerTwo.value -= (attackValuePOne / decrease);
            console.log(attackValuePOne);
        }
    };
};
let p;
let t;

function elfAttack(decrease, increase) {
    y = Math.random();
    for (t = 0; t < 1; t++) {
        if (p <= 0.3) {
            attackValuePOne = randomNumberHit(playerOneFunc.min, playerOneFunc.maxDamage);
            healthPlayerOne.value -= (((attackValuePOne / 1.50) * decrease) * increase);
            console.log(p);
            console.log(attackValuePOne);
        } else {
            attackValuePOne = randomNumberHit(playerOneFunc.min, playerOneFunc.maxDamage);
            healthPlayerTwo.value -= attackValuePOne;
            console.log(p);
            console.log(attackValuePTwo);
        }
    };
};

function vampireLifesteal() {
    if (playerOneFunc.race == "vampire") {
        lifeLostTwo = (healthPlayerTwo.value * 0.1);
        healthPlayerOne.value += lifeLostTwo;
        healthPlayerTwo.value -= lifeLostTwo;
    }
};

function messagePlayerOneHit() {
    document.getElementById("playerOneLastMove").innerHTML = "Player One HIT"
};

function messagePlayerOneHeal() {
    document.getElementById("playerOneLastMove").innerHTML = "Player One HEAL"
};

function messagePlayerOneYield() {
    document.getElementById("playerOneLastMove").innerHTML = "Player One YIELD"
};

// function click hit player one
let attackValuePOne;

function attackPlayerOne() {
    if (playerTwoFunc.race == "human") {
        if (playerOneFunc.item == "boots") {
            if (playerTwoFunc.item == "boots") {
                chanceOf(1, 1.20);
            } else {
                attackValuePOne = randomNumberHit(playerOneFunc.min, playerOneFunc.maxDamage);
                console.log(attackValuePOne);
                healthPlayerTwo.value -= (attackValuePOne / 1.20);
                console.log(attackValuePOne);
            }
        } else if (playerOneFunc.item == "staff") {
            if (playerTwoFunc.item == "boots") {
                chanceOf(1, 1.20);
            } else {
                attackValuePOne = randomNumberHit(playerOneFunc.min, playerOneFunc.maxDamage);
                console.log(attackValuePOne);
                healthPlayerTwo.value -= (attackValuePOne / 1.20);
                console.log(attackValuePOne);
            }
        } else if (playerOneFunc.item == "sword") {
            if (playerTwoFunc.item == "boots") {
                chanceOf(1.30, 1.20);
            } else {
                attackValuePOne = randomNumberHit(playerOneFunc.min, playerOneFunc.maxDamage);
                console.log(attackValuePOne);
                healthPlayerTwo.value -= ((attackValuePOne * 1.30) / 1.20);
                console.log(attackValuePOne);
            }
        } else if (playerOneFunc.item == "bow") {
            if (playerTwoFunc.item == "boots") {
                chanceOf(2, 1.20);
            } else {
                chanceOfAttackTwice(1.20);
            }
        }
    } else if (playerTwoFunc.race == "elve") {
        if (playerOneFunc.item == "boots") {
            if (playerTwoFunc.item == "boots") {
                elfAttack(1, 1);
            } else {
                elfAttack(1, 1);
            }
        } else if (playerOneFunc.item == "staff") {
            if (playerTwoFunc.item == "boots") {
                elfAttack(1, 1);
            } else {
                elfAttack(1, 1);
            }
        } else if (playerOneFunc.item == "sword") {
            if (playerTwoFunc.item == "boots") {
                elfAttack(1, 1.30);
            } else {
                elfAttack(1, 1.30);
            }
        } else if (playerOneFunc.item == "bow") {
            if (playerTwoFunc.item == "boots") {
                elfAttack(1, 1);
            } else {
                elfAttack(1, 2);
            }
        }
    } else {
        if (playerOneFunc.item == "boots") {
            if (playerTwoFunc.item == "boots") {
                chanceOf(1, 1);
            } else {
                attackValuePOne = randomNumberHit(playerOneFunc.min, playerOneFunc.maxDamage);
                console.log(attackValuePOne);
                healthPlayerTwo.value -= attackValuePOne;
                console.log(attackValuePOne);
            }
        } else if (playerOneFunc.item == "staff") {
            if (playerTwoFunc.item == "boots") {
                chanceOf(1, 1);
            } else {
                attackValuePOne = randomNumberHit(playerOneFunc.min, playerOneFunc.maxDamage);
                console.log(attackValuePOne);
                healthPlayerTwo.value -= attackValuePOne;
                console.log(attackValuePOne);
            }
        } else if (playerOneFunc.item == "sword") {
            if (playerTwoFunc.item == "boots") {
                chanceOf(1.30, 1);
            } else {
                attackValuePOne = randomNumberHit(playerOneFunc.min, playerOneFunc.maxDamage);
                console.log(attackValuePOne);
                healthPlayerTwo.value -= (attackValuePOne * 1.30);
                console.log(attackValuePOne);
            }
        } else if (playerOneFunc.item == "bow") {
            if (playerTwoFunc.item == "boots") {
                chanceOf(2, 1);
            } else {
                chanceOfAttackTwice(1);
            }
        }
    }

}
// Race choosen
function raceChoose() {
    if (playerOneFunc.race == "human") {
        healthPlayerOne.value -= 20;
    } else if (playerOneFunc.race == "orc") {
        playerOneFunc.maxHealth = playerOneFunc.maxHealth * 1.40;
        healthPlayerOne.setAttribute("max", playerOneFunc.maxHealth);
    } else if (playerOneFunc.race == "elve") {
        healthPlayerOne.value -= 0;
    } else if (playerOneFunc.race == "vampire") {
        healthPlayerOne.value -= 50;
    };
};

// Player Two


let healValuePTwo;

function healPlayerTwo() {
    healValuePTwo = randomNumberHeal(playerTwoFunc.min, playerTwoFunc.maxHealing);
    healthPlayerTwo.value += healValuePTwo;
};
// function percentage of chance for hit
let r;
let v;

function chanceOfTwo(percentage, decrease) {
    r = Math.random();
    for (v = 0; v < 1; v++) {
        if (r <= 0.3) {
            attackValuePTwo = 0;
            healthPlayerOne.value -= attackValuePTwo;
            console.log(attackValuePTwo);
            console.log(r);
        } else {
            attackValuePTwo = randomNumberHit(playerTwoFunc.min, playerTwoFunc.maxDamage);
            console.log(attackValuePTwo);
            healthPlayerOne.value -= ((attackValuePTwo * percentage) / decrease);
            console.log(attackValuePTwo);
            console.log(r);
        }
    };
};
// function percentage of chance for hit twice
let b;
let k;

function chanceOfAttackTwiceTwo(decrease) {
    o = Math.random();
    for (k = 0; k < 1; k++) {
        if (b <= 0.3) {
            attackValuePTwo = randomNumberHit(playerTwoFunc.min, playerTwoFunc.maxDamage);
            healthPlayerOne.value -= ((attackValuePTwo * 2) / decrease);
            console.log(attackValuePTwo);
        } else {
            attackValuePTwo = randomNumberHit(playerTwoFunc.min, playerTwoFunc.maxDamage);
            healthPlayerOne.value -= (attackValuePTwo / decrease);
            console.log(attackValuePTwo);
        }
    };
};
let y;
let u;

function elfAttackTwo(decrease, increase) {
    y = Math.random();
    for (u = 0; u < 1; u++) {
        if (y <= 0.3) {
            attackValuePTwo = randomNumberHit(playerTwoFunc.min, playerTwoFunc.maxDamage);
            healthPlayerTwo.value -= (((attackValuePTwo / 1.50) * decrease) * increase);
            console.log(y);
            console.log(attackValuePTwo);
        } else {
            attackValuePTwo = randomNumberHit(playerTwoFunc.min, playerTwoFunc.maxDamage);
            healthPlayerOne.value -= (attackValuePTwo * decrease);
            console.log(y);
            console.log(attackValuePTwo);
        }
    };
};

function vampireLifestealTwo() {
    if (playerTwoFunc.race == "vampire") {
        lifeLostOne = (healthPlayerOne.value * 0.1);
        healthPlayerTwo.value += lifeLostOne;
        healthPlayerOne.value -= lifeLostOne;
    }
};

function messagePlayerTwoHit() {
    document.getElementById("playerTwoLastMove").innerHTML = "Player Two HIT"
}

function messagePlayerTwoHeal() {
    document.getElementById("playerTwoLastMove").innerHTML = "Player Two HEAL"
}

function messagePlayerTwoYield() {
    document.getElementById("playerTwoLastMove").innerHTML = "Player Two YIELD"
}
// function click hit player one
let attackValuePTwo;

function attackPlayerTwo() {
    if (playerOneFunc.race == "human") {
        if (playerTwoFunc.item == "boots") {
            if (playerOneFunc.item == "boots") {
                chanceOfTwo(1, 1.20);
            } else {
                attackValuePTwo = randomNumberHit(playerTwoFunc.min, playerTwoFunc.maxDamage);
                console.log(attackValuePTwo);
                healthPlayerOne.value -= (attackValuePTwo / 1.20);
                console.log(attackValuePTwo);
            }
        } else if (playerTwoFunc.item == "staff") {
            if (playerOneFunc.item == "boots") {
                chanceOfTwo(1, 1.20);
            } else {
                attackValuePTwo = randomNumberHit(playerTwoFunc.min, playerTwoFunc.maxDamage);
                console.log(attackValuePTwo);
                healthPlayerOne.value -= (attackValuePTwo / 1.20);
                console.log(attackValuePTwo);
            }
        } else if (playerTwoFunc.item == "sword") {
            if (playerOneFunc.item == "boots") {
                chanceOfTwo(1.30, 1.20);
            } else {
                attackValuePTwo = randomNumberHit(playerTwoFunc.min, playerTwoFunc.maxDamage);
                console.log(attackValuePTwo);
                healthPlayerOne.value -= ((attackValuePTwo * 1.30) / 1.20);
                console.log(attackValuePTwo);
            }
        } else if (playerTwoFunc.item == "bow") {
            if (playerOneFunc.item == "boots") {
                chanceOfTwo(2, 1.20);
            } else {
                chanceOfAttackTwiceTwo(1.20);
            }
        }
    } else if (playerOneFunc.race == "elve") {
        if (playerTwoFunc.item == "boots") {
            if (playerOneFunc.item == "boots") {
                elfAttackTwo(1, 1);
            } else {
                elfAttackTwo(1, 1);
            }
        } else if (playerTwoFunc.item == "staff") {
            if (playerOneFunc.item == "boots") {
                elfAttackTwo(1, 1);
            } else {
                elfAttackTwo(1, 1);
            }
        } else if (playerTwoFunc.item == "sword") {
            if (playerOneFunc.item == "boots") {
                elfAttackTwo(1, 1.30);
            } else {
                elfAttackTwo(1, 1.30);
            }
        } else if (playerTwoFunc.item == "bow") {
            if (playerOneFunc.item == "boots") {
                elfAttackTwo(1, 1);
            } else {
                elfAttackTwo(1, 2);
            }
        }
    } else {
        if (playerTwoFunc.item == "boots") {
            if (playerOneFunc.item == "boots") {
                chanceOfTwo(1, 1);
            } else {
                attackValuePTwo = randomNumberHit(playerTwoFunc.min, playerTwoFunc.maxDamage);
                console.log(attackValuePTwo);
                healthPlayerOne.value -= attackValuePTwo;
                console.log(attackValuePTwo);
            }
        } else if (playerTwoFunc.item == "staff") {
            if (playerOneFunc.item == "boots") {
                chanceOfTwo(1, 1);
            } else {
                attackValuePTwo = randomNumberHit(playerTwoFunc.min, playerTwoFunc.maxDamage);
                console.log(attackValuePTwo);
                healthPlayerOne.value -= attackValuePTwo;
                console.log(attackValuePTwo);
            }
        } else if (playerTwoFunc.item == "sword") {
            if (playerOneFunc.item == "boots") {
                chanceOfTwo(1.30, 1);
            } else {
                attackValuePTwo = randomNumberHit(playerTwoFunc.min, playerTwoFunc.maxDamage);
                console.log(attackValuePTwo);
                healthPlayerOne.value -= (attackValuePTwo * 1.30);
                console.log(attackValuePTwo);
            }
        } else if (playerTwoFunc.item == "bow") {
            if (playerOneFunc.item == "boots") {
                chanceOfTwo(2, 1);
            } else {
                chanceOfAttackTwiceTwo(1);
            }
        }
    }
};
// Race choosen
function raceChooseTwo() {
    if (playerTwoFunc.race == "human") {
        healthPlayerTwo.value -= 20;
    } else if (playerTwoFunc.race == "orc") {
        playerTwoFunc.maxHealth = playerTwoFunc.maxHealth * 1.40;
        healthPlayerTwo.setAttribute("max", playerTwoFunc.maxHealth);
    } else if (playerTwoFunc.race == "elve") {
        healthPlayerTwo.value -= 50;
    } else if (playerTwoFunc.race == "vampire") {
        healthPlayerTwo.value -= 50;
    };
};

//Turn by turn

function disableButtonPlayerOne() {
    document.getElementById("hitPlayerOne").disabled = true;
    document.getElementById("healPlayerOne").disabled = true;
    document.getElementById("yieldPlayerOne").disabled = true;

    document.getElementById("hitPlayerTwo").disabled = false;
    document.getElementById("healPlayerTwo").disabled = false;
    document.getElementById("yieldPlayerTwo").disabled = false;
}

function disableButtonPlayerTwo() {
    document.getElementById("hitPlayerTwo").disabled = true;
    document.getElementById("healPlayerTwo").disabled = true;
    document.getElementById("yieldPlayerTwo").disabled = true;

    document.getElementById("hitPlayerOne").disabled = false;
    document.getElementById("healPlayerOne").disabled = false;
    document.getElementById("yieldPlayerOne").disabled = false;
}