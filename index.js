let pickaxes = [
    {
        name: "Paper Pickaxe",
        power: 1,
        maxBonus: .25
    }
]

let defaultSave = {
    money: 0,
    pickaxe: "Paper Pickaxe"
}

let save;
save = defaultSave;

function mine() {
    let pickaxe = pickaxes.find(p => p.name === save.pickaxe);
    let gain = pickaxe.power;
    gain += Number((Math.random(pickaxe.maxBonus)*.25).toFixed(2));
    save.money += gain;
    updateText()
}

function updateText() {
    document.getElementById("coin-display").innerText = `${save.money.toFixed(2)} coins`;
}