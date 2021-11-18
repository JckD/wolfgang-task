
export function openDrawer() {

    let menu = document.querySelector('.menu');
    let drawer = document.querySelector('.drawer')


 
    menu.className += ' open';
    drawer.className += ' open';
    console.log('test')
    


    // window.addEventListener('click', function(event){
    //     if(event.target === drawer) {
    //         menu.className = 'menu';
    //         drawer.className = 'drawer';
    //     }
    // })
}
