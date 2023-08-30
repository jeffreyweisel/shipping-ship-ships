import { getHaulingShips } from "./database.js"


export const HaulerList = () => {
    const haulers = getHaulingShips()

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        // Convert each hauler object to an <li> and append to the haulersHTML string
        haulersHTML += `<li>${hauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}