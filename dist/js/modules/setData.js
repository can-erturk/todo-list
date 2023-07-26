import SetList from "./setList.js"

class SetData {
    // Save new list to localStorage
    static setSidebarData(id, name){
        let data = localStorage.getItem('sidebarData')

        let newData = {
            "name": name
        }
        
        let jsonData = data ? JSON.parse(data) : {}
        jsonData[id] = newData
        
        localStorage.setItem('sidebarData', JSON.stringify(jsonData))
        this.createEmptyList(id)

        SetList.setActive(id, name)
    }

    static createEmptyList(id){
        localStorage.setItem(id, '{}')
    }

    static addListData(id, name){
        const listContent = document.querySelector('#listContent')
        const listId = listContent.getAttribute('data-id')
        const listData = localStorage.getItem(listId)
        
        const newData = {
            "name": name,
            "completed": false
        }
        
        const jsonData = JSON.parse(listData)
        jsonData[id] = newData
        
        localStorage.setItem(listId, JSON.stringify(jsonData))
    }
}

export default SetData