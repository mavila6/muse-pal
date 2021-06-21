//Used arrow notation to perform function called navslide to reveal navbar upon a click
const navSlide = () => {
    //variables linking up to Ids on the html 
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('#sidebar');
    const darkMode = document.querySelector('#meatball-container');
    const mobileNavBtn1 = document.querySelector('#mobileNavBtn1');
    const mobileNavBtn2 = document.querySelector('#mobileNavBtn2');
    const mobileNavBtn3 = document.querySelector('#mobileNavBtn3');

//added event listener to element with burger id to open navbar on a click
    burger.addEventListener('click', () => {
        nav.classList.toggle('sidebar-active')
        darkMode.classList.add('hide')
        mobileNavBtn1.classList.toggle('hide')
        mobileNavBtn2.classList.toggle('hide')
        mobileNavBtn3.classList.toggle('hide')
    })
}
//called the navslide function
navSlide();