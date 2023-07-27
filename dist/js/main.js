import Helpers from "./modules/Helpers.js"
import InitSidebar from "./modules/initSidebar.js"
import InitList from "./modules/initList.js"

window.addEventListener('DOMContentLoaded', () => {
    InitSidebar.init()
    InitList.init()

    // Sidebar open/close
    const sidebarToggle = document.querySelectorAll('.sidebar-toggle')
    sidebarToggle.forEach(el => {
        el.addEventListener('click', Helpers.sidebarToggle)
    })
})