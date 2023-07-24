import ClickHandler from "./clickHandler.js"

class RemoveElement {
    // Remove temporary html element from DOM
    static sidebar(){
        const content = document.querySelector('#sidebarContent')
        const newItem = content.querySelector('.sidebar-item.new')

        content.removeChild(newItem)
        window.removeEventListener('click', ClickHandler.sidebar)
    }
}

export default RemoveElement