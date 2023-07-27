class RemoveData {
    static removeSidebarData(id){
        localStorage.removeItem(id)
        
        const sidebarData = JSON.parse(localStorage.getItem('sidebarData'))
        delete sidebarData[id]

        if (Object.keys(sidebarData).length >= 1) {
            localStorage.setItem('sidebarData', JSON.stringify(sidebarData))            
        }else{
            localStorage.removeItem('sidebarData')
        }
    }

    static removeListData(list, item){
        const listData = JSON.parse(localStorage.getItem(list))
        delete listData[item]

        localStorage.setItem(list, JSON.stringify(listData))
    }
}

export default RemoveData