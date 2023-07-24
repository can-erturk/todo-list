import Helpers from "./Helpers.js"
import SetData from "./setData.js"
import ClickHandler from "./clickHandler.js"

class CreatePermElement {
    static sidebar(itemName){
        const content = document.querySelector('#sidebarContent')
        const newItem = document.querySelector('.sidebar-item.new')

        content.removeChild(newItem)
        const id = new Date().valueOf()

        const html = content.innerHTML
        const newHtml = Helpers.sidebarPermItem(id, itemName)
        content.innerHTML = newHtml + html

        SetData.setSidebarData(id, itemName)
        window.removeEventListener('click', ClickHandler.sidebar)
    }
}

export default CreatePermElement