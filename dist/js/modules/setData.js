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
    }
}

export default SetData