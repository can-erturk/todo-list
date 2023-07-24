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
}

export default Helpers