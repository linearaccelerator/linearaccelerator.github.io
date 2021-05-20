let defaultSave = {
    money: 0,
    prestigeCoins: 0,
    upgrades: [[0, 15], [0, 100], [0, 500], [0, 2500], [0, 12500]]
}
let partialDefaultSave = {
    money: 0,
    upgrades: [[0, 15], [0, 100], [0, 500], [0, 2500], [0, 12500]]
}

/**
 * @type {defaultSave}
 */
let save;
let fps = 25;
save = defaultSave;

function mine() {
    save.money++;
    updateText();
}

function buy(itemType){
    let cost = save.upgrades[itemType - 1][1];
    if(save.money < cost) return;
    save.money -= cost;
    save.upgrades[itemType - 1][0]++;
    save.upgrades[itemType - 1][1] *= 1.10 + (0.05 * itemType);
    updateText();
}

function prestige(){
    let gain = (save.money < 5e5 ? 0 : Math.log10(save.money) * 100 - 568);
    save = partialDefaultSave;
    save.prestigeCoins = gain;
}

function updateText() {
    document.getElementById("coin-display").innerText = `${save.money.toFixed(2)} coins`;
    document.getElementById("auto-miner-btn").innerText = `(${save.upgrades[0][0].toFixed(2)}) ${save.upgrades[0][1].toFixed(2)} coins`;
    document.getElementById("gen-1-btn").innerText = `(${save.upgrades[1][0].toFixed(2)}) ${save.upgrades[1][1].toFixed(2)} coins`;
    document.getElementById("gen-2-btn").innerText = `(${save.upgrades[2][0].toFixed(2)}) ${save.upgrades[2][1].toFixed(2)} coins`;
    document.getElementById("gen-3-btn").innerText = `(${save.upgrades[3][0].toFixed(2)}) ${save.upgrades[3][1].toFixed(2)} coins`;
    document.getElementById("gen-4-btn").innerText = `(${save.upgrades[4][0].toFixed(2)}) ${save.upgrades[4][1].toFixed(2)} coins`;
    document.getElementById("prestige-btn").innerText = `+${(save.money < 5e5 ? 0 : Math.log10(save.money) * 100 - 568).toFixed(2)} Prestige Coins`;
}

function updateTitleText() {
    document.getElementById("prestige-btn").title = `${((save.money < 5e5 ? 0 : Math.log10(save.money) * 100 - 568) * 4).toFixed(2)}% auto-mine power increase`;
}

setInterval(() => {
    save.money += save.upgrades[0][0] * (.75 * 1 + (save.prestigeCoins * 0.04)) / fps;
    save.upgrades[0][0] += save.upgrades[1][0] * .1 / fps;
    save.upgrades[1][0] += save.upgrades[2][0] * .1 / fps;
    save.upgrades[2][0] += save.upgrades[3][0] * .1 / fps;
    save.upgrades[3][0] += save.upgrades[4][0] * .1 / fps;
    updateText();
}, 1000 / fps);

setInterval(() => updateTitleText(), 2000);