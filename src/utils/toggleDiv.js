import { useCountAwards } from "./useCountAwards";


//toggle hidden class for div by ids for filter categorues
export function ToggleDivByID(id) {

    let div = document.getElementById(id);
    console.log(div)
    if(div.classList.contains('hidden')) {
        
        div.classList.remove('hidden')
    } else {
       
        div.classList.add('hidden')
    }
    //useCountAwards()
}


//toggle hidden class for divs by names for awards
export function ToggleDivByNames(name) {
    const count = useCountAwards()

    let elements = document.getElementsByName(name);
        
    for(let element of elements) {
        console.log( element.getElementsByTagName('h4'))
        if(element.classList.contains('hidden'))  {
        
            element.classList.remove('hidden')
           // element.getElementsByTagName('h4').remove('hidden')
           for(let headers of element.getElementsByTagName('h4')) {
               headers.classList.remove('hidden')
           }
            
        } else {
           
            element.classList.add('hidden')
           // element.getElementsByTagName('h4').add('hidden')
           for(let headers of element.getElementsByTagName('h4')) {
            headers.classList.add('hidden')
        }
        }
    }


    
}