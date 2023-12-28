import projects from "./projectList.js";

var birthday = 1999
var date = new Date().getFullYear()
var yearSpan = document.getElementById('currentYear')
var dynamicAge = document.querySelector('span#dynamicAge')
var atualAge = date - birthday
var miniProfileInfoImage = document.getElementById('miniProfileInfoImage')
var miniProfileInfoName = document.getElementById('miniProfileInfoName')
var errorMessage = document.querySelector('span#errorMessage')
var errorMessageContainer = document.querySelector('div.errorMessageContainer')
var goTopBtn = document.querySelector('button#goTopBtn')
yearSpan.innerHTML = date
dynamicAge.innerHTML = atualAge

// projects list handler
var projectContainer = document.querySelector('div.projects-container')
projects.forEach(function(project){

    // create the main div for the project
    var projectPreview = document.createElement('div')
    projectPreview.className = 'project-preview'

    // create the img element for the project image
    var projectImage = document.createElement('img')
    projectImage.id = 'project-preview-img'
    projectImage.className = 'project-preview-img'
    projectImage.src = project.imgLink
    projectImage.alt = 'Project image'

    // create the project title
    var projectTitle = document.createElement('h2')
    projectTitle.id = 'project-title'
    projectTitle.textContent = project.title

    // create the project buttons holder
    var projectButtonsHolder = document.createElement('section')
    projectButtonsHolder.className = 'project-button-holder'

    // create the project github button
    var projectGithubButton = document.createElement('a')
    projectGithubButton.id = 'projectBtn' + project.id
    projectGithubButton.className = 'button projectLink'
    projectGithubButton.textContent = 'Github'
    projectGithubButton.href = project.linkGithub
    projectGithubButton.target = '_blank'

    // create the project online button
    var projectOnlineButton = document.createElement('a')
    projectOnlineButton.id = 'projectBtn' + project.id
    projectOnlineButton.className = 'button projectLink'
    projectOnlineButton.textContent = 'Online'
    projectOnlineButton.href = project.linkOnline
    projectOnlineButton.target = '_blank'

    // insert each element into the respective parent element
    projectContainer.appendChild(projectPreview)
    projectPreview.appendChild(projectImage)
    projectPreview.appendChild(projectTitle)
    projectPreview.appendChild(projectButtonsHolder)
    projectButtonsHolder.appendChild(projectGithubButton)
    projectButtonsHolder.appendChild(projectOnlineButton)
})

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

    if (scrollDistance > 770){
        goTopBtn.style.display = 'inline-block'
        // go top btn
        goTopBtn.addEventListener('click', function(){
            document.documentElement.scrollTop = 0
        })
    } else {
        goTopBtn.style.display = 'none'
    }
})

// mini profile trigger dropdown menu
var miniProfile = document.querySelector('section#miniProfile')
miniProfile.addEventListener('click', function () {
    if (window.innerWidth < 990){
        var items = document.getElementById('items')
    
        if (items.style.display == 'block') {
            items.style.display = 'none'
        } else {
            items.style.display = 'block'
        }
    }

})

// when the window change sizes!
window.addEventListener('resize', function(){
    console.log('Screen Size Changed:' + window.innerWidth)
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