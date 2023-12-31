import Helpers from "./Helpers.js"
import ClickListener from "./clickListener.js"
import ReorderList from "./reorderList.js"

class SetList {
    static init(data){
        let keys = Object.keys(data)
        let id = null
        
        const activeList = localStorage.getItem('activeList')
        if (activeList) {
            id = activeList
        }else{
            id = keys[keys.length-1]
        }

        this.setActive(id, data[id].name)
    }

    static setActive(id, title){
        const titleElement = document.querySelector('.header .title')
        const listContent = document.querySelector('#listContent')
        listContent.innerHTML = ''

        listContent.setAttribute('data-id', id)
        titleElement.innerText = title
        
        let listData = localStorage.getItem(id)
        listData = JSON.parse(listData)

        localStorage.setItem('activeList', id)
        
        for (const [key, val] of Object.entries(listData)) {
            const html = listContent.innerHTML
            const newHtml = Helpers.listPermItem(key, val.name, val.completed)
            
            listContent.innerHTML = html + newHtml
        }

        ClickListener.listenListItems()
        ReorderList.listen()
    }
}

export default SetList