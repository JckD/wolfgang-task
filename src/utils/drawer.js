
export function openDrawer() {

    let menu = document.querySelector('.menu');
    let overlay = document.querySelector('.overlay');

    menu.className += ' open';
    overlay.className += ' open';
}

export function closeDrawer() {

    let menu = document.querySelector('.menu');
    let overlay = document.querySelector('.overlay');

    menu.className = ' menu';
    overlay.className = 'overlay';
}
