import { getShippingShips } from "./database.js"


export const shippingShipList = () => {
    const shippingShips = getShippingShips()

    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShips) {
        // Convert each shippingShip object to an <li> and append to the shippingShipsHTML string
        shippingShipsHTML += `<li>${ship.name}</li>`
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}