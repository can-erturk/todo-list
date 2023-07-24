import Helpers from "./Helpers.js"
import Sidebar from "./Sidebar.js"

class InitSidebar {
    static init(){
        Sidebar.init()

        const content = document.querySelector('#sidebarContent')
        const sidebarData = JSON.parse(localStorage.getItem('sidebarData'))
        if (!sidebarData) return 

        for (const [key, val] of Object.entries(sidebarData)) {
            const id = key
            const name = val.name

            const html = content.innerHTML
            const newHtml = Helpers.sidebarPermItem(id, name)

            content.innerHTML = newHtml + html
        }
    }
}

export default InitSidebar