# wolfgangTask
Task received from Wolfgang digital to recreate https://www.wolfgangdigital.com/awards/. Using provided assets and React.js

Due on Friday 19th November 2021 9am

Available at https://wolfgangtask.netlify.app/ 

[![Netlify Status](https://api.netlify.com/api/v1/badges/45312d1b-7d8f-4337-953b-e84dfe1a35fe/deploy-status)](https://app.netlify.com/sites/wolfgangtask/deploys)

## How to run locally

1. clone repo
2. cd into repo directory
3. run `npm install` (Latest Node.js version required)
4. run `npm run start`, an browser page will be opened with the project

---

## How I approached the project 

This project involved a lot of reverse engineering mainly using chrome dev tool to inspect the original site.I decided to use React as it is the framework I'm most familiar then I started by analizing the page I had to copy and breaking down the different parts and components that could be tackled individually. 

What that came down to was: 

1. Navbar and banner image
2. About section with image
3. filter and awards section
4. footer


### Navbar and Banner
Naturally I started with the Navbar and banner image at the top of the page. I made sure to look at how the page loaded on smaller screens and mobile and found that the navbar collapses in to a menu icon and opens a kind of drawer at the side where the nav list is then displayed vertically. I know that Bootstrap already has a collapsable navber component and I started using it but it ended up making it more complicated than it needed to be and was overkill and I also wanted to show that I could implement it just with vanilla JS and CSS. 

What I landed on is not exactly the same as the live site as on my version the menu pops in from the side rather then moving the view to the right where the menu is, I couln't figure out how this was done or how to reverse engineer but I think my solution is also suitable as it does not take away from the mobile experience.

### About section
The about section was fairly simply just some text paragraphs and an image. Just had to make sure to use flex box and have the column-revers flex directions for the mobile breakpoints so that the image slotted ontop the the text 

### Filter and Awards section
This was the meaty part of the project where the task was to display data from the provided JSON file. I wanted to do this programatically so that you could drop any JSON of the same format into it and it would display everything correctly. 

First, to display each filter I needed to get a unique list of of every category: Awards Category, Year, Channel and Industry, did this with a simple map and filter funtion. 

`  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }

  //create arrays of unique filter categories for check boxes from data json.
  let uniqueAwards = data.map(item => item.ceremony).filter(unique)
  let years = data.map(item => item.year).filter(unique)
  // have to use flat() on channels as they are subarrays.
  let channels = data.map(item => item.channels).flat().filter(unique)
  let industries = data.map(item => item.industry).filter(unique)
`

Then in the JSX I used those arrays to map the check box and labels

`
uniqueAwards.map((item)=><div className="filter-input-div" key={item}>
                                                  <input className="filter-input" type="checkbox" id={item}/>
                                                  <label className="filter-label" htmlFor={item}>{item}</label>
                                                </div>)
`

For the Awards it became a little more involved to generate and map all of the awards correctly. This is mainly due to needing unique lists of awards and ceremonies for each year but I came to the solution of mapping once again. It stars by mapping the correct unique year Award groups for each ceremony. To do this I used the unqiue years array that I had already made for the filters. 

`
    years.map((item)=><AwardGroup year={item} data={data}/>)
`

Then in the AwardGroup component I create an array of all the awards for this current year, then I used that to get a list of the unique ceremonies so that it only creates one award ceremony title and logo image. Then the proccess repeats by using list of awards to map those components. 

I tested how robust it was by adding a test award  for different year to the awards.json file for a different and it worked as expected by generating a new year group and a unqiue ceremony group with the award in it.

The 'Viewing X of Y awards' label works by first by getting the length of the awards.json and then when the components are generated for each award they are given a class called '.hidden'. When they are shown by expanding the year group that class is removed from those elements. The number of hidden awards is compared to the total amount and that number is then used for X.

### Footer
The footer sections was also fairly simple just centered text and a styled button.

---

I honestly really enjoyed this task and couldn't actually stop working on it for too long before I wanted to get going again and I really appreciate the opportunity.




