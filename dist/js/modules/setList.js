class SetList {
    static init(data){
        let keys = Object.keys(data)
        let id = null

        if (keys.length == 1) {
            id = keys[0]
        }
        
        if (keys.length > 1) {
            id = keys[keys.length-1]
        }

        this.setActive(id, data[id].name)
    }

    static setActive(id, title){
        const titleElement = document.querySelector('.header .title')
        const listContent = document.querySelector('#listContent')

        listContent.setAttribute('data-id', id)
        titleElement.innerText = title
    }
}

export default SetList