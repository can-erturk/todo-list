import CreatePermElement from "./createPermElement.js"
import RemoveElement from "./removeElement.js"
import ToggleCompleted from "./toggleCompleted.js"
import SetList from "./setList.js"
import RemoveData from "./removeData.js"
import Helpers from "./Helpers.js"

class ClickHandler {
    // Listen click events.
    // Works after creating a new item.
    static sidebar(e){
        const input = document.querySelector('.sidebar-item.new .name input')
        const value = input.value

        const targetTag = e.target.tagName
        const targetClass = e.target.className

        const matches = targetTag.match(/BUTTON|INPUT/)
        const includes = targetClass.includes('sidebar-toggle')

        // If the target is not "button", "input", ".sidebar-toggle"
        if (!matches && !includes) {
            if (value.length > 0) {
                CreatePermElement.sidebar(value)
            }else{
                RemoveElement.sidebar()
            }
        }
        
        // Delete temporary item if sidebar is closed
        if (includes) {
            RemoveElement.sidebar()
        }
    }

    static list(e){
        const input = document.querySelector('.list-item.new .todo input')
        const value = input.value
        const targetClass = e.target.className

        const matches = targetClass.includes('add-new', 'add-new-img')
        const includes = targetClass.includes('sidebar-toggle')

        if (!matches && !includes) {
            if (value.length > 0) {
                CreatePermElement.list(value)
            }else{
                RemoveElement.list()
            }
        }
        
        // Delete temporary item if sidebar is closed
        if (includes) {
            RemoveElement.list()
        }
    }

    static toggleCompleted(el){
        const list = document.querySelector('#listContent')
        const listId = list.getAttribute('data-id')
        const itemId = el.getAttribute('data-id')

        if (el.classList.contains('completed')) {
            ToggleCompleted.setIncompleted(listId, itemId)
        }else{
            ToggleCompleted.setCompleted(listId, itemId)
        }

        el.classList.toggle('completed')
    }

    static updateList(el){
        const sidebarData = localStorage.getItem('sidebarData')
        const data = JSON.parse(sidebarData)
        const id = el.getAttribute('data-id')

        localStorage.setItem('activeList', id)

        SetList.setActive(id, data[id].name)
    }

    static removeSidebarItem(el){
        const activeList = document.querySelector('#listContent')
        const activeListId = activeList.getAttribute('data-id')
        const listId = el.getAttribute('data-id')
        
        RemoveData.removeSidebarData(listId)
        
        if (listId == activeListId) {
            const sidebarData = localStorage.getItem('sidebarData')

            if (sidebarData) {
                const jsonData = JSON.parse(sidebarData)
                const keys = Object.keys(jsonData)
                const id = keys[keys.length-1]

                SetList.setActive(id, jsonData[id].name)
            }else{
                const listContent = document.querySelector('#listContent')
                const addNewBtn = document.querySelector('#addNew')
                const titleElement = document.querySelector('.header .title')

                addNewBtn.classList.add('disabled')
                listContent.innerHTML = Helpers.listNotFound()
                titleElement.innerHTML = ''
            }
        }

        el.remove()
    }

    static removeListItem(el){
        const list = document.querySelector('#listContent')
        const listId = list.getAttribute('data-id')
        const itemId = el.getAttribute('data-id')

        RemoveData.removeListData(listId, itemId)
        
        el.remove()
    }
}

export default ClickHandler