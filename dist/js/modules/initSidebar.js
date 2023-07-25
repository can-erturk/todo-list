import Helpers from "./Helpers.js"
import ClickListener from "./clickListener.js"
import SetList from "./setList.js"

class InitSidebar {
    static init(){
        ClickListener.sidebar()

        const content = document.querySelector('#sidebarContent')
        const sidebarData = JSON.parse(localStorage.getItem('sidebarData'))
        if (!sidebarData) return 

        SetList.init(sidebarData)

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