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
var goTopBtn = document.querySelector('button#goTopBtn')
yearSpan.innerHTML = date
dynamicAge.innerHTML = atualAge

var projectButtons = document.querySelectorAll('.showProject')

projectButtons.forEach(function (button) {
    button.addEventListener('click', function() {
        var projectContainer = document.getElementById('project-container');
        var projectImage = document.getElementById('project-image');
        var projectTitle = document.getElementById('project-title');
        var projectDisc = document.getElementById('project-disc');
        var projectTechs = document.getElementById('project-techs');
        var closeButton = document.getElementById('btn-project-close');

        projectContainer.style.display = 'flex'

        closeButton.addEventListener('click', function(){
            projectContainer.style.display = 'none'
        })

        var projectId = button.id

        switch(projectId) {
            case 'projectOne':
                projectTitle.textContent = 'Project Android Website'
                projectImage.src = 'assets/images/projects/gifs/project-android.gif';
                projectDisc.textContent = 'Website created as part of an youtube online course.';
                projectTechs.textContent = 'HTML5, CSS3';
                break;

            case 'projectTwo':
                projectTitle.textContent = 'Project Login Page';
                projectImage.src = 'assets/images/projects/prints/project-login-page.png';
                projectDisc.textContent = 'Website created as part of an youtube online course.';
                projectTechs.textContent = 'HTML5, CSS3';
                break;

            default:
                projectTitle.textContent = 'Error';
                projectImage.src = 'https://media4.giphy.com/media/K6VhXtbgCXqQU/giphy.gif?cid=ecf05e47ozqip4aix508tp7k77snyuqtvwtq32zbast8rzh4&ep=v1_gifs_search&rid=giphy.gif&ct=g';
                projectDisc.textContent = 'Project not found!';
                projectTechs.textContent = '';
                break;
        }

    })
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