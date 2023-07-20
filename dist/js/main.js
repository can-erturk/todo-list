// Element selector function
Object.prototype.$ = function(target, node = document) {
    const query = node.querySelectorAll(target)
    if (query.length !== 0) {
        return query.length > 1 ? query : query[0]
    }else {
        return []
    }
}

// Event listener function
Object.prototype.on = function(e, handler) {
    this.addEventListener(e, () => {
        handler()
    })
}

// Sidebar open/close
$('.sidebar-toggle').forEach(el => {
    el.on('click', () => {
        $('#sidebar').classList.toggle('sidebar-open')
    })
})