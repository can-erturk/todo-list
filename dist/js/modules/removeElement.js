import ClickHandler from "./clickHandler.js"

class RemoveElement{
    // Remove temporary html element from DOM
    static sidebar(){
        document.querySelector('#sidebarContent').removeChild(document.querySelector('#sidebarContent .sidebar-item.new'))
        window.removeEventListener('click', ClickHandler.sidebar)
    }
}

export default RemoveElement