import CountAwards from "./CountAwards";


//toggle hidden class for div by ids for filter categorues
export function ToggleDivByID(id) {

    let div = document.getElementById(id);

    if(div.classList.contains('hidden')) {
        
        div.classList.remove('hidden')

    } else {
       
        div.classList.add('hidden')
 
    }

    CountAwards()
}


//toggle hidden class for divs by names for awards
export function ToggleDivByNames(name) {
   // const count = useCountAwards()

    let elements = document.getElementsByName(name);
        
    for(let element of elements) {
        console.log( element.getElementsByTagName('h4'))
        if(element.classList.contains('hidden'))  {
        
            element.classList.remove('hidden')

           for(let headers of element.getElementsByTagName('h4')) {
               headers.classList.remove('hidden')
           }
            
        } else {
           
            element.classList.add('hidden')
           for(let headers of element.getElementsByTagName('h4')) {
                headers.classList.add('hidden')
            }
        }
    }

    CountAwards()
}