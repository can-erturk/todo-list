import Helpers from "./modules/Helpers.js"
import InitSidebar from "./modules/initSidebar.js"
import InitList from "./modules/initList.js"
import SetList from "./modules/setList.js"

window.addEventListener('DOMContentLoaded', () => {
    InitSidebar.init()
    InitList.init()

    // Sidebar open/close
    const sidebarToggle = document.querySelectorAll('.sidebar-toggle')
    sidebarToggle.forEach(el => {
        el.addEventListener('click', Helpers.sidebarToggle)
    })

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
    })    
})