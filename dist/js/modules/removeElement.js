import ClickHandler from "./clickHandler.js"

class RemoveElement {
    // Remove temporary html element from DOM
    static sidebar(){
        const content = document.querySelector('#sidebarContent')
        const newItem = content.querySelector('.sidebar-item.new')

        content.removeChild(newItem)
        window.removeEventListener('click', ClickHandler.sidebar)
    }

    static list(){
        const content = document.querySelector('#listContent')
        const newItem = content.querySelector('.list-item.new')

        content.removeChild(newItem)
        window.removeEventListener('click', ClickHandler.list)
    }

    static listContent(){
        const content = document.querySelector('#listContent')
        const listNotFound = document.querySelector('.list-not-found')
        const addNewBtn = document.querySelector('#addNew')

        if (listNotFound) {
            addNewBtn.classList.remove('disabled')
            content.removeChild(listNotFound)
        }
    }
}

export default RemoveElement