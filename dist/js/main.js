Object.prototype.$ = function(target, node = document) {
    const query = node.querySelectorAll(target)
    if (query.length !== 0) {
        return query.length > 1 ? query : query[0]
    }else {
        return []
    }
}

Object.prototype.on = function(e, handler) {
    this.addEventListener(e, () => {
        handler()
    })
}

$('[data-link]').forEach(el => {
    el.on('click', () => {
        $('#content .page.active').classList.remove('active')
        
        const link = el.getAttribute('data-link')
        const name = el.getAttribute('data-name')
        
        $(`.page[data-page=${link}]`).classList.add('active')
        $('.page-header .title').innerText = name;
    })
})

$('.sidebar-toggle').forEach(el => {
    el.on('click', () => {
        $('#sidebar').classList.toggle('sidebar-open')
    })
})