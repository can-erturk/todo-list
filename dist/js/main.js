document.querySelectorAll('[data-link]').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('#content .page.active').classList.remove('active')
        
        const link = el.getAttribute('data-link')
        document.querySelector(`.page[data-page=${link}]`).classList.add('active')

        const name = el.getAttribute('data-name')
        document.querySelector('.page-header .title').innerText = name;
    })
})

document.querySelectorAll('.sidebar-toggle').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('#sidebar').classList.toggle('sidebar-open')
    })
})