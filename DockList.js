import { getDocks} from "./database.js"


export const DockList = () => {
    const docks = getDocks()

    let docksHTML = "<ul>"

    for (const dock of docks) {
        // Convert each dock object to an <li> and append to the docksHTML string
        docksHTML += `<li 
                        data-type="dock"
                        dock-id="${dock.id}"
                        >${dock.location}</li>`
    }

    docksHTML += "</ul>"

    return docksHTML
}

