console.log("This is a business name generator");
// Adjective
const adjNames = {
    adj1: "Crazy", adj2: "Amazing", adj3: "Fire",
}
// Shop
const shopNames = {
    shop1: "Engine", shop2: "Foods", shop3: "Garments",
}
// Trademark
const tmNames = {
    tm1: "Bros", tm2: "Limited", tm3: "Hub",
}

// This function randomizes Adjectives based on the relevant odds
function randomizeAdj() {
    let randomAdj = Math.floor(Math.random()*3);

    if (randomAdj === 0) {
        return adjNames.adj1
    }
    else if (randomAdj === 1) {
        return adjNames.adj2
    }
    else if (randomAdj === 2) {
        return adjNames.adj3
    }
}
// This function randomizes ShopNames based on the relevant odds
function randomizeShop() {
    let randomShop = Math.floor(Math.random()*3);

    if (randomShop === 0) {
        return shopNames.shop1
    }
    else if (randomShop === 1) {
        return shopNames.shop2
    }
    else if (randomShop === 2) {
        return shopNames.shop3
    }
}
// This function randomizes Trademarks based on the relevant odds
function randomizeTM() {
    let randomTrademark = Math.floor(Math.random()*3);

    if (randomTrademark === 0) {
        return tmNames.tm1
    }
    else if (randomTrademark === 1) {
        return tmNames.tm2
    }
    else if (randomTrademark === 2) {
        return tmNames.tm3
    }
}

console.log("Business name: " + randomizeAdj() + " " + randomizeShop() + " " + randomizeTM())
console.log(`Business name: ${randomizeAdj()} ${randomizeShop()} ${randomizeTM()}`)
