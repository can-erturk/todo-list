class Helpers {
    // Sidebar open/close helper function
    static sidebarToggle(){
        const sidebar = document.querySelector('#sidebar')
        sidebar.classList.toggle('sidebar-open')
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
        return `<div class="sidebar-item" data-id="${id}">
            <span class="icon">
                <img src="./dist/img/icons/folder.svg">
            </span>
            <span class="name">${name}</span>
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

    static listPermItem(id, name){
        return `<div class="list-item" data-id="${id}">
            <input class="check-input" type="checkbox">
            <div class="todo">${name}</div>
        </div>`
    }
}

export default Helpers