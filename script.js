let currentmode = 0;
let modeimg = document.querySelector('.modeselectimg')
function swapMode(){
    if (currentmode == 0) {
        document.documentElement.style.setProperty('--main-color', 'var(--dark-color)');
        document.documentElement.style.setProperty('--opposite-color', 'var(--light-color)');
        document.documentElement.style.setProperty('--main-color-filter', 'var(--dark-color-filter)');
        document.documentElement.style.setProperty('--opposite-color-filter', 'var(--light-color-filter)');

        modeimg.setAttribute('src', 'lightmode.svg');
        currentmode = 1;
    } else {
        document.documentElement.style.setProperty('--main-color', 'var(--light-color)');
        document.documentElement.style.setProperty('--opposite-color', 'var(--dark-color)');
        document.documentElement.style.setProperty('--main-color-filter', 'var(--light-color-filter)');
        document.documentElement.style.setProperty('--opposite-color-filter', 'var(--dark-color-filter)');

        modeimg.setAttribute('src', 'darkmode.svg');
        currentmode = 0;
    }
}