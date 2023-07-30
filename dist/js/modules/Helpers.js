class Helpers {
    // Sidebar open/close helper function
    static sidebarToggle(){
        const sidebar = document.querySelector('#sidebar')
        sidebar.classList.toggle('sidebar-open')
    }

    static escapeSelfXSS(string){
        var tagsToReplace = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;'
        }
        return string.replace(/[&<>]/g, (tag) => {
            return tagsToReplace[tag] || tag
        })
    }
    
    static sidebarTempItem(){
        return `<div class="sidebar-item new">
            <span class="icon">
                <img src="./dist/img/icons/folder.svg">
            </span>
            <span class="name">
                <input type="text">
            </span>
            <span class="save-icon">
                <img src="./dist/img/icons/disk.svg">
            </span>
        </div>`
    }

    static sidebarPermItem(id, name){
        const newName = this.escapeSelfXSS(name)

        return `<div class="sidebar-item" data-id="${id}">
            <span class="icon">
                <img src="./dist/img/icons/folder.svg">
            </span>
            <span class="name">${newName}</span>
            <span class="remove remove-span" title="Remove list">
                <img src="./dist/img/icons/trash-xmark.svg" class="remove"/>
            </span>
        </div>`
    }

    static listTempItem(){
        return `<div class="list-item new">
            <input class="check-input" type="checkbox">
            <div class="todo">
                <input type="text" class="todo-input" placeholder="Enter a to-do...">
            </div>
        </div>`
    }

    static listPermItem(id, name, completed){
        const newName = this.escapeSelfXSS(name)
        const completedClass = completed ? 'completed' : ''

        return `<div class="list-item ${completedClass}" data-id="${id}" draggable="true">
            <input class="check-input" type="checkbox">
            <div class="todo">${newName}</div>
            <span class="remove remove-span" title="Remove task">
                <img src="./dist/img/icons/trash-xmark.svg" class="remove"/>
            </span>
            <span class="re-order re-order-span">
                <img src="./dist/img/icons/grip-dots.svg" class="re-order"/>
            </span>
        </div>`
    }

    static listNotFound(){
        return `<div class="list-not-found">
            <span class="info">No List Found...</span>
            <span class="info">Click the "create new" button <br> in the sidebar to create a new one.</span>
        </div>`
    }
}

export default Helpers