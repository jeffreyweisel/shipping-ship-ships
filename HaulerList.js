import { getHaulingShips, getShippingShips } from "./database.js"



export const HaulerList = () => {
    const haulers = getHaulingShips()
    
    //Sort haulers alphabetically
    haulers.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
})
    //Create hauler html
    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li 
                        data-type="hauler"
                        data-id=${hauler.id}
                        data-dockId=${hauler.dockId}
                        data-name="${hauler.name}"
                        >${hauler.name}</li>`
    }

    haulersHTML += "</ul>"

    return haulersHTML
}

    
   //Create hauler click event that shows how many shipping ships it is carrying
   
    // Was a hauler list item clicked?
    // Get the id of the hauler clicked
    // Start a counter variable at 0
    // Iterate all of the shipping ships
    // Does the haulerId foreign key match the id?
    // Increase the counter by 1

document.addEventListener(
    "click", 
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
        if(itemClicked.dataset.type === "hauler") {
        
            const haulerId = itemClicked.dataset.id
            
            let shipCounter = 0
            
            const shippingShips = getShippingShips()
                for (const ship of shippingShips) {
                    if(parseInt(haulerId) === ship.haulerId) {
                
                    shipCounter++
            }
        }
        
        window.alert(`This hauler is hauling ${shipCounter} ships`)
    }
}
    )
    
