export const Footer  = () => {
    return(
      
        <>
        <div className="cta cta-horizontal cta-horizontal-box bg-primary">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-2xl-5col">
                  <h3 className="cta-title text-white">Join Our Newsletter</h3>{/* End .cta-title */}
                  <p className="cta-desc text-white">Subcribe to get information about products and coupons</p>{/* End .cta-desc */}
                </div>{/* End .col-lg-5 */}
                <div className="col-3xl-5col">
                  <form action="#">
                    <div className="input-group">
                      <input type="email" className="form-control form-control-white" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                      <div className="input-group-append">
                        <button className="btn btn-outline-white-2" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right" /></button>
                      </div>{/* .End .input-group-append */}
                    </div>{/* .End .input-group */}
                  </form>
                </div>{/* End .col-lg-7 */}
              </div>{/* End .row */}
            </div>{/* End .container */}
          </div>{/* End .cta */}
            <footer className="footer footer-2">
          <div className="icon-boxes-container">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon">
                    <i class="icon-truck"></i>
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">Free Shipping</h3>{/* End .icon-box-title */}
                      <p>On cart value of Rs 299</p>
                    </div>{/* End .icon-box-content */}
                  </div>{/* End .icon-box */}
                </div>{/* End .col-sm-6 col-lg-3 */}
                <div className="col-sm-6 col-lg-3">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon">
                      <i className="icon-rotate-left" />
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">Free Returns</h3>{/* End .icon-box-title */}
                      <p>for manufacturing defects</p>
                    </div>{/* End .icon-box-content */}
                  </div>{/* End .icon-box */}
                </div>{/* End .col-sm-6 col-lg-3 */}
                <div className="col-sm-6 col-lg-3">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon">
                      <i className="icon-info-circle" />
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">Get 20% Off </h3>{/* End .icon-box-title */}
                      <p>When you sign up</p>
                    </div>{/* End .icon-box-content */}
                  </div>{/* End .icon-box */}
                </div>{/* End .col-sm-6 col-lg-3 */}
                <div className="col-sm-6 col-lg-3">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon">
                      <i className="icon-life-ring" />
                    </span>
                    <div className="icon-box-content">
                      <h3 className="icon-box-title">We Support</h3>{/* End .icon-box-title */}
                      <p>24/7 amazing services</p>
                    </div>{/* End .icon-box-content */}
                  </div>{/* End .icon-box */}
                </div>{/* End .col-sm-6 col-lg-3 */}
              </div>{/* End .row */}
            </div>{/* End .container */}
          </div>{/* End .icon-boxes-container */}
          <div className="footer-middle border-0">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-lg-6">
                  <div className="widget widget-about">
                    <img src="assets/images/demos/demo-13/logo-footer.png" className="footer-logo" alt="Footer Logo" width={105} height={25} />
                    <p>All materials are 100% resistant to scratching and fading. Yuckquee has exclusive skins available in several colors, designs and prints exactly fit the dimensions of all the branded mobile phones made from superior grade. Yuckquee skin keeps it water protected and embraces its style in a unique way. Yuckquee skins display the authentic feel that any real leather, carbon fiber, wood, metal would emanate.</p>
                    <div className="widget-about-info">
                      <div className="row">
                        <div className="col-sm-6 col-md-4">
                          <span className="widget-about-title">Got Question? Email us 24/7</span>
                          <a href="care@stickersbaba.com">care@abc.com</a>
                        </div>{/* End .col-sm-6 */}
                        <div className="col-sm-6 col-md-8">
                          <span className="widget-about-title">Payment Method</span>
                          <figure className="footer-payments">
                            <img src="assets/images/payments.png" alt="Payment methods" width={272} height={20} />
                          </figure>{/* End .footer-payments */}
                        </div>{/* End .col-sm-6 */}
                      </div>{/* End .row */}
                    </div>{/* End .widget-about-info */}
                  </div>{/* End .widget about-widget */}
                </div>{/* End .col-sm-12 col-lg-3 */}
                <div className="col-sm-4 col-lg-2">
                  <div className="widget">
                    <h4 className="widget-title">Support</h4>{/* End .widget-title */}
                    <ul className="widget-list">
                      <li><a href="about.html">Discounts</a></li>
                      <li><a href="faq.html">FAQ's</a></li>
                      <li><a href="contact.html">How to Apply</a></li>
                      <li><a href="login.html">Contact us</a></li>
                     
                    </ul>{/* End .widget-list */}
                  </div>{/* End .widget */}
                </div>{/* End .col-sm-4 col-lg-3 */}
                <div className="col-sm-4 col-lg-2">
                  <div className="widget">
                    <h4 className="widget-title">Useful Links</h4>{/* End .widget-title */}
                    <ul className="widget-list">
                      <li><a href="#">Anout Us</a></li>
                      <li><a href="#">Blogs</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Terms Of Service</a></li>
                      <li><a href="#">Payment &amp; Shipping</a></li>
                      <li><a href="#">Refund Policy</a></li>
                      <li><a href="#">Disclaimer</a></li>
                    </ul>{/* End .widget-list */}
                  </div>{/* End .widget */}
                </div>{/* End .col-sm-4 col-lg-3 */}
                <div className="col-sm-4 col-lg-2">
                  <div className="widget">
                    <h4 className="widget-title">My Account</h4>{/* End .widget-title */}
                    <ul className="widget-list">
                      <li><a href="#">Sign In</a></li>
                      <li><a href="#">View Cart</a></li>
                      <li><a href="#">My Wishlist</a></li>
                      <li><a href="#">Track My Order</a></li>
                      <li><a href="#">Help</a></li>
                    </ul>{/* End .widget-list */}
                  </div>{/* End .widget */}
                </div>{/* End .col-sm-64 col-lg-3 */}
              </div>{/* End .row */}
            </div>{/* End .container */}
          </div>{/* End .footer-middle */}
          <div className="footer-bottom">
            <div className="container">
              <p className="footer-copyright">Copyright © 2023 Stickers Baba. All Rights Reserved.</p>{/* End .footer-copyright */}
              <ul className="footer-menu">
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>{/* End .footer-menu */}
              <div className="social-icons social-icons-color">
                <span className="social-label">Social Media</span>
                <a href="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f" /></a>
                <a href="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter" /></a>
                <a href="#" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram" /></a>
                </div>{/* End .soial-icons */}
            </div>{/* End .container */}
          </div>{/* End .footer-bottom */}
        </footer>
        </>
    )
}
export default Footer;