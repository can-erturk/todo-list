import Helpers from "./Helpers.js"

class CreateTempElement{
    // Add html element temporarily
    static sidebar(){
        const content = document.querySelector('#sidebarContent')

        const html = content.innerHTML
        const newHtml = Helpers.sidebarTempItem()
        content.innerHTML = newHtml + html

        document.querySelector('.sidebar-item.new .name input').focus()
    }
}

export default CreateTempElement