import logo from './logo.svg';
import * as bootstrap from 'bootstrap'

export default function App() {

  function openOption(e){
    e.preventDefault()
    e.target.classList.add("active")
    var type = e.target.dataset.option
    setTimeout(function() {
      document.getElementById("time-container").classList = 'time ' + type    
    }, 300);
  }

  
  return (
      <div className="container-sm d-flex w-100 h-100 p-3 mt-3 mx-auto flex-column">
        <div className="main-content">
          <div className="window">
            <div className="illustration">
              <div id="time-container" className="time dusk">
                <div className="sky">
                  <svg viewBox="0 0 113.39 99.21" width="100%"><linearGradient gradientTransform="rotate(-25)" gradientUnits="userSpaceOnUse" id="sky_sunset" x1="0%" x2="100%" y1="0%" y2="0%"><stop offset="0%" stopColor="#f7ffa9" stopOpacity="1"></stop><stop offset="40%" stopColor="#ffcc33" stopOpacity="1"></stop><stop offset="100%" stopColor="#ffbe1d" stopOpacity="1"></stop></linearGradient><linearGradient gradientTransform="rotate(45)" gradientUnits="userSpaceOnUse" id="sky_dusk" x1="0%" x2="100%" y1="0%" y2="0%"><stop offset="0%" stopColor="#ffd4fe" stopOpacity="1"></stop><stop offset="30%" stopColor="#ffd4fe" stopOpacity="1"></stop><stop offset="100%" stopColor="#ffd26a" stopOpacity="1"></stop></linearGradient><polygon fill="#B3EFFF" id="sky" points="111.971,97.368 111.971,1.842 1.419,1.842 1.419,9.042 1.419,97.368"></polygon></svg>
                </div>
                <div className="sun">
                  <svg viewBox="0 0 90.71 90.71" width="36%"><g><circle cx="45.355" cy="45.354" fill="#FFECDC" opacity="0.1" r="43.212"></circle><circle cx="45.355" cy="45.354" fill="#FFEBDE" opacity="0.3" r="31.131"></circle><circle cx="45.355" cy="45.354" fill="#f9db5a" id="sun" r="21.374"></circle></g></svg>
                </div>
                <div className="clouds">
                  <svg viewBox="0 0 42.52 19.84" width="32%"><g><path d="M38.582,8.005c1.865,0,3.393,1.673,3.393,3.717l0,0c0,2.042-1.527,3.716-3.393,3.716H24.039h-0.484   c-2.676,0-4.847-2.378-4.847-5.309c0-2.932,2.17-5.309,4.847-5.309c0,0,2.242-4.247,7.756-4.247c3.453,0,6.787,1.925,6.787,7.432   H38.582z" fill="#fff"></path><path d="M20.863,11.667c1.908,0,3.471,1.71,3.471,3.8l0,0c0,2.09-1.563,3.8-3.471,3.8H5.998H5.501   c-2.736,0-4.956-2.431-4.956-5.428s2.219-5.428,4.956-5.428c0,0,2.292-4.342,7.929-4.342c3.532,0,6.939,1.968,6.939,7.598H20.863z" fill="#FCFCFC"></path></g></svg>
                </div>
                <div className="stars">
                  <svg viewBox="0 0 99.21 25.51" width="88%"><g><ellipse cx="97.067" cy="11.361" fill="#FFFFFF" opacity="0.3" rx="0.727" ry="0.832"></ellipse><ellipse cx="2.144" cy="3.901" fill="#FFFFFF" opacity="0.3" rx="0.728" ry="0.831"></ellipse><ellipse cx="14.743" cy="10.455" fill="#FFFFFF" opacity="0.3" rx="0.727" ry="0.831"></ellipse><ellipse cx="66.439" cy="9.407" fill="#FFFFFF" opacity="0.3" rx="0.728" ry="0.831"></ellipse><ellipse cx="77.518" cy="1.332" fill="#FFFFFF" opacity="0.3" rx="0.728" ry="0.831"></ellipse><ellipse cx="82.514" cy="13.459" fill="#FFFFFF" opacity="0.3" rx="0.728" ry="0.831"></ellipse></g></svg>
                </div>
                <div className="moon">
                  <svg viewBox="0 0 15.59 19.28" width="15%"><path d="M13.718,16.993c-5.085,0-9.208-4.122-9.208-9.208c0-2.97,1.407-5.608,3.589-7.292  C3.722,1.205,0.381,5,0.381,9.579c0,5.086,4.123,9.208,9.209,9.208c2.116,0,4.063-0.716,5.619-1.916  C14.722,16.95,14.226,16.993,13.718,16.993z" fill="#FFFFFF" opacity="0.8"></path></svg>
                </div>
                <div className="mountain">
                  <svg viewBox="0 0 113.39 36.85" width="100%"><path d="M111.971,0.478C106.576,2.7,95.837,16.269,88.655,15C81.29,13.699,68.052,6.244,62.31,3.639  C56.566,1.036,41.955,16.42,36.835,15.948c-5.118-0.474-17.355-9.232-23.475-8.403c-3.964,0.537-8.932,4.276-11.941,6.844v21.983  h110.552V0.478z" fill="#87D6D6" id="mountain"></path></svg>
                </div>
                <div className="hill">
                  <svg viewBox="0 0 113.39 17.86" width="100%"><path d="M111.971,12.132c-4.609-0.766-8.889-1.889-12.432-3.579C86.127-0.36,71.48-3.606,43.082,6.31  c-6.086,0.811-7.853,0.51-17.234-2.951C18.487,0.644,8.764,1.176,1.419,2.621v15.017h110.551V12.132z" fill="#38C6B1" id="hill"></path></svg>
                </div>
                <div className="land">
                  <svg viewBox="0 0 113.39 24.09" width="100%"><path d="M111.971,23.82V3.328C84.865-6.96,12.407,11.765,1.419,14.708v9.112H111.971z" fill="#4CB5AB" id="land"></path></svg>
                </div>
                <div className="trees">
                  <svg viewBox="0 0 85.04 41.1" width="88%"><g><rect className="trunks" fill="#8C5F50" height="8.666" width="2.166" x="75.121" y="26.724"></rect><rect className="trunks" fill="#8C5F50" height="6.5" width="2.168" x="67.539" y="28.89"></rect></g><g><path className="trees" d="M83.785,21.309c0,4.187-3.393,7.581-7.58,7.581s-7.582-3.395-7.582-7.581     c0-9.749,3.395-20.579,7.582-20.579S83.785,11.56,83.785,21.309z" fill="#A0D755"></path><path className="trees" d="M75.121,24.933c0,3.382-2.91,6.125-6.5,6.125c-3.588,0-6.498-2.743-6.498-6.125     c0-7.873,2.91-16.622,6.498-16.622C72.211,8.311,75.121,17.06,75.121,24.933z" fill="#A0D755"></path></g><g opacity="0.2"><path d="M72.955,21.309c0-8.892,1.883-18.68,4.332-20.333c-0.354-0.16-0.715-0.247-1.082-0.247     c-4.188,0-7.582,10.83-7.582,20.579c0,4.187,3.395,7.581,7.582,7.581c0.369,0,0.729-0.035,1.082-0.086     C74.84,28.277,72.955,25.127,72.955,21.309z" fill="#FFFFFF"></path><path d="M66.457,24.933c0-7.106,1.383-14.901,3.191-16.359c-0.334-0.157-0.676-0.263-1.025-0.263     c-3.588,0-6.5,8.749-6.5,16.622c0,3.382,2.912,6.125,6.5,6.125c0.35,0,0.691-0.034,1.025-0.084     C67.84,30.508,66.457,27.984,66.457,24.933z" fill="#FFFFFF"></path></g><g><rect className="trunks" fill="#8C5F50" height="4.424" width="1.475" x="3.466" y="35.946"></rect><path className="trees" d="M7.153,34.472c0,1.628-1.32,2.949-2.949,2.949S1.254,36.1,1.254,34.472c0-5.162,1.32-11.799,2.949-11.799     S7.153,29.31,7.153,34.472z" fill="#A0D755"></path><path d="M3.466,34.472c0-4.233,0.666-9.452,1.58-11.194c-0.267-0.383-0.55-0.604-0.842-0.604    c-1.629,0-2.949,6.637-2.949,11.799c0,1.628,1.32,2.949,2.949,2.949c0.295,0,0.573-0.057,0.842-0.137    C4.135,36.919,3.466,35.806,3.466,34.472z" fill="#FCFCFC" opacity="0.2"></path></g></svg>
                </div>
              </div>
            </div>
          </div>

          <img src="img/page-chris-prof.jpeg" className="prof rounded" alt="logo" width="80px"/>

        </div>



        <main id="controls" className="px-3 text-center fixed-bottom">
          <div className="tab-content" id="tabs">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <p className=" m-3">I'm Chris and this is my page.</p>  
              <div className="page-icons row justify-content-center">
                <a href="https://instagram.com/chrisuniversity" className="col btn btn-link m-2"><img width="30px" className="page-icon" src="/icons/instagram-fill.svg" alt="Instagram"></img></a>
                <a href="https://www.linkedin.com/in/chrisuniversity" className="col btn btn-link m-2"><img width="30px" className="page-icon" src="/icons/linkedin-fill.svg" alt="LinkedIn"></img></a>
                <a href="https://github.com/chris920" className="col btn btn-link m-2"><img width="30px" className="page-icon" src="/icons/github-fill.svg" alt="Github"></img></a>
                <a href="mailto:chris@dougliu.com" className="col btn btn-link m-2"><img width="30px" className="page-icon" src="/icons/mail-16.svg" alt="Email"></img></a>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-projects" role="tabpanel" aria-labelledby="nav-projects-tab">
              <div class="d-grid gap-2">
                <a href="https://www.linkedin.com/in/chrisuniversity" class="btn btn-outline-info" type="button"><img width="15px" className="page-icon" src="/icons/linkedin-fill.svg" alt="Instagram"></img> ~ join the network</a>
                <a href="https://github.com/chris920" class="btn btn-outline-info" type="button"><img width="15px" className="page-icon" src="/icons/github-fill.svg" alt="Github"></img> ~ check the code</a>
              </div>              
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              
              <div class="d-grid gap-2">
                <a href="https://instagram.com/chrisuniversity" class="btn btn-outline-primary" type="button"><img width="15px" className="page-icon" src="/icons/instagram-fill.svg" alt="Instagram"></img> ~ view photos</a>
                <a href="https://goo.gl/maps/aNDC2eyTzDCQh4kc7" class="btn btn-outline-primary" type="button"><img width="15px" className="page-icon" src="/icons/location-24.svg" alt="Food"></img> ~ find food</a>
              </div>              
            </div>            
            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
              {/* <p>Let's chat</p> */}
              <div class="d-grid gap-2">
                <a href="https://mailto:chris@dougliu.com" class="btn btn-outline-dark" type="button"><img width="15px" className="page-icon" src="/icons/mail-16.svg" alt="Email"></img> ~ shoot me a message</a>
                <a href="https://calendly.com/upliftduo" class="btn btn-outline-dark" type="button"><img width="15px" className="page-icon" src="/icons/calendar-16.svg" alt="Calendar"></img> ~ pick a time</a>
                
              </div>
            </div>
          </div>        
          <div id="nav-tab" className="option-wrapper nav nav-pills mb-3 d-flex justify-content-evenly">
            <div className="nav-link active" data-option="dusk" onClick={openOption} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
              Howdy
            </div>
            <div className="nav-link" data-option="day" onClick={openOption} id="nav-projects-tab" data-bs-toggle="tab" data-bs-target="#nav-projects" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
              Projects
            </div>
            <div className="nav-link" data-option="sunset" onClick={openOption} id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-projects" aria-selected="false">
              Social
            </div>
            <div className="nav-link" data-option="night" onClick={openOption}  id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
              Meet
            </div>
          </div>
        </main>


      </div>
  )
}

