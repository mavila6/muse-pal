let clicked = null

const meatballMenu = document.querySelector('#meatball-container')
const meatballModal = document.querySelector('#meatball-modal')
const overlay = document.querySelector('#overlay')
const darkButton = document.querySelector('#darkTheme')
const lightButton = document.querySelector('#lightTheme')

meatballMenu.addEventListener('click', openMeatballMenu)

function openMeatballMenu(){
    meatballModal.classList.remove('hide');
    overlay.classList.remove('hide');
}

function closeMeatballMenu(){
    meatballModal.classList.add('hide');
    overlay.classList.add('hide');
}

window.addEventListener('click', function(e){
    if(!meatballMenu.contains(e.target)){
        closeMeatballMenu();
        
    } 
})

let lightMode = localStorage.getItem('lightmode')
const lightModeButton = document.querySelector('#lightTheme')

// variables to select html elements for color manipulation
    var sidebar = document.querySelector('#sidebar')
    var lightlogo = document.querySelector('#lightmodelogo')
    var darklogo = document.querySelector('#darkmodelogo')
    var muse = document.querySelector('#muse')
    var meatballdark = document.querySelector('#meatball-btn-dark')
    var meatballlight = document.querySelector('#meatball-btn-light')

const enableLightMode = () => {
    meatballdark.classList.remove('hide')
    meatballlight.classList.add('hide')
    muse.classList.add('muselight')
    lightlogo.classList.remove('hide')
    darklogo.classList.add('hide')
    sidebar.classList.add('lightmode-sidebar')
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'enabled')
}

const disableLightMode = () => {
    meatballdark.classList.add('hide')
    meatballlight.classList.remove('hide')
    muse.classList.remove('muselight')
    lightlogo.classList.add('hide')
    darklogo.classList.remove('hide')
    sidebar.classList.remove('lightmode-sidebar')
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}

if(lightMode === 'enabled'){
    enableLightMode();
}

lightModeButton.addEventListener('click', () => {
    lightMode = localStorage.getItem('lightmode')
    if(lightMode !== 'enabled') {
        enableLightMode();
    } else {
        disableLightMode();
    }
});