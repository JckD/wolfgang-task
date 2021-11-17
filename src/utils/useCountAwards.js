import { useState, useEffect } from 'react';


 export function useCountAwards() {
    const [awardsCount, setAwardsCount]=useState(0)


    let awards = document.querySelectorAll('.award')
    let hiddenAwards = document.querySelectorAll('.award.hidden')

    let shownAwards = awards.length - hiddenAwards.length
    useEffect(() =>{
        setAwardsCount(shownAwards)
    })
  
    console.log(awardsCount)
    return awardsCount
}

