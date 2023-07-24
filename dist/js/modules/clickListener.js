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
}

export default ClickListener