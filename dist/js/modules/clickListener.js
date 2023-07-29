import CreateTempElement from "./createTempElement.js"
import ClickHandler from "./clickHandler.js"
import CheckNewExist from './checkNewExist.js'
import EnterHandler from "./enterHandler.js"

class ClickListener {
    static sidebar(){    
        document.querySelector('#sidebarNewBtn').addEventListener('click', () => {
            // Do nothing if the new element has already been created
            if (CheckNewExist.sidebar()) return
    
            CreateTempElement.sidebar()
            window.addEventListener('click', ClickHandler.sidebar)
            
            // Listen keyup event for enter key
            const input = document.querySelector('.sidebar-item.new .name input')
            input.onkeyup = (e) => {
                if (e.code === "Enter"){
                    EnterHandler.sidebar(input.value)
                }
            }
        })
    }

    static list(){
        document.querySelector('#addNew').addEventListener('click', () => {
            // Do nothing if the new element has already been created
            if (CheckNewExist.list()) return
    
            CreateTempElement.list()
            window.addEventListener('click', ClickHandler.list)
            
            // Listen keyup event for enter key
            const input = document.querySelector('.list-item.new .todo input')
            input.onkeyup = (e) => {
                if (e.code === "Enter"){
                    EnterHandler.list(input.value)
                }
            }
        })
    }

    static ordering(){
        const reOrder = document.querySelector('#reOrder')
        const listContent = document.querySelector('#listContent')

        reOrder.addEventListener('click', () => {
            listContent.classList.toggle('re-ordering')
        })
    }

    static listenSidebarItems(){
        const sidebarItems = document.querySelectorAll('.sidebar-item')
        sidebarItems.forEach(el => {
            el.addEventListener('click', (e) => {

                if (e.target.classList.contains('remove')) {
                    ClickHandler.removeSidebarItem(el)
                    return
                }

                ClickHandler.updateList(el)
            })
        })
    }

    static listenListItems(){
        const listItems = document.querySelectorAll('.list-item')
        listItems.forEach(el => {
            el.addEventListener('click', (e) => {
                
                if (e.target.classList.contains('remove')) {
                    ClickHandler.removeListItem(el)
                    return
                }

                ClickHandler.toggleCompleted(el)
            })
        })
    }
}

export default ClickListener