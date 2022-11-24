const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
toggleButton.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active');
})

//Adding open as a class, to make navbar burger icon to an X
let openMenu = false;
toggleButton.addEventListener('click', ()=> {
    if(!openMenu) { 
        toggleButton.classList.add('open');
        openMenu = true;
    }
    else {
        toggleButton.classList.remove('open');
        openMenu = false;
    }
})

//FAQ, making answer visible if faq contains class active
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})




