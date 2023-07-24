import ClickHandler from "./clickHandler.js"

class CheckNewExist{
    // Check if new element has been created before
    static sidebar(){
        const newItem = document.querySelector('.sidebar-item.new')
        
        if (newItem) {
            const newItemInput = newItem.querySelector('.name input')
            newItemInput.focus()
            return true
        }else{
            return false
        }
    }
}

export default CheckNewExist