import { getHaulingShips, getShippingShips } from "./database.js"


export const shippingShipList = () => {
    const shippingShips = getShippingShips()

    let shippingShipsHTML = "<ul>"

    for (const ship of shippingShips) {
        shippingShipsHTML += `<li 
                                data-type="shippingship"
                                data-id="${ship.id}"
                                data-haulerId="${ship.haulerId}"
                                data-name="${ship.name}"
                                >${ship.name}</li>`
    }

    shippingShipsHTML += "</ul>"

    return shippingShipsHTML
}

// Was a shipping ship list item clicked?
// Get the haulerId value of the shipping ship clicked
// Define a default object for the found hauler
    // let haulingShip = { name: "Incorrect" }
// Iterate the array of hauler objects
// Does the haulerId foreign key match the id of the current hauler?
// Reassign the value of `haulingShip` to the current hauler
// Show an alert to the user with this format...
    // Palais Royal is being hauled by Seawise Giant

    document.addEventListener(
    "click",
    (clickEvent) => {
       
        const itemClicked = clickEvent.target
        console.log(itemClicked)
        console.log(itemClicked.dataset)
        
        
        if(itemClicked.dataset.type === "shippingship") {
            
            const shipHaulerId = itemClicked.dataset.haulerid
            
            let haulingShip = { name: "Incorrect" }
            
            const shipHaulers = getHaulingShips()
            for (const hauler of shipHaulers) {
                if(hauler.id == shipHaulerId){
                    haulingShip = hauler;
                }
                
                
            }
            
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
        }

    }
)


// The type of item was clicked (i.e. a shipping ship was clicked).
// The haulerId value of the shipping ship that was clicked.
// The name of the shipping ship that was clicked.
// The array of haulers so that it can be iterated.