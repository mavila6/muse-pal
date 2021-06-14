let lightMode = localStorage.getItem('darkmode')
const lightModeToggle = document.querySelector('#lightTheme')

const enableLightMode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'enabled')
    console.log('works')
}

const disableDarkMode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
    console.log('works')
}

lightModeToggle.addEventListener('click', () => {
    if(lightMode !== 'enabled') {
        enableLightMode();
    }
});