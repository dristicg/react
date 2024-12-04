import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <div className="part1">
  <div className="header">
    <div className="icon_b1">
      <img
        src="https://www.svgrepo.com/show/521521/bookmark.svg"
        className="icon_b1_img"
        alt="Bookmark icon"
      />
    </div>

    <div className="icon_b2">
      <div style={{ backgroundColor: "white" }}>
        <img
          src="https://www.svgrepo.com/show/393123/internet.svg"
          className="icon_b2_img1"
          alt="Internet icon"
        />
      </div>
      <div className="icon_b2_text">English (United States)</div>
      <div style={{ backgroundColor: "white" }}>
        <img
          src="https://www.svgrepo.com/show/509905/dropdown-arrow.svg"
          className="icon_b2_img2"
          alt="Dropdown arrow"
        />
      </div>
      <div style={{ backgroundColor: "white" }}>
        <img src="" alt="" />
      </div>
      <div className="icon_b2_text2">Sign In</div>
    </div>

    <div className="icon_b3">
      <span
        style={{
          backgroundColor: "blue",
          marginBottom: "15px",
          marginLeft: "8px",
        }}
      >
        Join Our Talent Community
      </span>
    </div>
  </div>

  <div className="header2">
    <span className="header2_text">Jobs</span>
    <span className="header2_text">Life@ADP</span>
    <span className="header2_text">Teams</span>
    <span className="header2_text">Early Careers</span>
    <span className="header2_text">Veterans</span>
    <span className="header2_text">Locations</span>
  </div>

  <div className="sec1">
    <div className="left_part">
      <div className="ready">
        <h1>Ready for your next great job?</h1>
      </div>
      <br />
      <div className="ADP">
        At ADP, we’re reimagining what it means to work, in profound ways. We say that we’re Always
        Designing for People. Starting with our own. See what it's like to work here.
      </div>
      <br />
      <br />
      <div className="watch_vid">
        <a href="#">Watch Video</a>
        <img
          src="https://www.svgrepo.com/show/438144/multimedia-play-icon-circle-button.svg"
          style={{ height: "20px", width: "20px" }}
          alt="Play button"
        />
      </div>
    </div>

    <div className="right_part">
      <img src="" alt="Right part image" />
    </div>
  </div>

  <div className="tabs">
    <div className="tab1" style={{ paddingTop: "10px", paddingLeft: "50px" }}>
      Search job title, Keywords or MOS code
    </div>
    <div className="tab2" style={{ paddingTop: "10px", paddingLeft: "50px" }}>
      Search by city, state, or location
    </div>
    <div>
      <button className="search">Search</button>
    </div>
  </div>

  <div className="sec1_footer">
    <div className="sec1_footer_text">Looking for jobs? Search for opportunities:</div>
    <br />
    <button className="techADP">Tech.ADP.com</button>
  </div>
</div>


<div className="sec2">
  <div className="sec2_left">
    <div className="btntntb">
      <button className="btn">
        <span>Standard Video </span>
        <span>AD Video </span>
      </button>

      <div className="textnexttobtn">
        <span>
          To view a video in a different language, press play and click on the gear to select your language from the menu
        </span>
      </div>
    </div>

    <div>
      <img
        src="https://jobs.adp.com/media/qvhngazp/new_life-adp-header-photo_september-22-2023.png?rxy=0.5118071091225453,0.40342210122063354&width=600&height=450&v=1dac39387ae3200&width=600&height=450&rmode=crop&format=webp&quality=75"
        className="sec2leftimg"
        alt="Header"
      />
    </div>
  </div>

  <div className="sec2_right">
    <div className="sec2_right_heading">
      Join a company where you can be... you.
    </div>
    <br />
    <br />

    <div className="sec2_right_mainContent">
      We believe in who you are, what you know and where you hope to go with your career. Our strengths-based leadership
      approach is designed to lean into what you do best and let you shine.
    </div>
    <br />
    <br />

    <button className="btn_learnmore">Learn more</button>
  </div>
</div>


<div className="sec3" style={{ backgroundColor: 'blue' }}>
  <div id="sec3_tabs" className="sec3_tabs">
    <div className="sec3_tab1">
      <div>
        <img
          src="https://jobs.adp.com/media/03qezecr/lifeatadp_overview.jpg?width=600&height=300&v=1dab1187c7d5150&width=600&height=300&rmode=crop&format=webp&quality=75"
          style={{ height: '200px', width: '420px', padding: '-50px', marginLeft: '-50px' }}
          alt="Perks and Benefits"
        />
      </div>
      <span className="sec3_tab1_heading">Perks and Benefits</span>
      <br />
      <br />
      <span className="sec3_tab1_maintext">
        Our associates receive support and access to resources that support their well-being because healthy associates
        are happy ones.
      </span>
      <button className="btn_learnmore">Learn more</button>
    </div>

    <div className="sec3_tab1">
      <div>
        <img
          src="https://jobs.adp.com/media/sn4hxlx1/inclusion_mast.jpg?rxy=0.508516785407658,0.21911935140671984&width=600&height=300&v=1dab11875ffa2b0&width=600&height=300&rmode=crop&format=webp&quality=75"
          style={{ height: '200px', width: '420px', padding: '-50px', marginLeft: '-50px' }}
          alt="Inclusion and Diversity"
        />
      </div>
      <span className="sec3_tab1_heading">Inclusion and Diversity</span>
      <br />
      <br />
      <span className="sec3_tab1_maintext">
        At ADP, we believe the best ideas thrive in an inclusive environment that values diverse perspectives. That’s
        why we made it the cornerstone of our one-of-a-kind culture.
      </span>
      <br />
      <button className="btn_learnmore">Learn more</button>
    </div>

    <div className="sec3_tab1">
      <div>
        <img
          src="https://jobs.adp.com/media/lqcanuku/csr_mast.jpg?rxy=0.4629887124939134,0.502532773833799&width=600&height=300&v=1dab1186aa0b760&width=600&height=300&rmode=crop&format=webp&quality=75"
          style={{ height: '200px', width: '420px', padding: '-50px', marginLeft: '-50px', marginTop: '0px' }}
          alt="Corporate Social Responsibility"
        />
      </div>
      <span className="sec3_tab1_heading">Corporate Social Responsibility</span>
      <br />
      <br />
      <span className="sec3_tab1_maintext">
        Whether it’s a volunteer event supporting your local community or contributing to a charity you’re passionate
        about, we make it easier to give back. In fact, ADP offers a gift matching program. Just another way we make an
        even bigger impact together.
      </span>
      <button className="btn_learnmore">Learn more</button>
    </div>
  </div>
</div>


<div className="sec4">
  <div className="sec4_content">
    <span className="sec4_heading">Like what you do</span>
    <br />
    <br />
    <span className="sec4_maintext">
      No matter your role – client service, sales, HR, or tech – you’ll enjoy working with people who are making a
      difference in the lives of others around the world. All while moving your own career forward.
    </span>
    <br />
    <br />
    <button className="btn_seeallteams">See All teams</button>
  </div>
</div>






      
       
          </>

          )
}

          export default App
