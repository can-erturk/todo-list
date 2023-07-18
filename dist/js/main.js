document.querySelectorAll('[data-link]').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelector('#content .page.active').classList.remove('active')
        
        const link = el.getAttribute('data-link')
        document.querySelector(`.page[data-page=${link}]`).classList.add('active')
    })
})