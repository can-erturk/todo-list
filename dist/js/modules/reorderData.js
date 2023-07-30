class ReorderData {
    static handle(){
        const listContent = document.querySelector('#listContent')
        const listItems = listContent.querySelectorAll('.list-item')
        const listId = listContent.getAttribute('data-id')

        const newList = {}

        listItems.forEach(el => {
            const idAttr = el.getAttribute('data-id')
            const name = el.querySelector('.todo').innerHTML
            const completed = el.classList.contains('completed') ? true : false

            newList[idAttr] = {
                name: name,
                completed: completed
            }
        })

        const reversedNewList = Object.fromEntries(Object.entries(newList).reverse())
        this.set(listId, JSON.stringify(reversedNewList))
    }

    static set(listId, newData){
        localStorage.setItem(listId, newData)
    }
}

export default ReorderData