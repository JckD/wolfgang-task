import wolfgangLogo from './images/wolfgang_logo.svg'
import contentImage from './images/content_image.jpg'
import AwardGroup from './components/awardGroup';
import React,{useState,useEffect} from 'react';
import { ToggleDivByID } from './utils/toggleDiv';
import { closeDrawer, openDrawer } from './utils/drawer';

function App() {

  document.title = 'Awards | Wolfgang Digital'
  const [data, setData]=useState([]);
  
  const getData=()=>{
    fetch('./awards.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(awardsJson) {
        console.log(awardsJson);
        setData(awardsJson)
      });
  }


  useEffect(()=>{
    getData()
  },[])


  const unique = (value, index, self) => {
    return self.indexOf(value) === index
  }

  //create arrays of unique filter categories for check boxes from data json.
  let uniqueAwards = data.map(item => item.ceremony).filter(unique)
  let years = data.map(item => item.year).filter(unique)
  // have to use flat() on channels as they are subarrays.
  let channels = data.map(item => item.channels).flat().filter(unique)
  let industries = data.map(item => item.industry).filter(unique)

  return (
    <>
      <header>    
          <div className="nav">

            <a href="https://www.wolfgangdigital.com/">
              <img className="logo" alt="wolfgang digital logo" src={wolfgangLogo}/>
            </a>
              <ul className="menu">
              <li className="menu-title close" onClick={() => closeDrawer()}><span>Main Menu</span></li>
                <li>
                  <a className="menu-a" href="https://www.wolfgangdigital.com/our-work/">our work</a>
                </li>
                <li>
                  <a className="menu-a" href="https://www.wolfgangdigital.com/about-us/">about us</a>
                </li>
                <li>
                  <a className="menu-a" href="https://www.wolfgangdigital.com/careers/">careers</a>
                </li>
                <li>
                  <a className="menu-a" href="https://www.wolfgangdigital.com/blog/">blog</a>
                </li>
                <li>
                  <a className="menu-a" href="https://www.wolfgangdigital.com/awards/">awards</a>
                </li>
                <li>
                  <a className="menu-a" href="https://www.wolfgangdigital.com/contact/">contact</a>
                </li>
                <li className="close"><a className="sub-menu" href="https://www.wolfgangdigital.com/">Home</a></li>
                <li className="close"><a className="sub-menu" href="https://www.wolfgangdigital.com/privacy-policy">Privacy</a></li>
              
              </ul>
              <button className="menu-btn" onClick={() => openDrawer()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </button>
              <div className="overlay" onClick={() => closeDrawer()}></div>
            
          </div>
           
      </header>
      <body>
          <div className="banner">
            <h1>The Awards Wall</h1>
            {/* <div className="white-line">test</div> */}
          </div>
          <div className="about">
            <div className="text-container">
              <p>
                Back in 2011, when Wolfgang was only two people we submitted some case studies to the Digital Media Awards, optimistically entering the "Best Agency" category. At that time nobody knew who we were and our clients were not of the "catwalk" variety. So we certainly didn't expect to win, we optimistically hoped to get one of those cool "finalist" badges for our email signatures. Lo and behold, the judges loved our case studies, scored them strongly and we took the Gold Medal* home.</p>
              <p>
                This success imbued us with a wolfish hunger to execute outstanding campaigns and win further domestic & international awards.
              </p>
            </div>
            <div className="img-container">
              <img src={contentImage} alt="wolfgang awards ceremony" height="260" width="460"/>
            </div>
          </div>
          <div className="awards-section">
            <div className="award-filters">
                <div className="filter-title">
                  <label>FILTER</label>
                  <button >CLEAR FILTERS</button>
                </div>
                <div className="filter-categories">
                  <div className="filter-category">
                    <button className="filter-button" onClick={() => ToggleDivByID('awardsCategory')}>
                      <span>By Awards Category</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                      </svg>
                    </button>
                    <div className="filter-list hidden" id="awardsCategory">
                      {
                        /* generate filter list from unique awards list */
                        uniqueAwards.map((item)=><div className="filter-input-div" key={item}>
                                                  <input className="filter-input" type="checkbox" id={item}/>
                                                  <label className="filter-label" htmlFor={item}>{item}</label>
                                                </div>)
                      }
                    </div>
                  </div>
                  <div className="filter-category">
                    <button className="filter-button" onClick={() => ToggleDivByID('years')}>
                      <span>By Year</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                      </svg>
                    </button>
                    <div className="filter-list hidden" id="years">
                      {
                        /* generate filter list from unique awards list */
                        years.map((item)=><div className="filter-input-div" key={item}>
                                                  <input className="filter-input" type="checkbox" id={item + 1}/>
                                                  <label className="filter-label" htmlFor={item}>{item}</label>
                                                </div>)
                      }
                    </div>
                  </div>
                    <div className="filter-category">
                      <button className="filter-button" onClick={() => ToggleDivByID('channels')}>
                        <span>By Channel</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                        </svg>
                      </button>
                      <div className="filter-list hidden" id="channels">
                      {
                        /* generate filter list from unique awards list */
                        channels.map((item)=><div className="filter-input-div" key={item}>
                                                  <input className="filter-input" type="checkbox" id={item}/>
                                                  <label className="filter-label" htmlFor={item}>{item}</label>
                                                </div>)
                      }
                    </div>
                    </div>
                    <div className="filter-category"> 
                      <button className="filter-button" onClick={() => ToggleDivByID('industry')}>
                        <span>By Industry</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                        </svg>
                      </button>
                      <div className="filter-list hidden" id="industry">
                      {
                        /* generate filter list from unique awards list */
                        industries.map((item)=><div className="filter-input-div" key={item}>
                                                  <input className="filter-input" type="checkbox" id={item}/>
                                                  <label className="filter-label" htmlFor={item}>{item}</label>
                                                </div>)
                      }
                    </div>
                    </div>
                    
                  
                </div>
            </div>
            <div className="awards-list">
              <p id="shownAwards">Viewing 0 of {data.length} awards</p>

              {
                years.map((item)=><AwardGroup year={item} data={data}/>)
              }
        
            </div>

          </div>
      </body>
      <footer className="footer">
        <h2>Talk to us about your next award winning campaign</h2>
        <a href="https://www.wolfgangdigital.com/contact/">Get in Touch</a>
      </footer>
    </>
  );
}

export default App;
