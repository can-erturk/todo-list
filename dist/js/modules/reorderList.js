import ReorderData from './reorderData.js'

class ReorderList {
    static listen(){
        const listContent = document.querySelector(".list-content")
        const listItems = listContent.querySelectorAll(".list-item")

        listItems.forEach(el => {
            el.addEventListener("dragstart", () => {
                el.classList.add("item-re-ordering")
            })

            el.addEventListener("dragend", () => {
                el.classList.remove("item-re-ordering")
                ReorderData.handle()
            })
        })

        const initlistContent = (e) => {
            if (listContent.querySelector('.list-item.new')) return

            e.preventDefault()
            const draggingItem = document.querySelector(".item-re-ordering")

            const items = [
                ...listContent.querySelectorAll(".list-item:not(.item-re-ordering)")
            ]

            let diff = 0
            if ((listContent.scrollHeight - listContent.clientHeight) != 0) {
                diff = listContent.scrollTop
            }

            const nextItem = items.find(sibling => {
                return e.clientY + diff <= sibling.offsetHeight / 2 + sibling.offsetTop
            })

            listContent.insertBefore(draggingItem, nextItem)
        }

        listContent.addEventListener("dragover", initlistContent)
        listContent.addEventListener("dragenter", (e) => e.preventDefault())
    }
}

export default ReorderList