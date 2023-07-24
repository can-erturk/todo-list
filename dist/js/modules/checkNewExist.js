class CheckNewExist {
    // Check if new element has been created before
    static sidebar(){
        const newItem = document.querySelector('.sidebar-item.new')
        
        if (newItem) {
            newItem.querySelector('.name input').focus()
            return true
        }else{
            return false
        }
    }
}

export default CheckNewExist