import { getDocks, getHaulingShips} from "./database.js"


export const DockList = () => {
    const docks = getDocks()
    
    //Sort each dock alphabetically
    docks.sort(function(a, b){
        if(a.location < b.location) { return -1; }
        if(a.location > b.location) { return 1; }
        return 0;
})
    //Create docks HTML
    let docksHTML = "<ul>"

    for (const dock of docks) {
        
        docksHTML += `<li 
                        data-type="dock"
                        data-dockId="${dock.id}"
                        data-name="${dock.location}"
                        >${dock.location} can hold ${dock.volume} tons of cargo</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}



//Create click event that shows which haulers are being unloaded at each dock

//Was a DockList item clicked?
//Get the dockId value of the dock clicked
//Define defualt object for the found haulerObject 
    // let haulerObject = {name: "nothing"}
//Iterate the array of the hauler objects 
//Does the dockId foreign key maych the id of the current dock?
//Reassign the value of haulerObject to the current haulers
//Show alert with this format:
//      `${dock} is currently unloading ${hauler}`




document.addEventListener(
    "click",
    (clickEvent) => {

        const itemClicked = clickEvent.target

        if(itemClicked.dataset.type === "dock") {
            
            const dockId = itemClicked.dataset.dockid
              
            const haulerShips = getHaulingShips()
            
            let matchingHaulers = []
            for (const hauler of haulerShips) {
                if(hauler.dockId == dockId){
                    matchingHaulers.push(hauler)
                }
            }
            
                if(matchingHaulers.length > 0){
                    const haulerNames = matchingHaulers.map(hauler => hauler.name)
                   
                    window.alert(`${itemClicked.dataset.name} is currently unloading ${haulerNames.join(', ')}`)

                }else{
                    window.alert(` ${itemClicked.dataset.name} is unloading nothing`)
                }      
            }
        }
    )
                    
                    
    