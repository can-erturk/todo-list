import Helpers from "./Helpers.js"
import SetData from "./setData.js"
import ClickListener from "./clickListener.js"
import ClickHandler from "./clickHandler.js"
import RemoveElement from "./removeElement.js"
import ReorderList from "./reorderList.js"

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

        RemoveElement.listContent()
        ClickListener.listenSidebarItems()
    }

    static list(itemName){
        const content = document.querySelector('#listContent')
        const newItem = document.querySelector('.list-item.new')

        content.removeChild(newItem)
        const id = new Date().valueOf()

        const html = content.innerHTML
        const newHtml = Helpers.listPermItem(id, itemName)
        content.innerHTML = html + newHtml

        SetData.addListData(id, itemName)
        window.removeEventListener('click', ClickHandler.list)

        ClickListener.listenListItems()
        ReorderList.listen()
    }
}

export default CreatePermElement