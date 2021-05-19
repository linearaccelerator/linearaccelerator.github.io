let pickaxes = [
    {
        name: "Paper Pickaxe",
        power: 1,
        maxBonus: .25
    }
]

let defaultSave = {
    money: 0,
    pickaxe: "Paper Pickaxe",
    upgrades: {
        muscle: [0, 50]
    }
}

let save;
save = defaultSave;

function mine() {
    let pickaxe = pickaxes.find(p => p.name === save.pickaxe);
    let gain = pickaxe.power;
    gain += Number((Math.random()*pickaxe.maxBonus).toFixed(2));
    gain += 0.25 * save.upgrades.muscle[0]
    save.money += gain;
    updateText()
}

function buy(itemType){
    switch(itemType){
        case 1:
            if(!(save.money >= save.upgrades.muscle[1])) return;
            save.money -= save.upgrades.muscle[1];
            save.upgrades.muscle[0]++;
            save.upgrades.muscle[1] *= 1.2;
            break;
    }
    updateText();
}

function updateText() {
    document.getElementById("coin-display").innerText = `${save.money.toFixed(2)} coins`;
    document.getElementById("muscle-button").innerText = `(${save.upgrades.muscle[0]}) ${save.upgrades.muscle[1].toFixed(2)} coins`;
}

setInterval(() => updateText(), 50)