import CreatePermElement from "./createPermElement.js"

class EnterHandler{
    // Listen "ENTER" key event
    static sidebar(){
        const value = document.querySelector('.new .name input').value
        if (value.length > 0) {
            CreatePermElement.sidebar(value)
        }
    }
}

export default EnterHandler