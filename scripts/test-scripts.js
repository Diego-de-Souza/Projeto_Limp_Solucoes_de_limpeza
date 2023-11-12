const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault()

    const nav = document.getElementById('nav-menu')
    const hamburger = document.getElementById('hamburger')
    nav.classList.toggle('active')
    hamburger.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)