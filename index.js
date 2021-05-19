let defaultSave = {
    money: 0,
    upgrades: [[0, 15], [0, 100], [0, 500]]
}
/**
 * @type {defaultSave}
 */
let save;
let fps = 15;
save = defaultSave;

function mine() {
    save.money++;
    updateText();
}

function buy(itemType){
    switch(itemType){
        case 1:
            if(save.money < save.upgrades[0][1]) return;
            save.money -= save.upgrades[0][1];
            save.upgrades[0][0]++;
            save.upgrades[0][1] *= 1.15;
            break;
        case 2:
            if(save.money < save.upgrades[1][1]) return;
            save.money -= save.upgrades[1][1];
            save.upgrades[1][0]++;
            save.upgrades[1][1] *= 1.2;
            break;
        case 3:
            if(save.money < save.upgrades[2][1]) return;
            save.money -= save.upgrades[2][1];
            save.upgrades[2][0]++;
            save.upgrades[2][1] *= 1.25;
            break;
    }
    updateText();
}

function updateText() {
    document.getElementById("coin-display").innerText = `${save.money.toFixed(2)} coins`;
    document.getElementById("auto-miner-btn").innerText = `(${save.upgrades[0][0].toFixed(2)}) ${save.upgrades[0][1].toFixed(2)} coins`;
    document.getElementById("gen-1-btn").innerText = `(${save.upgrades[1][0].toFixed(2)}) ${save.upgrades[1][1].toFixed(2)} coins`;
    document.getElementById("gen-2-btn").innerText = `(${save.upgrades[2][0].toFixed(2)}) ${save.upgrades[2][1].toFixed(2)} coins`;
}

setInterval(() => {
    save.money += save.upgrades[0][0] * .4 / fps;
    save.upgrades[0][0] += save.upgrades[1][0] * .1 / fps;
    save.upgrades[1][0] += save.upgrades[2][0] * .1 / fps;
    updateText();
}, 1000 / fps);