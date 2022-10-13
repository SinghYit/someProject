const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active')
})

let openMenu = false;
toggleButton.addEventListener('click', ()=> {
    if(!openMenu) { 
        toggleButton.classList.add('open');
        openMenu = true;
    }
    else {
        toggleButton.classList.remove('open');
        openMenu = false
    }
})