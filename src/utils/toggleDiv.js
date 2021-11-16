

export function toggleDiv(id) {
    let div = document.getElementById(id);

    if(div.classList.contains('hidden')) {
        
        div.classList.remove('hidden')
    } else {
       
        div.classList.add('hidden')
    }
}