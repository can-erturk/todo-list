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
            })
        })

        const initlistContent = (e) => {
            e.preventDefault()
            const draggingItem = document.querySelector(".item-re-ordering")

            const items = [
                ...listContent.querySelectorAll(".list-item:not(.item-re-ordering)")
            ]

            const nextItem = items.find(sibling => {
                return e.clientY <= sibling.offsetHeight / 2 + sibling.offsetTop
            })

            listContent.insertBefore(draggingItem, nextItem)
        }

        listContent.addEventListener("dragover", initlistContent)
        listContent.addEventListener("dragenter", (e) => e.preventDefault())
    }
}

export default ReorderList