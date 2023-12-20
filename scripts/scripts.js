var birthday = 1999
var date = new Date().getFullYear()
var yearSpan = document.getElementById('currentYear')
var dynamicAge = document.querySelector('span#dynamicAge')
var atualAge = date - birthday
var miniProfileInfoImage = document.getElementById('miniProfileInfoImage')
var miniProfileInfoName = document.getElementById('miniProfileInfoName')
var body = this.document.getElementsByTagName('BODY')[0]
yearSpan.innerHTML = date

dynamicAge.innerHTML = atualAge

window.addEventListener('scroll', function(){
    const scrollDistance = window.scrollY
    if (scrollDistance > 770){
        miniProfileInfoImage.style.display = 'block'
        miniProfileInfoName.style.display = 'block'
    } else {
        miniProfileInfoImage.style.display = 'none'
        miniProfileInfoName.style.display = 'none'
    }
})


// functions for the navbar menu
function clickMenu() {
    if (window.innerWidth < 990){
        var items = document.getElementById('items')
    
        if (items.style.display == 'block') {
            items.style.display = 'none'
        } else {
            items.style.display = 'block'
        }
    }
}

// function for the body resizing
function sizeChange() {
    if (window.innerWidth >= 992) {
        items.style.display = 'block'
    } else {
        items.style.display = 'none'
    }
}    