// Sidebar open/close
document.querySelectorAll('.sidebar-toggle').forEach(el => {
    el.addEventListener('click', () => {
        const sidebar = document.querySelector('#sidebar')
        sidebar.classList.toggle('sidebar-open')
    })
})