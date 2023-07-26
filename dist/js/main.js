import Helpers from "./modules/Helpers.js"
import InitSidebar from "./modules/initSidebar.js"
import InitList from "./modules/initList.js"
import ToggleCompleted from "./modules/toggleCompleted.js"
import SetList from "./modules/setList.js"

window.addEventListener('DOMContentLoaded', () => {
    InitSidebar.init()
    InitList.init()

    // Sidebar open/close
    const sidebarToggle = document.querySelectorAll('.sidebar-toggle')
    sidebarToggle.forEach(el => {
        el.addEventListener('click', Helpers.sidebarToggle)
    })

    const toggleCompleted = (el) => {
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

    const updateList = (el) => {
        const sidebarData = localStorage.getItem('sidebarData')
        const data = JSON.parse(sidebarData)
        const id = el.getAttribute('data-id')

        localStorage.setItem('activeList', id)

        SetList.setActive(id, data[id].name)
    }

    window.addEventListener('click', (e) => {
        const targetClass = e.target.className

        if (targetClass.includes('sidebar-item')) {
            updateList(e.target)
        }

        if (targetClass.includes('list-item')) {
            toggleCompleted(e.target)
        }
    })
})