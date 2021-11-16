import wolfgangLogo from './images/wolfgang_logo.svg'
import contentImage from './images/content_image.jpg'
import AwardGroup from './components/awardGroup';
import React,{useState,useEffect} from 'react';


const AwardCategory = props => {
  <div className="filter-category">

  </div>
}

function App() {
  const [data,setData]=useState([]);

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
      });
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="container">
      <header>
       
          
          <div className="nav">
            <a href="https://www.wolfgangdigital.com/">
            <img className="logo" alt="wolfgang digital logo" src={wolfgangLogo}/>

            </a>
            <ul>
              <li>
                <a href="https://www.wolfgangdigital.com/our-work/">our work</a>
              </li>
              <li>
                <a href="https://www.wolfgangdigital.com/about-us/">about us</a>
              </li>
              <li>
                <a href="https://www.wolfgangdigital.com/careers/">careers</a>
              </li>
              <li>
                <a href="https://www.wolfgangdigital.com/blog/">blog</a>
              </li>
              <li>
                <a href="https://www.wolfgangdigital.com/awards/">awards</a>
              </li>
              <li>
                <a href="https://www.wolfgangdigital.com/contact/">contact</a>
              </li>
            </ul>
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
                    <button className="filter-button">
                      <span>By Awards Category</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="filter-category">
                    <button className="filter-button">
                      <span>By Year</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                      </svg>
                    </button>
                  </div>
                   
                   
                    <div className="filter-category">
                      <button className="filter-button">
                        <span>By Channel</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                        </svg>
                      </button>
                    </div>
                    <div className="filter-category"> 
                      <button className="filter-button">
                        <span>By Industry</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                        </svg>
                      </button>
                    </div>
                    
                  
                </div>
            </div>
            <div className="awards-list">
              
              <AwardGroup />
            </div>

          </div>
      </body>
    </div>
  );
}

export default App;
