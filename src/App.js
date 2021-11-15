import wolfgangLogo from './images/wolfgang_logo.svg'
import contentImage from './images/content_image.jpg'



function App() {
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
            <h1>The Awards Hall</h1>
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
          <div className="awards">
    
          </div>
      </body>
    </div>
  );
}

export default App;
