import {Container, Row, Col} from 'react-bootstrap';
import {useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import fb from "./static/facebook-icon.png";
import android from "./static/android.png";
import ios from "./static/ios.png";
import mobile from "./static/mobile.png";
import img1 from "./static/img1.jpg";
import img2 from "./static/img2.jpg";
import img3 from "./static/img3.jpg";
import img4 from "./static/img4.jpg";


function App() {
  var c=1;
  var images = [img1,img2,img3,img4];
  useEffect(() => {
    const interval = setInterval(() => {

      var url="url("+images[c]+")";
      console.log(url);
      var img = document.getElementById("img-area");
      img.style.backgroundImage=url;
      console.log(img4);
      c++;
      if(c>3) c=1;
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
     <section>
       <div></div>
       <main>
       <Container>
          <Row>
            <Col className="d-none d-lg-block mobile-icon" >
              <img src={mobile} alt="mobile" />
              <div className="mobile-image" id="img-area"></div>
            </Col>
            <Col className="d-md-block login" >
              <Row className="insta-form">
                <h1 className="iheading">𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h1>
                <Col>
                  <form className="form">
                      <input type="text"  placeholder="Phone number, username, or email"/>
                      <input type="password" placeholder="Password" />
                      <button type="submit" disabled>Log In</button>
                      <div className="line">OR</div>
                      <div className="fb-login">
                        <span ><img src={fb}  alt="icon" /></span>
                        <span className="ml-2">Log in with Facebook</span>
                      </div>
                      <a href="account/password/reset">Forgot password?</a>
                  </form>
                </Col>
              </Row>
              <Row className="signup">
                <Col className="signup1">
                <p>Don't have an account? <a href="accounts/emailsignup" tabIndex="1"> Sign up</a></p>
                </Col>
              </Row>
              <Row className="apps">
                <div className="app">
                  <p>Get the app.</p>
                </div>
                <Row className="app-icon">
                  <Col className="col-6 icon" ><a   href="/" ><img src={ios} alt="icon" /></a></Col>
                  <Col className="col-6 icon" ><a   href="/" ><img src={android} alt="icon" /></a></Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Container>
       </main>
       <footer>
         <Container>
         <Row>
           <Col xs={1}>
           About
           </Col>
           <Col xs={1}>
           Blog
           </Col>
           <Col xs={1}>
           Jobs
           </Col >
           <Col xs={1}>
           Help
           </Col>
           <Col xs={1}>
           API
           </Col>
           <Col xs={1}>
           Privacy
           </Col>
           <Col xs={1}>
           Terms
           </Col>
           <Col xs={1}>
           Top Accounts
           </Col>
           <Col xs={1}>
           HashTags
           </Col>
           <Col xs={1}>
           Locations
           </Col>
           <Col xs={1}>
           Instagram Lite
           </Col>
         </Row>
         <Row className="justify-content-center">
         <Col></Col>
           <Col>
           <select>
             <option>English</option>
           </select>
           © 2021 Instagram from Facebook
           </Col>
         </Row>
         </Container>
       </footer>
     </section>
    </div>
  );
}

export default App;
