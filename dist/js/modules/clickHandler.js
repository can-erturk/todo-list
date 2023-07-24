import CreatePermElement from "./createPermElement.js"
import RemoveElement from "./removeElement.js"

class ClickHandler{
    // Listen click events.
    // Works after creating a new item.
    static sidebar(e){
        const value = document.querySelector('.sidebar-item.new .name input').value

        const targetTag = e.target.tagName
        const targetClass = e.target.className

        const matches = targetTag.match(/BUTTON|INPUT/)
        const includes = targetClass.includes('sidebar-toggle')

        // If the target is not "button", "input", ".sidebar-toggle"
        if (!matches && !includes) {
            if (value.length > 0) {
                CreatePermElement.sidebar(value)
            }else{
                RemoveElement.sidebar()
            }
        }
        
        // Delete temporary item if sidebar is closed
        if (includes) {
            RemoveElement.sidebar()
        }
    }
}

export default ClickHandler