import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

export const Navbar  = () => {
    return(
        <>
        <header className="header header-10 header-intro-clearance">
          <div className="header-top">
            <div className="container">
            </div>{/* End .container */}
          </div>{/* End .header-top */}
          <div className="header-middle">
            <div className="container">
              <div className="header-left">
                <button className="mobile-menu-toggler">
                  
                  <i className="icon-bars" />
                </button>
                <a href="#" className="logo">
                  <img src="assets/images/demos/demo-13/logo.png" alt="Molla Logo" width={105} height={25} />
                  
                </a> 
                <br></br>
                <br></br>
               
              </div>{/* End .header-left */}
              <div className="header-center">
                <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block    ">
                  <a href="#" className="search-toggle" role="button"><i className="icon-search" /></a>
                  <form action="#" method="get">
                    <div className="header-search-wrapper search-wrapper-wide">
                      
                      <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                      <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
                    </div>{/* End .header-search-wrapper */}
                  </form>
                </div>{/* End .header-search */}
              </div>
              <div className="header-right">
                <div className="header-dropdown-link">
                  <a href="#signin-modal" data-toggle="modal" className="wishlist-link">
                    <i className="icon-user" />
                    <span className="wishlist-count">3</span>
                    <span className="wishlist-txt">SignIn/Signup</span>
                  </a>
                  <a href="wishlist.html" className="wishlist-link">
                    <i className="icon-heart-o" />
                    <span className="wishlist-count">3</span>
                    <span className="wishlist-txt">Wishlist</span>
                  </a>
                  <div className="dropdown cart-dropdown">
                    <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                      <i className="icon-shopping-cart" />
                      <span className="cart-count">2</span>
                      <span className="cart-txt">Cart</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div className="dropdown-cart-products">
                        <div className="product">
                          <div className="product-cart-details">
                            <h4 className="product-title">
                              <a href="product.html">Beige knitted elastic runner shoes</a>
                            </h4>
                            <span className="cart-product-info">
                              <span className="cart-product-qty">1</span>
                              x $84.00
                            </span>
                          </div>{/* End .product-cart-details */}
                          <figure className="product-image-container">
                            <a href="product.html" className="product-image">
                              <img src="assets/images/products/cart/product-1.jpg" alt="product" />
                            </a>
                          </figure>
                          <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                        </div>{/* End .product */}
                        <div className="product">
                          <div className="product-cart-details">
                            <h4 className="product-title">
                              <a href="product.html">Blue utility pinafore denim dress</a>
                            </h4>
                            <span className="cart-product-info">
                              <span className="cart-product-qty">1</span>
                              x $76.00
                            </span>
                          </div>{/* End .product-cart-details */}
                          <figure className="product-image-container">
                            <a href="product.html" className="product-image">
                              <img src="assets/images/products/cart/product-2.jpg" alt="product" />
                            </a>
                          </figure>
                          <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                        </div>{/* End .product */}
                      </div>{/* End .cart-product */}
                      <div className="dropdown-cart-total">
                        <span>Total</span>
                        <span className="cart-total-price">$160.00</span>
                      </div>{/* End .dropdown-cart-total */}
                      <div className="dropdown-cart-action">
                        <a href="cart.html" className="btn btn-primary">View Cart</a>
                        <a href="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right" /></a>
                      </div>{/* End .dropdown-cart-total */}
                    </div>{/* End .dropdown-menu */}
                  </div>{/* End .cart-dropdown */}
                </div>
              </div>{/* End .header-right */}
            </div>{/* End .container */}
          </div>{/* End .header-middle */}
          <div className="header-bottom sticky-header">
            <div className="container">
              <div className="header-left">
              
                <div className="dropdown category-dropdown show is-on" data-visible="true">
                </div>{/* End .category-dropdown */}
              </div>{/* End .col-lg-3 */}

            

              <div className="header-center">
                <nav className="main-nav">
                  <ul className="menu sf-arrows">
                    <li className="megamenu-megamenu-sm">
                      <a href="#" className="sf-with-ul">Mobile Skins</a>
                      <div className="megamenu megamenu-sm">
                        <div className="row no-gutters">
                          <div className="col-md-6">
                            <div className="menu-col">
                              <div className="menu-title">Product Details</div>{/* End .menu-title */}
                              <ul>
                              
                              <Link to="category"><li>Default</li></Link>
                                <li><a href="#">Centered</a></li>
                                <li><a href="#"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="product-sticky.html">Sticky Info</a></li>
                                <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                                <li><a href="product-fullwidth.html">Full Width</a></li>
                                <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                              </ul>
                            </div>{/* End .menu-col */}
                          </div>{/* End .col-md-6 */}
                          <div className="col-md-6">
                            <div className="banner banner-overlay">
                              <img src="assets/images/menu/banner-2.png" alt="Banner" />
                              <div className="banner-content banner-content-bottom">
                                <div className="banner-title text-white">New Trends<br /><span><strong>spring 2019</strong></span></div>{/* End .banner-title */}
                              </div>{/* End .banner-content */}
                            </div></div></div></div></li>
                    <li>    
                      <a href="category.html" className="sf-with-ul">Laptop Skins</a>
                      <div className="megamenu megamenu-sm">
                        <div className="row no-gutters">
                          <div className="col-md-6">
                            <div className="menu-col">
                              <div className="menu-title">Product Details</div>{/* End .menu-title */}
                              <ul>
                                <Link to="category"><li>Default</li></Link>
                                <li><a href="product-centered.html">Centered</a></li>
                                <li><a href="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                                <li><a href="product-gallery.html">Gallery</a></li>
                                <li><a href="product-sticky.html">Sticky Info</a></li>
                                <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                                <li><a href="product-fullwidth.html">Full Width</a></li>
                                <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                              </ul>
                            </div>{/* End .menu-col */}
                          </div>{/* End .col-md-6 */}
                          <div className="col-md-6">
                            <div className="banner banner-overlay">
                              <img src="assets/images/menu/banner-2.png" alt="Banner" />
                              <div className="banner-content banner-content-bottom">
                                <div className="banner-title text-white">New Trends<br /><span><strong>spring 2019</strong></span></div>{/* End .banner-title */}
                              </div>{/* End .banner-content */}
                            </div>{/* End .col-md-4 */}
                          </div>{/* End .row */}
                        </div>{/* End .megamenu megamenu-md */}
                      </div></li>
                    <li>
                      <a href="product.html" className="sf-with-ul">Stickers</a>
                      <div className="megamenu megamenu-sm">
                        <div className="row no-gutters">
                          <div className="col-md-6">
                            <div className="menu-col">
                              <div className="menu-title">Product Details</div>{/* End .menu-title */}
                              <ul>
                                <li><a href="product.html">Default</a></li>
                                <li><a href="product-centered.html">Centered</a></li>
                                <li><a href="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                                <li><a href="product-gallery.html">Gallery</a></li>
                                <li><a href="product-sticky.html">Sticky Info</a></li>
                                <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                                <li><a href="product-fullwidth.html">Full Width</a></li>
                                <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                              </ul>
                            </div>{/* End .menu-col */}
                          </div>{/* End .col-md-6 */}
                          <div className="col-md-6">
                            <div className="banner banner-overlay">
                              <img src="assets/images/menu/banner-2.png" alt="Banner" />
                              <div className="banner-content banner-content-bottom">
                                <div className="banner-title text-white">New Trends<br /><span><strong>spring 2019</strong></span></div>{/* End .banner-title */}
                              </div>{/* End .banner-content */}
                            </div>{/* End .col-md-4 */}
                          </div>{/* End .row */}
                        </div>{/* End .megamenu megamenu-md */}
                      </div></li>
                      <li>    
                      <a href="category.html" className="sf-with-ul">Frames</a>
                      <div className="megamenu megamenu-sm">
                        <div className="row no-gutters">
                          <div className="col-md-6">
                            <div className="menu-col">
                              <div className="menu-title">Product Details</div>{/* End .menu-title */}
                              <ul>
                                <li><a href="product.html">Default</a></li>
                                <li><a href="product-centered.html">Centered</a></li>
                                <li><a href="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                                <li><a href="product-gallery.html">Gallery</a></li>
                                <li><a href="product-sticky.html">Sticky Info</a></li>
                                <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                                <li><a href="product-fullwidth.html">Full Width</a></li>
                                <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                              </ul>
                            </div>{/* End .menu-col */}
                          </div>{/* End .col-md-6 */}
                          <div className="col-md-6">
                            <div className="banner banner-overlay">
                              <img src="assets/images/menu/banner-2.png" alt="Banner" />
                              <div className="banner-content banner-content-bottom">
                                <div className="banner-title text-white">New Trends<br /><span><strong>spring 2019</strong></span></div>{/* End .banner-title */}
                              </div>{/* End .banner-content */}
                            </div>{/* End .col-md-4 */}
                          </div>{/* End .row */}
                        </div>{/* End .megamenu megamenu-md */}
                      </div></li>

                    <li>
                      <a href="blog.html" className="sf-with-ul">Blog</a>
                      <ul>
                        <li><a href="blog.html">Classic</a></li>
                        <li><a href="blog-listing.html">Listing</a></li>
                        <li>
                          <a href="#">Grid</a>
                          <ul>
                            <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                            <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                            <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                            <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Masonry</a>
                          <ul>
                            <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                            <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                            <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                            <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Mask</a>
                          <ul>
                            <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                            <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Single Post</a>
                          <ul>
                            <li><a href="single.html">Default with sidebar</a></li>
                            <li><a href="single-fullwidth.html">Fullwidth no sidebar</a></li>
                            <li><a href="single-fullwidth-sidebar.html">Fullwidth with sidebar</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    
                  </ul>{/* End .menu */}
                </nav>{/* End .main-nav */}
              </div>{/* End .col-lg-9 */}
              <div className="header-right">
                <i className="la la-lightbulb-o"/>
                <Link to="/corporate" >
                <button>
                <p className="text-dark font-weight-bolder px-4">Corporate Gifting </p>
                </button>
                </Link>
              </div>  
            
            </div>{/* End .container */}
          </div>{/* End .header-bottom */}
        </header>{/* End .header */}



</>

);
}
export default Navbar;