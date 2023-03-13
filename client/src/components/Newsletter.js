
export const Newsletter  = () => {
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
          </>
    );
}