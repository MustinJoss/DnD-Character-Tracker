
var duria = {
    name: "Duria Fireforge",
    gender: "female",
    race: "dwarf",
    subrace: "mountain dwarf",
    class: "fighter",
    subclass: "battlemaster",
    alignment: "neutral good",
    hitpoints: 40,
    ac: 19,
    speed: 25,
    initiative: 2,
    strength: 16,
    strMod: 3,
    dexterity: 16,
    dexMod: 3,
    constitution: 16,
    conMod: 3,
    intelligence: 10,
    intMod: 0,
    wisdom: 12,
    wisMod: 1,
    charisma: 8,
    chaMod: -1,
}

document.getElementById("duriaHP").innerText = duria.hitpoints;
document.getElementById("duriaAC").innerText = duria.ac;
document.getElementById("duriaSPD").innerText = duria.speed;
document.getElementById("duriaINI").innerText = "+" + duria.initiative;
document.getElementById("duriaSTR").innerText = duria.strength;
document.getElementById("duriaDEX").innerText = duria.dexterity;
document.getElementById("duriaCON").innerText = duria.constitution;
document.getElementById("duriaINT").innerText = duria.intelligence;
document.getElementById("duriaWIS").innerText = duria.wisdom;
document.getElementById("duriaCHA").innerText = duria.charisma;

function duriaDMG1(){
    var duriaCurrentHP = document.getElementById("duriaHP").innerHTML;
    duriaCurrentHP = duriaCurrentHP -= 1;
    if (duriaCurrentHP < 0){
        duriaCurrentHP = 0;
    }
    document.getElementById("duriaHP").innerHTML = duriaCurrentHP;
}

function duriaDMG5(){
    var duriaCurrentHP = document.getElementById("duriaHP").innerHTML;
    duriaCurrentHP = duriaCurrentHP -= 5;
    if (duriaCurrentHP < 0){
        duriaCurrentHP = 0;
    }
    document.getElementById("duriaHP").innerHTML = duriaCurrentHP;
}

function duriaDMG10(){
    var duriaCurrentHP = document.getElementById("duriaHP").innerHTML;
    duriaCurrentHP = duriaCurrentHP -= 10;
    if (duriaCurrentHP < 0){
        duriaCurrentHP = 0;
    }
    document.getElementById("duriaHP").innerHTML = duriaCurrentHP;
}

function duriaHEAL1(){
    var duriaCurrentHP = document.getElementById("duriaHP").innerHTML;
    duriaCurrentHP = duriaCurrentHP -= -1;
    if (duriaCurrentHP > duria.hitpoints){
        duriaCurrentHP = duria.hitpoints;
    }
    document.getElementById("duriaHP").innerHTML = duriaCurrentHP;
}

function duriaHEAL5(){
    var duriaCurrentHP = document.getElementById("duriaHP").innerHTML;
    duriaCurrentHP = duriaCurrentHP -= -5;
    if (duriaCurrentHP > duria.hitpoints){
        duriaCurrentHP = duria.hitpoints;
    }
    document.getElementById("duriaHP").innerHTML = duriaCurrentHP;
}

function duriaHEAL10(){
    var duriaCurrentHP = document.getElementById("duriaHP").innerHTML;
    duriaCurrentHP = duriaCurrentHP -= -10;
    if (duriaCurrentHP > duria.hitpoints){
        duriaCurrentHP = duria.hitpoints;
    }
    document.getElementById("duriaHP").innerHTML = duriaCurrentHP;
}

var hood = {
    name: "Hood",
    gender: "male",
    race: "elf",
    subrace: "wood elf",
    class: "fighter",
    subclass: "arcane archer",
    alignment: "neutral good",
    hitpoints: 32,
    ac: 15,
    speed: 35,
    initiative: 4,
    strength: 8,
    strMod: -1,
    dexterity: 18,
    dexMod: 4,
    constitution: 12,
    conMod: 1,
    intelligence: 10,
    intMod: 0,
    wisdom: 16,
    wisMod: 3,
    charisma: 13,
    chaMod: 1,
}

document.getElementById("hoodHP").innerText = hood.hitpoints;
document.getElementById("hoodAC").innerText = hood.ac;
document.getElementById("hoodSPD").innerText = hood.speed;
document.getElementById("hoodINI").innerText = "+" + hood.initiative;
document.getElementById("hoodSTR").innerText = hood.strength;
document.getElementById("hoodDEX").innerText = hood.dexterity;
document.getElementById("hoodCON").innerText = hood.constitution;
document.getElementById("hoodINT").innerText = hood.intelligence;
document.getElementById("hoodWIS").innerText = hood.wisdom;
document.getElementById("hoodCHA").innerText = hood.charisma;

function hoodDMG1(){
    var hoodCurrentHP = document.getElementById("hoodHP").innerHTML;
    hoodCurrentHP = hoodCurrentHP -= 1;
    if (hoodCurrentHP < 0){
        hoodCurrentHP = 0;
    }
    document.getElementById("hoodHP").innerHTML = hoodCurrentHP;
}

function hoodDMG5(){
    var hoodCurrentHP = document.getElementById("hoodHP").innerHTML;
    hoodCurrentHP = hoodCurrentHP -= 5;
    if (hoodCurrentHP < 0){
        hoodCurrentHP = 0;
    }
    document.getElementById("hoodHP").innerHTML = hoodCurrentHP;
}

function hoodDMG10(){
    var hoodCurrentHP = document.getElementById("hoodHP").innerHTML;
    hoodCurrentHP = hoodCurrentHP -= 10;
    if (hoodCurrentHP < 0){
        hoodCurrentHP = 0;
    }
    document.getElementById("hoodHP").innerHTML = hoodCurrentHP;
}

function hoodHEAL1(){
    var hoodCurrentHP = document.getElementById("hoodHP").innerHTML;
    hoodCurrentHP = hoodCurrentHP -= -1;
    if (hoodCurrentHP > hood.hitpoints){
        hoodCurrentHP = hood.hitpoints;
    }
    document.getElementById("hoodHP").innerHTML = hoodCurrentHP;
}

function hoodHEAL5(){
    var hoodCurrentHP = document.getElementById("hoodHP").innerHTML;
    hoodCurrentHP = hoodCurrentHP -= -5;
    if (hoodCurrentHP > hood.hitpoints){
        hoodCurrentHP = hood.hitpoints;
    }
    document.getElementById("hoodHP").innerHTML = hoodCurrentHP;
}

function hoodHEAL10(){
    var hoodCurrentHP = document.getElementById("hoodHP").innerHTML;
    hoodCurrentHP = hoodCurrentHP -= -10;
    if (hoodCurrentHP > hood.hitpoints){
        hoodCurrentHP = hood.hitpoints;
    }
    document.getElementById("hoodHP").innerHTML = hoodCurrentHP;
}

var sanzor = {
    name: "Sanzor Barbero",
    gender: "male",
    race: "tiefling",
    subrace: "tiefling",
    class: "rogue",
    subclass: "arcane trickster",
    alignment: "neutral good",
    hitpoints: 23,
    ac: 14,
    speed: 30,
    initiative: 2,
    strength: 8,
    strMod: -1,
    dexterity: 15,
    dexMod: 2,
    constitution: 10,
    conMod: 0,
    intelligence: 14,
    intMod: 2,
    wisdom: 14,
    wisMod: 2,
    charisma: 14,
    chaMod: 2,
}

document.getElementById("sanzorHP").innerText = sanzor.hitpoints;
document.getElementById("sanzorAC").innerText = sanzor.ac;
document.getElementById("sanzorSPD").innerText = sanzor.speed;
document.getElementById("sanzorINI").innerText = "+" + sanzor.initiative;
document.getElementById("sanzorSTR").innerText = sanzor.strength;
document.getElementById("sanzorDEX").innerText = sanzor.dexterity;
document.getElementById("sanzorCON").innerText = sanzor.constitution;
document.getElementById("sanzorINT").innerText = sanzor.intelligence;
document.getElementById("sanzorWIS").innerText = sanzor.wisdom;
document.getElementById("sanzorCHA").innerText = sanzor.charisma;

function sanzorDMG1(){
    var sanzorCurrentHP = document.getElementById("sanzorHP").innerHTML;
    sanzorCurrentHP = sanzorCurrentHP -= 1;
    if (sanzorCurrentHP < 0){
        sanzorCurrentHP = 0;
    }
    document.getElementById("sanzorHP").innerHTML = sanzorCurrentHP;
}

function sanzorDMG5(){
    var sanzorCurrentHP = document.getElementById("sanzorHP").innerHTML;
    sanzorCurrentHP = sanzorCurrentHP -= 5;
    if (sanzorCurrentHP < 0){
        sanzorCurrentHP = 0;
    }
    document.getElementById("sanzorHP").innerHTML = sanzorCurrentHP;
}

function sanzorDMG10(){
    var sanzorCurrentHP = document.getElementById("sanzorHP").innerHTML;
    sanzorCurrentHP = sanzorCurrentHP -= 10;
    if (sanzorCurrentHP < 0){
        sanzorCurrentHP = 0;
    }
    document.getElementById("sanzorHP").innerHTML = sanzorCurrentHP;
}

function sanzorHEAL1(){
    var sanzorCurrentHP = document.getElementById("sanzorHP").innerHTML;
    sanzorCurrentHP = sanzorCurrentHP -= -1;
    if (sanzorCurrentHP > sanzor.hitpoints){
        sanzorCurrentHP = sanzor.hitpoints;
    }
    document.getElementById("sanzorHP").innerHTML = sanzorCurrentHP;
}

function sanzorHEAL5(){
    var sanzorCurrentHP = document.getElementById("sanzorHP").innerHTML;
    sanzorCurrentHP = sanzorCurrentHP -= -5;
    if (sanzorCurrentHP > sanzor.hitpoints){
        sanzorCurrentHP = sanzor.hitpoints;
    }
    document.getElementById("sanzorHP").innerHTML = sanzorCurrentHP;
}

function sanzorHEAL10(){
    var sanzorCurrentHP = document.getElementById("sanzorHP").innerHTML;
    sanzorCurrentHP = sanzorCurrentHP -= -10;
    if (sanzorCurrentHP > sanzor.hitpoints){
        sanzorCurrentHP = sanzor.hitpoints;
    }
    document.getElementById("sanzorHP").innerHTML = sanzorCurrentHP;
}