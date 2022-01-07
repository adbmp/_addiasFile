window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    document.querySelector('body').style.left = 100%
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
    document.querySelector('body').style.left = 0
})