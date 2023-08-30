import { DockList } from "./DockList.js"
import { HaulerList } from "./HaulerList.js"
import { shippingShipList } from "./ShippingShipList.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping Ship Ships</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Haulers</h2>
        ${HaulerList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Docks</h2>
        ${DockList()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Shipping Ships</h2>
        ${shippingShipList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML