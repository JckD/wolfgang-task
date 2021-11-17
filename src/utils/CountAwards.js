
// function to count the number of shown awards 
//by getting all ements with classes .award and hidden - number of elemetns with class .award
const CountAwards = () => {
    let awards = document.querySelectorAll('.award')
    let hiddenAwards = document.querySelectorAll('.award.hidden')
    let shownAwards = awards.length - hiddenAwards.length
    document.getElementById('shownAwards').innerHTML = 'Viewing ' + shownAwards + ' of ' + awards.length + '  awards'
}

export default CountAwards;

