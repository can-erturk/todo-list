import Helpers from "./Helpers.js"
import ClickListener from "./clickListener.js"

class InitList {
    static init(){
        ClickListener.list()
        ClickListener.ordering()

        const sidebarData = localStorage.getItem('sidebarData')
        const listContent = document.querySelector('#listContent')
        const addNewBtn = document.querySelector('#addNew')

        if (!sidebarData) {
            addNewBtn.classList.add('disabled')
            listContent.innerHTML = Helpers.listNotFound()
        }


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