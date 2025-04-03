import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    
    <footer className="rabs-footer">
      <div className="container">
        <div className="row">
          {/* Services Section */}
          <div className="col">
            <div>
              <h3>Services</h3>
              <hr className="gradient-line" />
            </div>
            <p className="footr-linksa">
              <a href="#services">UI - UX Design</a> <br />
              <a href="#services">WordPress Development</a> <br />
              <a href="#services">Landing Page Development</a> <br />
              <a href="#services">Portfolio Website</a> <br />
              <a href="#services">Corporate Websites</a> <br />
              <a href="#services">PHP & React Website</a> <br />
              <a href="#services">Real Estate & Developers Website</a>
            </p>
          </div>

          {/* Office Address Section */}
          <div className="col">
            <div>
              <h3>Office Address</h3>
              <hr className="gradient-line" />
            </div>
            <div>
              <p>
                <i className="fa fa-building-o"></i> Office B16, Al Kazim Building, Al Garhoud, Dubai.
                <br />
                <a href="tel:+971582335969">
                  <i className="fa fa-phone"></i> +971 58 233 5969
                </a>
              </p>
              <p>
                <i className="fa fa-building-o"></i> Office 01, Pushtikar Society, Jogeshwari West, Mumbai - 102.
                <br />
                <a href="tel:+919833636916">
                  <i className="fa fa-phone"></i> +91 98336 36916
                </a>
              </p>
              <p>
                <a href="mailto:support@rabsnetsolutions.com">
                  <i className="fa fa-envelope"></i> support@rabsnetsolutions.com
                </a>
              </p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col">
            <div>
              <h3>Newsletter</h3>
              <hr className="gradient-line" />
            </div>
            <form method="POST" action="footer-mail.php">
              <input type="hidden" name="captcha" />
              <input type="hidden" name="pname" value="Rabs Net Solutions Microsite" />
              <input type="hidden" name="form_type" value="Newsletter Subscribe" />
              <input type="email" className="custom-footer-inputfield" placeholder="Email" name="email" required />
              <br />
              <div className="checkbox-container">
                <input type="checkbox" id="term-conditon" name="term-conditon" value="term-conditon" required />
                <label htmlFor="term-conditon">T & C Apply</label>
              </div>
              <button type="submit" name="submit" className="custom-submitbtn-footer">
                Submit
              </button>
            </form>
            <div className="footer-social">
              <ul className="footer-social-icons">
                <li>
                  <a href="https://www.instagram.com/rabsnetsolutionspvtltd/" target="_blank">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://in.linkedin.com/in/rehan-halai-5b317974" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <hr />
        <div className="sub-footer">
          <p>Copyright © 2024 RABS Net Solutions Pvt. Ltd. All Rights Reserved</p>
          <p>
            <a href="privacy-policy.php">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
