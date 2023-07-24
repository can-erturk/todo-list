import CreatePermElement from "./createPermElement.js"

class EnterHandler{
    // Listen "ENTER" key event
    static sidebar(value){
        if (value.length > 0) {
            CreatePermElement.sidebar(value)
        }
    }
}

export default EnterHandler