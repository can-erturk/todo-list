// Sidebar open/close helper function
const sidebarToggle = () => {
    const sidebar = document.querySelector('#sidebar')
    sidebar.classList.toggle('sidebar-open')
}

// Sidebar open/close
document.querySelectorAll('.sidebar-toggle').forEach(el => {
    el.addEventListener('click', sidebarToggle)
})

const sidebarTempItem = () => {
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

const sidebarPermItem = (id, name) => {
    return `<div class="sidebar-item" data-id="${id}">
        <span class="icon">
            <img src="./dist/img/icons/folder.svg">
        </span>
        <span class="name">${name}</span>
    </div>`
}

const sidebar = () => {
    const newBtn = document.querySelector('#sidebarNewBtn')
    const content = document.querySelector('#sidebarContent')

    // Save new list to localStorage
    const setData = (id, name) => {
        let data = localStorage.getItem('sidebarData')
        let newData = {
            "name": name
        }
        
        let jsonData = data ? JSON.parse(data) : {}
        jsonData[id] = newData

        localStorage.setItem('sidebarData', JSON.stringify(jsonData))
    }

    // Add html element permanently
    const createPermElement = (itemName) => {
        content.removeChild(document.querySelector('.sidebar-item.new'))
        const id = new Date().valueOf()

        const html = content.innerHTML
        const newHtml = sidebarPermItem(id, itemName)
        content.innerHTML = newHtml + html

        setData(id, itemName)
        window.removeEventListener('click', clickHandler)
    }

    // Add html element temporarily
    const createTempElement = () => {
        const html = content.innerHTML
        const newHtml = sidebarTempItem()
        content.innerHTML = newHtml + html

        document.querySelector('.sidebar-item.new .name input').focus()
    }

    // Remove temporary html element from DOM
    const removeElement = () => {
        content.removeChild(content.querySelector('.sidebar-item.new'))
        window.removeEventListener('click', clickHandler)
    }

    /*
        Listen click events.
        Works after creating a new item.
    */
    const clickHandler = (e) => {    
        const value = document.querySelector('.sidebar-item.new .name input').value

        const targetTag = e.target.tagName
        const targetClass = e.target.className

        const matches = targetTag.match(/BUTTON|INPUT/)
        const includes = targetClass.includes('sidebar-toggle')

        // If the target is not "button", "input", ".sidebar-toggle"
        if (!matches && !includes) {
            if (value.length > 0) {
                createPermElement(value)
            }else{
                removeElement()
            }
        }
        
        // Delete temporary item if sidebar is closed
        if (includes) {
            removeElement()
        }
    }

    // Listen "ENTER" key event
    const enterHandler = () => {
        const value = document.querySelector('.new .name input').value
        if (value.length > 0) {
            createPermElement(value)
        }
    }

    // Check if new element has been created before
    const checkNewExist = () => {
        const newItem = document.querySelector('.sidebar-item.new')
        
        if (newItem) {
            const newItemInput = newItem.querySelector('.name input')
            newItemInput.focus()
            window.addEventListener('click', clickHandler)
            return true
        }else{
            return false
        }
    }

    newBtn.addEventListener('click', () => {
        // Do nothing if the new element has already been created
        if (checkNewExist()) return

        createTempElement()
        window.addEventListener('click', clickHandler)
        
        // Listen keyup event for enter key
        const input = document.querySelector('.sidebar-item.new .name input')
        input.onkeyup = (e) => {
            if (e.code === "Enter") enterHandler()
        }
    })

    const sidebarData = JSON.parse(localStorage.getItem('sidebarData'))
    if (!sidebarData) return 

    for (const [key, val] of Object.entries(sidebarData)) {
        const id = key
        const name = val.name

        const html = content.innerHTML
        const newHtml = sidebarPermItem(id, name)

        content.innerHTML = newHtml + html
    }
}

window.addEventListener('DOMContentLoaded', () => {
    sidebar()
})

document.querySelectorAll('.list-content .list-item').forEach(el => {
    el.addEventListener('click', function(params) {
        el.classList.toggle('completed')
    })
});