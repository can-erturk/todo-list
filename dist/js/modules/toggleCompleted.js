class ToggleCompleted {
    static setCompleted(listId, id){
        this.updateList(listId, id, true)
    }

    static setIncompleted(listId, id){
        this.updateList(listId, id, false)
    }

    static updateList(listId, id, status){
        const list = localStorage.getItem(listId)
        const jsonList = JSON.parse(list)
        
        jsonList[id].completed = status
        localStorage.setItem(listId, JSON.stringify(jsonList))
    }
}

export default ToggleCompleted