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

    static list(){
        const content = document.querySelector('#listContent')

        const html = content.innerHTML
        const newHtml = Helpers.listTempItem()
        
        content.innerHTML = html + newHtml
        content.scrollTop = content.scrollHeight;

        document.querySelector('.list-item.new .todo input').focus()
    }
}

export default CreateTempElement