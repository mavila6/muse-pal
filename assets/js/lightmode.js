//variables linking to ids for elements on the page to be used for lightmode functions
let clicked = null;
const meatballMenu = document.querySelector('#meatball-container');
const meatballModal = document.querySelector('#meatball-modal');
const overlay = document.querySelector('#overlay');
const darkButton = document.querySelector('#darkTheme');
const lightButton = document.querySelector('#lightTheme');
//added event listener to meatballmenu to listen for clicks and run function
meatballMenu.addEventListener('click', openMeatballMenu);
//function to open the modal
function openMeatballMenu(){
    meatballModal.classList.remove('hide');
    overlay.classList.remove('hide');
}
//funtion to close the modal
function closeMeatballMenu(){
    meatballModal.classList.add('hide');
    overlay.classList.add('hide');
}
//added event listener to run the close menu function upon click 
window.addEventListener('click', function(e){
    if(!meatballMenu.contains(e.target)){
        closeMeatballMenu();
        
    } 
})

let lightMode = localStorage.getItem('lightmode');
const lightModeButton = document.querySelector('#lightTheme');

// variables to select html elements for color manipulation
    var sidebar = document.querySelector('#sidebar');
    var lightlogo = document.querySelector('#lightmodelogosvg');
    var darklogo = document.querySelector('#darkmodelogosvg');
    var muse = document.querySelector('#muse');
    var meatballdark = document.querySelector('#meatball-btn-dark');
    var meatballlight = document.querySelector('#meatball-btn-light');
//variable that performs function to change classes in html to correspond to css styles
const enableLightMode = () => {
    meatballdark.classList.remove('hide')
    meatballlight.classList.add('hide')
    lightlogo.classList.remove('hide')
    darklogo.classList.add('hide')
    sidebar.classList.add('lightmode-sidebar')
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'enabled')
}
//variable that performs function to change the classes in html to correspond to css styles
const disableLightMode = () => {
    meatballdark.classList.add('hide')
    meatballlight.classList.remove('hide')
    lightlogo.classList.add('hide')
    darklogo.classList.remove('hide')
    sidebar.classList.remove('lightmode-sidebar')
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}
//adds an event listener to the lightmodebutton to toggle light and dark mode by using an if statement to call their respective functions
lightModeButton.addEventListener('click', () => {
    lightMode = localStorage.getItem('lightmode')
    if(lightMode !== 'enabled') {
        enableLightMode();
    } else {
        disableLightMode();
    }
});