let currentmode = 0;
let modeimg = document.querySelector('.modeselectimg')
function swapMode(){
    if (currentmode == 0) {
        document.documentElement.style.setProperty('--main-color', 'var(--dark-color)');
        document.documentElement.style.setProperty('--opposite-color', 'var(--light-color)');
        document.documentElement.style.setProperty('--main-color-filter', 'var(--dark-color-filter)');
        document.documentElement.style.setProperty('--opposite-color-filter', 'var(--light-color-filter)');

        document.documentElement.style.setProperty('--logo-color-filter', 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(264deg) brightness(109%) contrast(109%)')

        modeimg.setAttribute('src', 'images/lightmode.svg');
        currentmode = 1;
    } else {
        document.documentElement.style.setProperty('--main-color', 'var(--light-color)');
        document.documentElement.style.setProperty('--opposite-color', 'var(--dark-color)');
        document.documentElement.style.setProperty('--main-color-filter', 'var(--light-color-filter)');
        document.documentElement.style.setProperty('--opposite-color-filter', 'var(--dark-color-filter)');

        document.documentElement.style.setProperty('--logo-color-filter', 'none')

        modeimg.setAttribute('src', 'images/darkmode.svg');
        currentmode = 0;
    }
}