import Helpers from "./Helpers.js"
import ClickListener from "./clickListener.js"

class InitList {
    static init(){
        ClickListener.list()

        // const content = document.querySelector('#sidebarContent')
        // const sidebarData = JSON.parse(localStorage.getItem('sidebarData'))
        // if (!sidebarData) return 

        // for (const [key, val] of Object.entries(sidebarData)) {
        //     const id = key
        //     const name = val.name

        //     const html = content.innerHTML
        //     const newHtml = Helpers.sidebarPermItem(id, name)

        //     content.innerHTML = newHtml + html
        // }
    }
}

export default InitList