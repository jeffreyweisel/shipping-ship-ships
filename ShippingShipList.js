import { getHaulingShips, getShippingShips } from "./database.js"


export const shippingShipList = () => {
    const shippingShips = getShippingShips()
    
    //Sort shipping ships alphabetically
    shippingShips.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
})
    //Create shipping ship html
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




//Create click event that shows what hauler is hauling each shipping ship

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
        
        
        
        if(itemClicked.dataset.type === "shippingship") {
            
            const shipHaulerId = itemClicked.dataset.haulerid
            
            let haulingShip = { name: "Incorrect" }
            
            const shipHaulers = getHaulingShips()
            for (const hauler of shipHaulers) {
                if(hauler.id == shipHaulerId){
                    haulingShip = hauler
                }
            }
            
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`)
                
        }
    }

)
                
            



