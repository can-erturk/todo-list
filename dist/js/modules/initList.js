import Helpers from "./Helpers.js"
import ClickListener from "./clickListener.js"
import ReorderList from "./reorderList.js"

class InitList {
    static init(){
        ClickListener.list()
        ReorderList.listen()

        const sidebarData = localStorage.getItem('sidebarData')
        const listContent = document.querySelector('#listContent')
        const addNewBtn = document.querySelector('#addNew')

        if (!sidebarData) {
            addNewBtn.classList.add('disabled')
            listContent.innerHTML = Helpers.listNotFound()
        }
    }
}

export default InitList