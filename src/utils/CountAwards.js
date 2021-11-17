 const CountAwards = () => {
 
    let awards = document.querySelectorAll('.award')
    let hiddenAwards = document.querySelectorAll('.award.hidden')

    let shownAwards = awards.length - hiddenAwards.length
  
    console.log(shownAwards)
    document.getElementById('shownAwards').innerHTML = 'Viewing ' + shownAwards + ' of ' + awards.length + '  awards'
}

export default CountAwards;

