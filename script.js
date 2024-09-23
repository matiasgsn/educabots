let currentmode = 0;
let modeimg = document.querySelector('.modeselectimg')
function swapMode(){
    if (currentmode == 0) {
        document.documentElement.style.setProperty('--main-color', 'var(--dark-color)');
        modeimg.setAttribute('src', 'lightmode.svg');
        currentmode = 1;
    } else {
        document.documentElement.style.setProperty('--main-color', 'var(--light-color)');
        modeimg.setAttribute('src', 'darkmode.svg');
        currentmode = 0;
    }
}