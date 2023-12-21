var birthday = 1999
var date = new Date().getFullYear()
var yearSpan = document.getElementById('currentYear')
var dynamicAge = document.querySelector('span#dynamicAge')
var atualAge = date - birthday
var miniProfileInfoImage = document.getElementById('miniProfileInfoImage')
var miniProfileInfoName = document.getElementById('miniProfileInfoName')
var body = this.document.getElementsByTagName('BODY')[0]
var errorMessage = document.querySelector('span#errorMessage')
var errorMessageContainer = document.querySelector('div.errorMessageContainer')
yearSpan.innerHTML = date

dynamicAge.innerHTML = atualAge

// show the miniprofile if there is a scroll
window.addEventListener('scroll', function(){
    const scrollDistance = window.scrollY
    if (scrollDistance > 770 && this.window.innerWidth > 420){
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

// when the window change sizes!
window.addEventListener('resize', function(){
    console.log('Screen Size:' + window.innerWidth)
    if (window.innerWidth >= 992) {
        items.style.display = 'block'
    } else {
        items.style.display = 'none'
    }
    
    if (window.innerWidth < 300){
        console.error('Screen reached the limite size!')
        errorMessageContainer.style.display = 'block'
        errorMessage.textContent = 'Screen too small !'
    } else {
        errorMessageContainer.style.display = 'none'
    }
})