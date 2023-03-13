
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
export const PublicHome = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>Molla - Bootstrap eCommerce Template</title>
      <meta name="keywords" content="HTML5 Template" />
      <meta name="description" content="Molla - Bootstrap eCommerce Template" />
      <meta name="author" content="p-themes" />
      {/* Favicon */}
      <link rel="apple-touch-icon" sizes="180x180" href="assets/images/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="assets/images/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="assets/images/icons/favicon-16x16.png" />
      <link rel="manifest" href="assets/images/icons/site.webmanifest" />
      <link rel="mask-icon" href="assets/images/icons/safari-pinned-tab.svg" color="#666666" />
      
      <link rel="shortcut icon" href="assets/images/icons/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content="Molla" />
      <meta name="application-name" content="Molla" />
      <meta name="msapplication-TileColor" content="#cc9966" />
      <meta name="msapplication-config" content="assets/images/icons/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="stylesheet" href="assets/vendor/line-awesome/line-awesome/line-awesome/css/line-awesome.min.css" />
      {/* Plugins CSS File */}
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/css/plugins/owl-carousel/owl.carousel.css" />
      <link rel="stylesheet" href="assets/css/plugins/magnific-popup/magnific-popup.css" />
      <link rel="stylesheet" href="assets/css/plugins/jquery.countdown.css" />
      {/* Main CSS File */}
      <link rel="stylesheet" href="assets/css/style.css" />
      <link rel="stylesheet" href="assets/css/skins/skin-demo-13.css" />
      <link rel="stylesheet" href="assets/css/demos/demo-13.css" />
      <div className="page-wrapper">
        <Navbar/>
        <main className="main">
          <div className="intro-slider-container">
            <div className="intro-slider owl-carousel owl-simple owl-nav-inside" data-toggle="owl" data-owl-options="{
                      &quot;nav&quot;: false,
                      &quot;responsive&quot;: {
                          &quot;992&quot;: {
                              &quot;nav&quot;: true
                          }
                      }
                  }">
              <div className="intro-slide" style={{backgroundImage: 'url(assets/images/demos/demo-13/slider/slide-1.png)'}}>
                <div className="container intro-content">
                  <div className="row">
                    <div className="col-auto">
                      <h3 className="intro-subtitle">New Website Launch Offer</h3>{/* End .h3 intro-subtitle */}
                      <h1 className="intro-title">Stickers<br />
                        <span>
                          <sup className="font-weight-light">from</sup>
                          <sup className="font-weight-light line-through">Rs. 49</sup>
                          <span className="text-primary"> Rs. 29<sup /></span>
                        </span>
                      </h1>{/* End .intro-title */}
                      <a href="category.html" className="btn btn-outline-primary-2">
                        <span>Shop Now</span>
                        <i className="icon-long-arrow-right" />
                      </a>
                    </div>{/* End .col-auto offset-lg-3 */}
                  </div>{/* End .row */}
                </div>{/* End .container intro-content */}
              </div>{/* End .intro-slide */}
              <div className="intro-slide" style={{backgroundImage: 'url(assets/images/demos/demo-13/slider/slide-2.jpg)'}}>
                <div className="container intro-content">
                  <div className="row">
                    <div className="col-auto">
                      <h3 className="intro-subtitle">Trevel &amp; Outdoor</h3>{/* End .h3 intro-subtitle */}
                      <h1 className="intro-title">Original Outdoor <br />Beanbag
                        <span>
                          <sup className="font-weight-light line-through">$89,99</sup>
                          <span className="text-primary">$29<sup>,99</sup></span>
                        </span>
                      </h1>{/* End .intro-title */}
                      <a href="category.html" className="btn btn-outline-primary-2">
                        <span>Shop Now</span>
                        <i className="icon-long-arrow-right" />
                      </a>
                    </div>{/* End .col-auto offset-lg-3 */}
                  </div>{/* End .row */}
                </div>{/* End .container intro-content */}
              </div>{/* End .intro-slide */}
              <div className="intro-slide" style={{backgroundImage: 'url(assets/images/demos/demo-13/slider/slide-3.jpg)'}}>
                <div className="container intro-content">
                  <div className="row">
                    <div className="col-auto">
                      <h3 className="intro-subtitle">Fashion Promotions</h3>{/* End .h3 intro-subtitle */}
                      <h1 className="intro-title">Tan Suede <br />Biker Jacket
                        <span>
                          <sup className="font-weight-light line-through">$240,00</sup>
                          <span className="text-primary">$180<sup>,99</sup></span>
                        </span>
                      </h1>{/* End .intro-title */}
                      <a href="category.html" className="btn btn-outline-primary-2">
                        <span>Shop Now</span>
                        <i className="icon-long-arrow-right" />
                      </a>
                    </div>{/* End .col-auto offset-lg-3 */}
                  </div>{/* End .row */}
                </div>{/* End .container intro-content */}
              </div>{/* End .intro-slide */}
            </div>{/* End .owl-carousel owl-simple */}
            <span className="slider-loader" />{/* End .slider-loader */}
          </div>{/* End .intro-slider-container */}
          <div className="mb-4" />{/* End .mb-2 */}
          <div className="container">
            <h2 className="title text-center mb-2">Explore Popular Categories</h2>{/* End .title */}
            <div className="cat-blocks-container">
              <div className="row">
                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="category.html" className="cat-block">
                    <figure>
                      <span>
                        <img src="assets/images/demos/demo-13/cats/1.jpg" alt="Category image" />
                      </span>
                    </figure>
                    <h3 className="cat-block-title">Mobile Skins</h3>{/* End .cat-block-title */}
                  </a>
                </div>{/* End .col-sm-4 col-lg-2 */}
                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="category.html" className="cat-block">
                    <figure>
                      <span>
                        <img src="assets/images/demos/demo-13/cats/2.jpg" alt="Category image" />
                      </span>
                    </figure>
                    <h3 className="cat-block-title">Laptop Skins</h3>{/* End .cat-block-title */}
                  </a>
                </div>{/* End .col-sm-4 col-lg-2 */}
                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="category.html" className="cat-block">
                    <figure>
                      <span>
                        <img src="assets/images/demos/demo-13/cats/3.jpg" alt="Category image" />
                      </span>
                    </figure>
                    <h3 className="cat-block-title">Stickers</h3>{/* End .cat-block-title */}
                  </a>
                </div>{/* End .col-sm-4 col-lg-2 */}
                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="category.html" className="cat-block">
                    <figure>
                      <span>
                        <img src="assets/images/demos/demo-13/cats/4.jpg" alt="Category image" />
                      </span>
                    </figure>
                    <h3 className="cat-block-title">Frames</h3>{/* End .cat-block-title */}
                  </a>
                </div>{/* End .col-sm-4 col-lg-2 */}
                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="category.html" className="cat-block">
                    <figure>
                      <span>
                        <img src="assets/images/demos/demo-13/cats/5.jpg" alt="Category image" />
                      </span>
                    </figure>
                    <h3 className="cat-block-title">XYZ</h3>{/* End .cat-block-title */}
                  </a>
                </div>{/* End .col-sm-4 col-lg-2 */}
                <div className="col-6 col-sm-4 col-lg-2">
                  <a href="category.html" className="cat-block">
                    <figure>
                      <span>
                        <img src="assets/images/demos/demo-13/cats/6.jpg" alt="Category image" />
                      </span>
                    </figure>
                    <h3 className="cat-block-title">XYZ</h3>{/* End .cat-block-title */}
                  </a>
                </div>{/* End .col-sm-4 col-lg-2 */}
              </div>{/* End .row */}
            </div>{/* End .cat-blocks-container */}
          </div>{/* End .container */}
          <div className="mb-2" />{/* End .mb-2 */}
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="banner banner-overlay">
                  <a href="#">
                    <img src="assets/images/demos/demo-13/banners/banner-1.jpg" alt="Banner" />
                  </a>
                  <div className="banner-content">
                    <h4 className="banner-subtitle text-white"><a href="#">Launch Sale</a></h4>{/* End .banner-subtitle */}
                    <h3 className="banner-title text-white"><a href="#">Laptop Skins <br />&amp; Stickers <br /><span>50% off</span></a></h3>{/* End .banner-title */}
                    <a href="#" className="banner-link">Shop Now <i className="icon-long-arrow-right" /></a>
                  </div>{/* End .banner-content */}
                </div>{/* End .banner */}
              </div>{/* End .col-lg-3 */}
              <div className="col-sm-6 col-lg-3 order-lg-last">
                <div className="banner banner-overlay">
                  <a href="#">
                    <img src="assets/images/demos/demo-13/banners/banner-3.jpg" alt="Banner" />
                  </a>
                  <div className="banner-content">
                    <h4 className="banner-subtitle text-white"><a href="#">Smart Offer</a></h4>{/* End .banner-subtitle */}
                    <h3 className="banner-title text-white"><a href="#">lorem <br />ipsum abc <br /><span>15% off</span></a></h3>{/* End .banner-title */}
                    <a href="#" className="banner-link">Shop Now <i className="icon-long-arrow-right" /></a>
                  </div>{/* End .banner-content */}
                </div>{/* End .banner */}
              </div>{/* End .col-lg-3 */}
              <div className="col-lg-6">
                <div className="banner banner-overlay">
                  <a href="#">
                    <img src="assets/images/demos/demo-13/banners/banner-2.jpg" alt="Banner" />
                  </a>
                  <div className="banner-content">
                    <h4 className="banner-subtitle text-white d-none d-sm-block"><a href="#">Amazing Value</a></h4>{/* End .banner-subtitle */}
                    <h3 className="banner-title text-white"><a href="#">Stickers <br />Collection 2023 <br /><span>from Rs. 29/-</span></a></h3>{/* End .banner-title */}
                    <a href="#" className="banner-link">Discover Now <i className="icon-long-arrow-right" /></a>
                  </div>{/* End .banner-content */}
                </div>{/* End .banner */}
              </div>{/* End .col-lg-6 */}
            </div>{/* End .row */}
          </div>{/* End .container */}
          <div className="mb-3" />{/* End .mb-3 */}
          <div className="bg-light pt-3 pb-5">
            <div className="container">
              <div className="heading heading-flex heading-border mb-3">
                <div className="heading-left">
                  <h2 className="title">Hot Deals Products</h2>{/* End .title */}
                </div>{/* End .heading-left */}
                <div className="heading-right">
                  <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="hot-all-link" data-toggle="tab" href="#hot-all-tab" role="tab" aria-controls="hot-all-tab" aria-selected="true">All</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" id="hot-elec-link" data-toggle="tab" href="#hot-elec-tab" role="tab" aria-controls="hot-elec-tab" aria-selected="false">Mobile Skins</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="hot-furn-link" data-toggle="tab" href="#hot-furn-tab" role="tab" aria-controls="hot-furn-tab" aria-selected="false">Laptop skins</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="hot-clot-link" data-toggle="tab" href="#hot-clot-tab" role="tab" aria-controls="hot-clot-tab" aria-selected="false">Stickers</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="hot-acc-link" data-toggle="tab" href="#hot-acc-tab" role="tab" aria-controls="hot-acc-tab" aria-selected="false">Frames</a>
                    </li>
                  </ul>
                </div>{/* End .heading-right */}
              </div>{/* End .heading */}
              <div className="tab-content tab-content-carousel">
                <div className="tab-pane p-0 fade show active" id="hot-all-tab" role="tabpanel" aria-labelledby="hot-all-link">
                  <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                  &quot;nav&quot;: false, 
                                  &quot;dots&quot;: true,
                                  &quot;margin&quot;: 20,
                                  &quot;loop&quot;: false,
                                  &quot;responsive&quot;: {
                                      &quot;0&quot;: {
                                          &quot;items&quot;:2
                                      },
                                      &quot;480&quot;: {
                                          &quot;items&quot;:2
                                      },
                                      &quot;768&quot;: {
                                          &quot;items&quot;:3
                                      },
                                      &quot;992&quot;: {
                                          &quot;items&quot;:4
                                      },
                                      &quot;1280&quot;: {
                                          &quot;items&quot;:5,
                                          &quot;nav&quot;: true
                                      }
                                  }
                              }">
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Mobile skin</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Asthetic design</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">Rs.199/-</span>
                          <span className="old-price">Rs.299/-</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-2.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-countdown" data-until="+9h" data-format="HMS" data-relative="true" data-labels-short="true" />{/* End .product-countdown */}
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Electronics</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Bose - SoundSport  wireless headphones</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$179.99</span>
                          <span className="old-price">Was $199.99</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#69b4ff'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#ff887f'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-3.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Furniture</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa <br />frame charcoal</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$3.050.00</span>
                          <span className="old-price">Was $3.200.00</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#b58555'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#93a6b0'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-4.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Clothes</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$240.00</span>
                          <span className="old-price">Was $310.00</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#b58555'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#93a6b0'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-5.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-countdown" data-until="+7h" data-format="HMS" data-relative="true" data-labels-short="true" />{/* End .product-countdown */}
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Electronics</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Sony - Class LED 2160p Smart 4K Ultra HD</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$1699.99</span>
                          <span className="old-price">Was $1999.99</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-6.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Appliances</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Neato Robotics</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $399.00
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 12 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .owl-carousel */}
                </div>{/* .End .tab-pane */}
                <div className="tab-pane p-0 fade" id="hot-elec-tab" role="tabpanel" aria-labelledby="hot-elec-link">
                  <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                  &quot;nav&quot;: false, 
                                  &quot;dots&quot;: true,
                                  &quot;margin&quot;: 20,
                                  &quot;loop&quot;: false,
                                  &quot;responsive&quot;: {
                                      &quot;0&quot;: {
                                          &quot;items&quot;:2
                                      },
                                      &quot;480&quot;: {
                                          &quot;items&quot;:2
                                      },
                                      &quot;768&quot;: {
                                          &quot;items&quot;:3
                                      },
                                      &quot;992&quot;: {
                                          &quot;items&quot;:4
                                      },
                                      &quot;1280&quot;: {
                                          &quot;items&quot;:5,
                                          &quot;nav&quot;: true
                                      }
                                  }
                              }">
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-4.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Clothes</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$240.00</span>
                          <span className="old-price">Was $310.00</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#b58555'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#93a6b0'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Furniture</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$251.99</span>
                          <span className="old-price">Was $290.00</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-2.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-countdown" data-until="+9h" data-format="HMS" data-relative="true" data-labels-short="true" />{/* End .product-countdown */}
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Electronics</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Bose - SoundSport  wireless headphones</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$179.99</span>
                          <span className="old-price">Was $199.99</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#69b4ff'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#ff887f'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-3.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Furniture</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa <br />frame charcoal</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$3.050.00</span>
                          <span className="old-price">Was $3.200.00</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#b58555'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#93a6b0'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-5.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-countdown" data-until="+7h" data-format="HMS" data-relative="true" data-labels-short="true" />{/* End .product-countdown */}
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Electronics</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Sony - Class LED 2160p Smart 4K Ultra HD</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$1699.99</span>
                          <span className="old-price">Was $1999.99</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .owl-carousel */}
                </div>{/* .End .tab-pane */}
                <div className="tab-pane p-0 fade" id="hot-furn-tab" role="tabpanel" aria-labelledby="hot-furn-link">
                  <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                  &quot;nav&quot;: false, 
                                  &quot;dots&quot;: true,
                                  &quot;margin&quot;: 20,
                                  &quot;loop&quot;: false,
                                  &quot;responsive&quot;: {
                                      &quot;0&quot;: {
                                          &quot;items&quot;:2
                                      },
                                      &quot;480&quot;: {
                                          &quot;items&quot;:2
                                      },
                                      &quot;768&quot;: {
                                          &quot;items&quot;:3
                                      },
                                      &quot;992&quot;: {
                                          &quot;items&quot;:4
                                      },
                                      &quot;1280&quot;: {
                                          &quot;items&quot;:5,
                                          &quot;nav&quot;: true
                                      }
                                  }
                              }">
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-3.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Furniture</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa <br />frame charcoal</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$3.050.00</span>
                          <span className="old-price">Was $3.200.00</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#b58555'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#93a6b0'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-5.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-countdown" data-until="+7h" data-format="HMS" data-relative="true" data-labels-short="true" />{/* End .product-countdown */}
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Electronics</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Sony - Class LED 2160p Smart 4K Ultra HD</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$1699.99</span>
                          <span className="old-price">Was $1999.99</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-6.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Appliances</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Neato Robotics</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $399.00
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 12 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-4.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Clothes</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$240.00</span>
                          <span className="old-price">Was $310.00</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#b58555'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#93a6b0'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Furniture</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$251.99</span>
                          <span className="old-price">Was $290.00</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-2.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-countdown" data-until="+9h" data-format="HMS" data-relative="true" data-labels-short="true" />{/* End .product-countdown */}
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Electronics</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Bose - SoundSport  wireless headphones</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$179.99</span>
                          <span className="old-price">Was $199.99</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#69b4ff'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#ff887f'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .owl-carousel */}
                </div>{/* .End .tab-pane */}
                <div className="tab-pane p-0 fade" id="hot-clot-tab" role="tabpanel" aria-labelledby="hot-clot-link">
                  <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                  &quot;nav&quot;: false, 
                                  &quot;dots&quot;: true,
                                  &quot;margin&quot;: 20,
                                  &quot;loop&quot;: false,
                                  &quot;responsive&quot;: {
                                      &quot;0&quot;: {
                                          &quot;items&quot;:2
                                      },
                                      &quot;480&quot;: {
                                          &quot;items&quot;:2
                                      },
                                      &quot;768&quot;: {
                                          &quot;items&quot;:3
                                      },
                                      &quot;992&quot;: {
                                          &quot;items&quot;:4
                                      },
                                      &quot;1280&quot;: {
                                          &quot;items&quot;:5,
                                          &quot;nav&quot;: true
                                      }
                                  }
                              }">
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Furniture</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$251.99</span>
                          <span className="old-price">Was $290.00</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-3.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Furniture</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa <br />frame charcoal</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$3.050.00</span>
                          <span className="old-price">Was $3.200.00</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#b58555'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#93a6b0'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-4.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Clothes</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$240.00</span>
                          <span className="old-price">Was $310.00</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#b58555'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#93a6b0'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-2.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-countdown" data-until="+9h" data-format="HMS" data-relative="true" data-labels-short="true" />{/* End .product-countdown */}
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Electronics</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Bose - SoundSport  wireless headphones</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$179.99</span>
                          <span className="old-price">Was $199.99</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#69b4ff'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#ff887f'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .owl-carousel */}
                </div>{/* .End .tab-pane */}
                <div className="tab-pane p-0 fade" id="hot-acc-tab" role="tabpanel" aria-labelledby="hot-acc-link">
                  <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                  &quot;nav&quot;: false, 
                                  &quot;dots&quot;: true,
                                  &quot;margin&quot;: 20,
                                  &quot;loop&quot;: false,
                                  &quot;responsive&quot;: {
                                      &quot;0&quot;: {
                                          &quot;items&quot;:2
                                      },
                                      &quot;480&quot;: {
                                          &quot;items&quot;:2
                                      },
                                      &quot;768&quot;: {
                                          &quot;items&quot;:3
                                      },
                                      &quot;992&quot;: {
                                          &quot;items&quot;:4
                                      },
                                      &quot;1280&quot;: {
                                          &quot;items&quot;:5,
                                          &quot;nav&quot;: true
                                      }
                                  }
                              }">
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-6.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Appliances</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Neato Robotics</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          $399.00
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 12 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-1.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Furniture</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Butler Stool Ladder</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$251.99</span>
                          <span className="old-price">Was $290.00</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-5.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-countdown" data-until="+7h" data-format="HMS" data-relative="true" data-labels-short="true" />{/* End .product-countdown */}
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Electronics</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Sony - Class LED 2160p Smart 4K Ultra HD</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$1699.99</span>
                          <span className="old-price">Was $1999.99</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 10 Reviews )</span>
                        </div>{/* End .rating-container */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-3.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Furniture</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Can 2-Seater Sofa <br />frame charcoal</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$3.050.00</span>
                          <span className="old-price">Was $3.200.00</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#b58555'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#93a6b0'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                    <div className="product">
                      <figure className="product-media">
                        <span className="product-label label-sale">Sale</span>
                        <a href="product.html">
                          <img src="assets/images/demos/demo-13/products/product-4.jpg" alt="Product image" className="product-image" />
                        </a>
                        <div className="product-action-vertical">
                          <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                          <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                          <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                        </div>{/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                        </div>{/* End .product-action */}
                      </figure>{/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Clothes</a>
                        </div>{/* End .product-cat */}
                        <h3 className="product-title"><a href="product.html">Tan suede biker jacket</a></h3>{/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">$240.00</span>
                          <span className="old-price">Was $310.00</span>
                        </div>{/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                          </div>{/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>{/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a href="#" className="active" style={{background: '#b58555'}}><span className="sr-only">Color name</span></a>
                          <a href="#" style={{background: '#93a6b0'}}><span className="sr-only">Color name</span></a>
                        </div>{/* End .product-nav */}
                      </div>{/* End .product-body */}
                    </div>{/* End .product */}
                  </div>{/* End .owl-carousel */}
                </div>{/* .End .tab-pane */}
              </div>{/* End .tab-content */}
            </div>{/* End .container */}
          </div>{/* End .bg-light pt-5 pb-5 */}
          <div className="mb-3" />{/* End .mb-3 */}
          <div className="container electronics">
            <div className="heading heading-flex heading-border mb-3">
              <div className="heading-left">
                <h2 className="title">Mobile Skins</h2>{/* End .title */}
              </div>{/* End .heading-left */}
              <div className="heading-right">
                <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="elec-new-link" data-toggle="tab" href="#elec-new-tab" role="tab" aria-controls="elec-new-tab" aria-selected="true">New</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="elec-featured-link" data-toggle="tab" href="#elec-featured-tab" role="tab" aria-controls="elec-featured-tab" aria-selected="false">Featured</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="elec-best-link" data-toggle="tab" href="#elec-best-tab" role="tab" aria-controls="elec-best-tab" aria-selected="false">Best Seller</a>
                  </li>
                </ul>
              </div>{/* End .heading-right */}
            </div>{/* End .heading */}
            <div className="tab-content tab-content-carousel">
              <div className="tab-pane p-0 fade show active" id="elec-new-tab" role="tabpanel" aria-labelledby="elec-new-link">
                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                              &quot;nav&quot;: false, 
                              &quot;dots&quot;: true,
                              &quot;margin&quot;: 20,
                              &quot;loop&quot;: false,
                              &quot;responsive&quot;: {
                                  &quot;0&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;480&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;768&quot;: {
                                      &quot;items&quot;:3
                                  },
                                  &quot;992&quot;: {
                                      &quot;items&quot;:4
                                  },
                                  &quot;1280&quot;: {
                                      &quot;items&quot;:5,
                                      &quot;nav&quot;: true
                                  }
                              }
                          }">
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-new">New</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-6.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Appliances</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Neato Robotics</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $399.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 12 Reviews )</span>
                      </div>{/* End .rating-container */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-top">Top</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-7.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Laptops</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $1,199.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>{/* End .rating-container */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-8.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Audio</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $79.99
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 6 Reviews )</span>
                      </div>{/* End .rating-container */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-new">New</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-9.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Tablets</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $899.99
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-sale">Sale</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-10.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Cell Phone</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL 128GB</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$350.00</span>
                        <span className="old-price">Was $410.00</span>
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 10 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                </div>{/* End .owl-carousel */}
              </div>{/* .End .tab-pane */}
              <div className="tab-pane p-0 fade" id="elec-featured-tab" role="tabpanel" aria-labelledby="elec-featured-link">
                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                              &quot;nav&quot;: false, 
                              &quot;dots&quot;: true,
                              &quot;margin&quot;: 20,
                              &quot;loop&quot;: false,
                              &quot;responsive&quot;: {
                                  &quot;0&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;480&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;768&quot;: {
                                      &quot;items&quot;:3
                                  },
                                  &quot;992&quot;: {
                                      &quot;items&quot;:4
                                  },
                                  &quot;1280&quot;: {
                                      &quot;items&quot;:5,
                                      &quot;nav&quot;: true
                                  }
                              }
                          }">
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-new">New</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-9.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Tablets</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $899.99
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-sale">Sale</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-10.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Cell Phone</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL 128GB</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $899.99
                        <span className="new-price">$350.00</span>
                        <span className="old-price">Was $410.00</span>
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 10 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-8.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Audio</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $79.99
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 6 Reviews )</span>
                      </div>{/* End .rating-container */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-top">Top</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-7.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Laptops</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $1,199.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>{/* End .rating-container */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                </div>{/* End .owl-carousel */}
              </div>{/* .End .tab-pane */}
              <div className="tab-pane p-0 fade" id="elec-best-tab" role="tabpanel" aria-labelledby="elec-best-link">
                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                              &quot;nav&quot;: false, 
                              &quot;dots&quot;: true,
                              &quot;margin&quot;: 20,
                              &quot;loop&quot;: false,
                              &quot;responsive&quot;: {
                                  &quot;0&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;480&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;768&quot;: {
                                      &quot;items&quot;:3
                                  },
                                  &quot;992&quot;: {
                                      &quot;items&quot;:4
                                  },
                                  &quot;1280&quot;: {
                                      &quot;items&quot;:5,
                                      &quot;nav&quot;: true
                                  }
                              }
                          }">
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-top">Top</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-7.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Laptops</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">MacBook Pro 13" Display, i5</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $1,199.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>{/* End .rating-container */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-8.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Audio</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Bose - SoundLink Bluetooth Speaker</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $79.99
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 6 Reviews )</span>
                      </div>{/* End .rating-container */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-new">New</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-6.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Appliances</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Neato Robotics</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $399.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 12 Reviews )</span>
                      </div>{/* End .rating-container */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-sale">Sale</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-10.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Cell Phone</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Google - Pixel 3 XL 128GB</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $899.99
                        <span className="new-price">$350.00</span>
                        <span className="old-price">Was $410.00</span>
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 10 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-new">New</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-9.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Tablets</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Apple - 11 Inch iPad Pro  with Wi-Fi 256GB </a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $899.99
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#edd2c8'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#eaeaec'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                </div>{/* End .owl-carousel */}
              </div>{/* .End .tab-pane */}
            </div>{/* End .tab-content */}
          </div>{/* End .container */}
          <div className="mb-3" />{/* End .mb-3 */}
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner banner-overlay banner-overlay-light">
                  <a href="#">
                    <img src="assets/images/demos/demo-13/banners/banner-4.jpg" alt="Banner" />
                  </a>
                  <div className="banner-content">
                    <h4 className="banner-subtitle d-none d-sm-block"><a href="#">Spring Sale is Coming</a></h4>{/* End .banner-subtitle */}
                    <h3 className="banner-title"><a href="#">All Smart Watches <br />Discount <br /><span className="text-primary">15% off</span></a></h3>{/* End .banner-title */}
                    <a href="#" className="banner-link banner-link-dark">Discover Now <i className="icon-long-arrow-right" /></a>
                  </div>{/* End .banner-content */}
                </div>{/* End .banner */}
              </div>{/* End .col-lg-6 */}
              <div className="col-lg-6">
                <div className="banner banner-overlay">
                  <a href="#">
                    <img src="assets/images/demos/demo-13/banners/banner-5.png" alt="Banner" />
                  </a>
                  <div className="banner-content">
                    <h4 className="banner-subtitle text-white  d-none d-sm-block"><a href="#">Amazing Value</a></h4>{/* End .banner-subtitle */}
                    <h3 className="banner-title text-white"><a href="#">Headphones Trending <br />JBL Harman <br /><span>from $59,99</span></a></h3>{/* End .banner-title */}
                    <a href="#" className="banner-link">Discover Now <i className="icon-long-arrow-right" /></a>
                  </div>{/* End .banner-content */}
                </div>{/* End .banner */}
              </div>{/* End .col-lg-6 */}
            </div>{/* End .row */}
          </div>{/* End .container */}
          <div className="mb-1" />{/* End .mb-1 */}
          <div className="container furniture">
            <div className="heading heading-flex heading-border mb-3">
              <div className="heading-left">
                <h2 className="title">Laptop Skins</h2>{/* End .title */}
              </div>{/* End .heading-left */}
              <div className="heading-right">
                <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="furn-new-link" data-toggle="tab" href="#furn-new-tab" role="tab" aria-controls="furn-new-tab" aria-selected="true">New</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="furn-featured-link" data-toggle="tab" href="#furn-featured-tab" role="tab" aria-controls="furn-featured-tab" aria-selected="false">Featured</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="furn-best-link" data-toggle="tab" href="#furn-best-tab" role="tab" aria-controls="furn-best-tab" aria-selected="false">Best Seller</a>
                  </li>
                </ul>
              </div>{/* End .heading-right */}
            </div>{/* End .heading */}
            <div className="tab-content tab-content-carousel">
              <div className="tab-pane p-0 fade show active" id="furn-new-tab" role="tabpanel" aria-labelledby="furn-new-link">
                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                              &quot;nav&quot;: false, 
                              &quot;dots&quot;: true,
                              &quot;margin&quot;: 20,
                              &quot;loop&quot;: false,
                              &quot;responsive&quot;: {
                                  &quot;0&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;480&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;768&quot;: {
                                      &quot;items&quot;:3
                                  },
                                  &quot;992&quot;: {
                                      &quot;items&quot;:4
                                  },
                                  &quot;1280&quot;: {
                                      &quot;items&quot;:5,
                                      &quot;nav&quot;: true
                                  }
                              }
                          }">
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-new">New</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-11.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Tables</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Block Side Table/Trolley</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $229.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 12 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#e2e2e2'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-12.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Sofas</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Roots Sofa Bed</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $1,199.99
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>{/* End .rating-container */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-sale">Sale</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-13.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Lighting</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Carronade Large Suspension Lamp</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$892.00</span>
                        <span className="old-price">Was $939.00</span>
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 6 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#dddad5'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#825a45'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-14.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Chairs</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Wingback Chair</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $210.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '40%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#999999'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#cc9999'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-sale">Sale</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-15.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Chairs</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Flow Slim Armchair</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$737,00</span>
                        <span className="old-price">Was $820.00</span>
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 10 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#877666'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                </div>{/* End .owl-carousel */}
              </div>{/* .End .tab-pane */}
              <div className="tab-pane p-0 fade" id="furn-featured-tab" role="tabpanel" aria-labelledby="furn-featured-link">
                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                              &quot;nav&quot;: false, 
                              &quot;dots&quot;: true,
                              &quot;margin&quot;: 20,
                              &quot;loop&quot;: false,
                              &quot;responsive&quot;: {
                                  &quot;0&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;480&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;768&quot;: {
                                      &quot;items&quot;:3
                                  },
                                  &quot;992&quot;: {
                                      &quot;items&quot;:4
                                  },
                                  &quot;1280&quot;: {
                                      &quot;items&quot;:5,
                                      &quot;nav&quot;: true
                                  }
                              }
                          }">
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-sale">Sale</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-13.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Lighting</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Carronade Large Suspension Lamp</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$892.00</span>
                        <span className="old-price">Was $939.00</span>
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 6 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#dddad5'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#825a45'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-14.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Chairs</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Wingback Chair</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $210.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '40%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#999999'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#cc9999'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-new">New</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-11.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Tables</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Block Side Table/Trolley</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $229.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 12 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#e2e2e2'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-sale">Sale</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-15.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Chairs</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Flow Slim Armchair</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$737,00</span>
                        <span className="old-price">Was $820.00</span>
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 10 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#877666'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-12.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Sofas</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Roots Sofa Bed</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $1,199.99
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>{/* End .rating-container */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                </div>{/* End .owl-carousel */}
              </div>{/* .End .tab-pane */}
              <div className="tab-pane p-0 fade" id="furn-best-tab" role="tabpanel" aria-labelledby="furn-best-link">
                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                              &quot;nav&quot;: false, 
                              &quot;dots&quot;: true,
                              &quot;margin&quot;: 20,
                              &quot;loop&quot;: false,
                              &quot;responsive&quot;: {
                                  &quot;0&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;480&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;768&quot;: {
                                      &quot;items&quot;:3
                                  },
                                  &quot;992&quot;: {
                                      &quot;items&quot;:4
                                  },
                                  &quot;1280&quot;: {
                                      &quot;items&quot;:5,
                                      &quot;nav&quot;: true
                                  }
                              }
                          }">
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-12.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Sofas</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Roots Sofa Bed</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $1,199.99
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>{/* End .rating-container */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-sale">Sale</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-13.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Lighting</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Carronade Large Suspension Lamp</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$892.00</span>
                        <span className="old-price">Was $939.00</span>
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 6 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#dddad5'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#825a45'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-14.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Chairs</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Wingback Chair</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $210.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '40%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#999999'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#cc9999'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-sale">Sale</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-15.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Chairs</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Flow Slim Armchair</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">$737,00</span>
                        <span className="old-price">Was $820.00</span>
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 10 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#877666'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                </div>{/* End .owl-carousel */}
              </div>{/* .End .tab-pane */}
            </div>{/* End .tab-content */}
          </div>{/* End .container */}
          <div className="mb-3" />{/* End .mb-3 */}
          <div className="container clothing ">
            <div className="heading heading-flex heading-border mb-3">
              <div className="heading-left">
                <h2 className="title">Stickers</h2>{/* End .title */}
              </div>{/* End .heading-left */}
              <div className="heading-right">
                <ul className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="clot-new-link" data-toggle="tab" href="#clot-new-tab" role="tab" aria-controls="clot-new-tab" aria-selected="true">New</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="clot-featured-link" data-toggle="tab" href="#clot-featured-tab" role="tab" aria-controls="clot-featured-tab" aria-selected="false">Featured</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="clot-best-link" data-toggle="tab" href="#clot-best-tab" role="tab" aria-controls="clot-best-tab" aria-selected="false">Best Seller</a>
                  </li>
                </ul>
              </div>{/* End .heading-right */}
            </div>{/* End .heading */}
            <div className="tab-content tab-content-carousel">
              <div className="tab-pane p-0 fade show active" id="clot-new-tab" role="tabpanel" aria-labelledby="clot-new-link">
                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                              &quot;nav&quot;: false, 
                              &quot;dots&quot;: true,
                              &quot;margin&quot;: 20,
                              &quot;loop&quot;: false,
                              &quot;responsive&quot;: {
                                  &quot;0&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;480&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;768&quot;: {
                                      &quot;items&quot;:3
                                  },
                                  &quot;992&quot;: {
                                      &quot;items&quot;:4
                                  },
                                  &quot;1280&quot;: {
                                      &quot;items&quot;:5,
                                      &quot;nav&quot;: true
                                  }
                              }
                          }">
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-16.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Shoes</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Beige faux suede runner  trainers</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $64.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 12 Reviews )</span>
                      </div>{/* End .rating-container */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-new">New</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-17.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Accessories</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Black boucle check scarf</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $36.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 10 Reviews )</span>
                      </div>{/* End .rating-container */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-18.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">T-Shirts</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Red stripe tie front shirt</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $56.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 6 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#dddad5'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#825a45'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-19.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Bags</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Triple compartment  cross body bag</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $64.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#f1f1f1'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-20.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Shirts</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Oxford grandad shirt</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $44.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 3 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#b8b8b8'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#ebebeb'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                </div>{/* End .owl-carousel */}
              </div>{/* .End .tab-pane */}
              <div className="tab-pane p-0 fade" id="clot-featured-tab" role="tabpanel" aria-labelledby="clot-featured-link">
                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                              &quot;nav&quot;: false, 
                              &quot;dots&quot;: true,
                              &quot;margin&quot;: 20,
                              &quot;loop&quot;: false,
                              &quot;responsive&quot;: {
                                  &quot;0&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;480&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;768&quot;: {
                                      &quot;items&quot;:3
                                  },
                                  &quot;992&quot;: {
                                      &quot;items&quot;:4
                                  },
                                  &quot;1280&quot;: {
                                      &quot;items&quot;:5,
                                      &quot;nav&quot;: true
                                  }
                              }
                          }">
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-18.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">T-Shirts</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Red stripe tie front shirt</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $56.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 6 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#dddad5'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#825a45'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-19.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Bags</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Triple compartment  cross body bag</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $64.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#f1f1f1'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-16.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Shoes</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Beige faux suede runner  trainers</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $64.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 12 Reviews )</span>
                      </div>{/* End .rating-container */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-20.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Shirts</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Oxford grandad shirt</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $44.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 3 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#b8b8b8'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#ebebeb'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-new">New</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-17.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Accessories</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Black boucle check scarf</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $36.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 10 Reviews )</span>
                      </div>{/* End .rating-container */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                </div>{/* End .owl-carousel */}
              </div>{/* .End .tab-pane */}
              <div className="tab-pane p-0 fade" id="clot-best-tab" role="tabpanel" aria-labelledby="clot-best-link">
                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                              &quot;nav&quot;: false, 
                              &quot;dots&quot;: true,
                              &quot;margin&quot;: 20,
                              &quot;loop&quot;: false,
                              &quot;responsive&quot;: {
                                  &quot;0&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;480&quot;: {
                                      &quot;items&quot;:2
                                  },
                                  &quot;768&quot;: {
                                      &quot;items&quot;:3
                                  },
                                  &quot;992&quot;: {
                                      &quot;items&quot;:4
                                  },
                                  &quot;1280&quot;: {
                                      &quot;items&quot;:5,
                                      &quot;nav&quot;: true
                                  }
                              }
                          }">
                  <div className="product">
                    <figure className="product-media">
                      <span className="product-label label-new">New</span>
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-17.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Accessories</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Black boucle check scarf</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $36.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 10 Reviews )</span>
                      </div>{/* End .rating-container */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-20.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Shirts</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Oxford grandad shirt</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $44.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '100%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 3 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#b8b8b8'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#ebebeb'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-19.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Bags</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Triple compartment  cross body bag</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $64.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '80%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 4 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#f1f1f1'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#333333'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                  <div className="product">
                    <figure className="product-media">
                      <a href="product.html">
                        <img src="assets/images/demos/demo-13/products/product-18.jpg" alt="Product image" className="product-image" />
                      </a>
                      <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                        <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                        <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                      </div>{/* End .product-action-vertical */}
                      <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                      </div>{/* End .product-action */}
                    </figure>{/* End .product-media */}
                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">T-Shirts</a>
                      </div>{/* End .product-cat */}
                      <h3 className="product-title"><a href="product.html">Red stripe tie front shirt</a></h3>{/* End .product-title */}
                      <div className="product-price">
                        $56.00
                      </div>{/* End .product-price */}
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val" style={{width: '60%'}} />{/* End .ratings-val */}
                        </div>{/* End .ratings */}
                        <span className="ratings-text">( 6 Reviews )</span>
                      </div>{/* End .rating-container */}
                      <div className="product-nav product-nav-dots">
                        <a href="#" className="active" style={{background: '#dddad5'}}><span className="sr-only">Color name</span></a>
                        <a href="#" style={{background: '#825a45'}}><span className="sr-only">Color name</span></a>
                      </div>{/* End .product-nav */}
                    </div>{/* End .product-body */}
                  </div>{/* End .product */}
                </div>{/* End .owl-carousel */}
              </div>{/* .End .tab-pane */}
            </div>{/* End .tab-content */}
          </div>{/* End .container */}
          
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
          <div className="blog-posts bg-light pt-4 pb-7">
            <div className="container">
              <h2 className="title">From Our Blog</h2>{/* End .title-lg text-center */}
              <p>From our blog section we will represent our instagram page ( reels posts etc )</p>
              <div className="owl-carousel owl-simple" data-toggle="owl" data-owl-options="{
                          &quot;nav&quot;: false, 
                          &quot;dots&quot;: true,
                          &quot;items&quot;: 3,
                          &quot;margin&quot;: 20,
                          &quot;loop&quot;: false,
                          &quot;responsive&quot;: {
                              &quot;0&quot;: {
                                  &quot;items&quot;:1
                              },
                              &quot;600&quot;: {
                                  &quot;items&quot;:2
                              },
                              &quot;992&quot;: {
                                  &quot;items&quot;:3
                              },
                              &quot;1280&quot;: {
                                  &quot;items&quot;:4,
                                  &quot;nav&quot;: true, 
                                  &quot;dots&quot;: false
                              }
                          }
                      }">
                <article className="entry">
                  <figure className="entry-media">
                    <a href="single.html">
                      <img src="assets/images/demos/demo-13/blog/post-1.jpg" alt="image desc" />
                    </a>
                  </figure>{/* End .entry-media */}
                  <div className="entry-body">
                    <div className="entry-meta">
                      <a href="#">Nov 22, 2018</a>, 0 Comments
                    </div>{/* End .entry-meta */}
                    <h3 className="entry-title">
                      <a href="single.html">Sed adipiscing ornare.</a>
                    </h3>{/* End .entry-title */}
                    <div className="entry-content">
                      <p>Lorem ipsum dolor consectetuer adipiscing elit. Phasellus hendrerit. Pelletesque aliquet nibh ...</p>
                      <a href="single.html" className="read-more">Read More</a>
                    </div>{/* End .entry-content */}
                  </div>{/* End .entry-body */}
                </article>{/* End .entry */}
                <article className="entry">
                  <figure className="entry-media">
                    <a href="single.html">
                      <img src="assets/images/demos/demo-13/blog/post-2.jpg" alt="image desc" />
                    </a>
                  </figure>{/* End .entry-media */}
                  <div className="entry-body">
                    <div className="entry-meta">
                      <a href="#">Dec 12, 2018</a>, 0 Comments
                    </div>{/* End .entry-meta */}
                    <h3 className="entry-title">
                      <a href="single.html">Vivamus vestibulum ntulla.</a>
                    </h3>{/* End .entry-title */}
                    <div className="entry-content">
                      <p>Phasellus hendrerit. Pelletesque aliquet nibh necurna In nisi neque, aliquet vel, dapibus id ... </p>
                      <a href="single.html" className="read-more">Read More</a>
                    </div>{/* End .entry-content */}
                  </div>{/* End .entry-body */}
                </article>{/* End .entry */}
                <article className="entry">
                  <figure className="entry-media">
                    <a href="single.html">
                      <img src="assets/images/demos/demo-13/blog/post-3.jpg" alt="image desc" />
                    </a>
                  </figure>{/* End .entry-media */}
                  <div className="entry-body">
                    <div className="entry-meta">
                      <a href="#">Dec 19, 2018</a>, 2 Comments
                    </div>{/* End .entry-meta */}
                    <h3 className="entry-title">
                      <a href="single.html">Praesent placerat risus.</a>
                    </h3>{/* End .entry-title */}
                    <div className="entry-content">
                      <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc ...</p>
                      <a href="single.html" className="read-more">Read More</a>
                    </div>{/* End .entry-content */}
                  </div>{/* End .entry-body */}
                </article>{/* End .entry */}
                <article className="entry">
                  <figure className="entry-media">
                    <a href="single.html">
                      <img src="assets/images/demos/demo-13/blog/post-4.jpg" alt="image desc" />
                    </a>
                  </figure>{/* End .entry-media */}
                  <div className="entry-body">
                    <div className="entry-meta">
                      <a href="#">Dec 19, 2018</a>, 2 Comments
                    </div>{/* End .entry-meta */}
                    <h3 className="entry-title">
                      <a href="single.html">Fusce pellentesque suscipit.</a>
                    </h3>{/* End .entry-title */}
                    <div className="entry-content">
                      <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero augue. </p>
                      <a href="single.html" className="read-more">Read More</a>
                    </div>{/* End .entry-content */}
                  </div>{/* End .entry-body */}
                </article>{/* End .entry */}
                <article className="entry">
                  <figure className="entry-media">
                    <a href="single.html">
                      <img src="assets/images/demos/demo-13/blog/post-1.jpg" alt="image desc" />
                    </a>
                  </figure>{/* End .entry-media */}
                  <div className="entry-body">
                    <div className="entry-meta">
                      <a href="#">Nov 22, 2018</a>, 0 Comments
                    </div>{/* End .entry-meta */}
                    <h3 className="entry-title">
                      <a href="single.html">Sed adipiscing ornare.</a>
                    </h3>{/* End .entry-title */}
                    <div className="entry-content">
                      <p>Lorem ipsum dolor consectetuer adipiscing elit. Phasellus hendrerit. Pelletesque aliquet nibh ...</p>
                      <a href="single.html" className="read-more">Read More</a>
                    </div>{/* End .entry-content */}
                  </div>{/* End .entry-body */}
                </article>{/* End .entry */}
              </div>{/* End .owl-carousel */}
            </div>{/* End .container */}
          </div>{/* End .blog-posts */}
        </main>{/* End .main */}
        <Footer/>
        {/* End .footer */}
      </div>{/* End .page-wrapper */}
      <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up" /></button>

      {/* Mobile Menu */}

      <div className="mobile-menu-overlay" />{/* End .mobil-menu-overlay */}
      <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close"><i className="icon-close" /></span>
          <form action="#" method="get" className="mobile-search">
            <label htmlFor="mobile-search" className="sr-only">Search</label>
            <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
            <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
          </form>
          <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="mobile-menu-link" data-toggle="tab" href="#mobile-menu-tab" role="tab" aria-controls="mobile-menu-tab" aria-selected="true">Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="mobile-cats-link" data-toggle="tab" href="#mobile-cats-tab" role="tab" aria-controls="mobile-cats-tab" aria-selected="false">Categories</a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="mobile-menu-tab" role="tabpanel" aria-labelledby="mobile-menu-link">
              <nav className="mobile-nav">
                <ul className="mobile-menu">
                  <li className="active">
                    <a href="index.html">Mobile Skins</a>
                    <ul>
                    <li><a href="#">TEXTURED SKINS</a></li>
                    <li><a href="#">PRINTED SKINS</a></li>
                    <li><a href="#">STICKERSBABA SPECIAL</a></li>
                    <li><a href="#">CUSTOM SKINS</a></li>
                    <li><a href="#">TRANSPARENT SKINS</a></li>
                    <li><a href="#">ANIME COLLECTION</a></li>
                    <li><a href="#">ASTHECTIC COLLECTION</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="category.html">Laptop Skins</a>
                    <ul>
                      <li><a href="category-list.html">NEW LAUNCH</a></li>
                      <li><a href="category-2cols.html"><span>MACBOOK SKINS<span className="tip tip-hot">Hot</span></span></a></li>
                      <li><a href="category.html">ANIME LAPTOP SKINS</a></li>
                      <li><a href="category-4cols.html">DESIGNER SKINS</a></li>
                      <li><a href="category-boxed.html"><span>DC &amp; MARVEL LAPTOP SKINS<span className="tip tip-hot">Hot</span></span></a></li>
                      <li><a href="category-fullwidth.html">ASTHETIC LAPTOP SKINS</a></li>
                      <li><a href="product-category-fullwidth.html"><span>FICTIONAL COLLECTION<span className="tip tip-new">New</span></span></a></li>
                      
                      
                    </ul>
                  </li>
                  <li>
                    <a href="product.html" className="sf-with-ul">Stickers</a>
                    <ul>
                      <li><a href="product.html">ALL STICKERS</a></li>
                      <li><a href="product-centered.html">ANIME STICKERS</a></li>
                      <li><a href="product-extended.html"><span>COMPUTER GEEK STICKERS<span className="tip tip-new">New</span></span></a></li>
                      <li><a href="product-gallery.html">RANDOM STICKERS</a></li>
                      <li><a href="product-sticky.html"><span>HARRY POTTER STICKERS<span className="tip tip-hot">Hot</span></span></a></li>
                      <li><a href="product-sidebar.html"><span>HEROES STICKERS<span className="tip tip-new">New</span></span></a></li>
                      <li><a href="product-fullwidth.html">K-POP STICKERS</a></li>
                      <li><a href="product-masonry.html">MIX STYLE STICKERS</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul>
                      
                      <li><a href="login.html">Login</a></li>
                      <li><a href="cart.html">Cart</a></li>
                      <li><a href="checkout.html">Checkout</a></li>
                      <li><a href="wishlist.html">Wishlist</a></li>
                      <li><a href="faq.html">FAQs</a></li>
                      <li><a href="404.html">Error 404</a></li>
                      <li><a href="coming-soon.html">Coming Soon</a></li>

                      <li>
                        <a href="about.html">About</a>
                        <ul>
                          <li><a href="about.html">About 01</a></li>
                          <li><a href="about-2.html">About 02</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                        <ul>
                          <li><a href="contact.html">Contact 01</a></li>
                          <li><a href="contact-2.html">Contact 02</a></li>
                        </ul>
                      </li>
                      
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">Frames</a>
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
                  <li>
                    <a href="elements-list.html">Elements</a>
                    <ul>
                      <li><a href="elements-products.html">Products</a></li>
                      <li><a href="elements-typography.html">Typography</a></li>
                      <li><a href="elements-titles.html">Titles</a></li>
                      <li><a href="elements-banners.html">Banners</a></li>
                      <li><a href="elements-product-category.html">Product Category</a></li>
                      <li><a href="elements-video-banners.html">Video Banners</a></li>
                      <li><a href="elements-buttons.html">Buttons</a></li>
                      <li><a href="elements-accordions.html">Accordions</a></li>
                      <li><a href="elements-tabs.html">Tabs</a></li>
                      <li><a href="elements-testimonials.html">Testimonials</a></li>
                      <li><a href="elements-blog-posts.html">Blog Posts</a></li>
                      <li><a href="elements-portfolio.html">Portfolio</a></li>
                      <li><a href="elements-cta.html">Call to Action</a></li>
                      <li><a href="elements-icon-boxes.html">Icon Boxes</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>{/* End .mobile-nav */}
            </div>{/* .End .tab-pane */}
            <div className="tab-pane fade" id="mobile-cats-tab" role="tabpanel" aria-labelledby="mobile-cats-link">
              <nav className="mobile-cats-nav">
                <ul className="mobile-cats-menu">
                  <li><a className="mobile-cats-lead" href="#">Daily offers</a></li>
                  <li><a className="mobile-cats-lead" href="#">Gift Ideas</a></li>
                  <li><a href="#">Beds</a></li>
                  <li><a href="#">Lighting</a></li>
                  <li><a href="#">Sofas &amp; Sleeper sofas</a></li>
                  <li><a href="#">Storage</a></li>
                  <li><a href="#">Armchairs &amp; Chaises</a></li>
                  <li><a href="#">Decoration </a></li>
                  <li><a href="#">Kitchen Cabinets</a></li>
                  <li><a href="#">Coffee &amp; Tables</a></li>
                  <li><a href="#">Outdoor Furniture </a></li>
                </ul>{/* End .mobile-cats-menu */}
              </nav>{/* End .mobile-cats-nav */}
            </div>{/* .End .tab-pane */}
          </div>{/* End .tab-content */}
          <div>


                <i className=""/>
                <Link to="/corporate" >
                <button>
                <p className="text-dark font-weight-bold">Login </p>
                </button>
                </Link>
              


          </div>
          <div className="social-icons">
            <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f" /></a>
            <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter" /></a>
            <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram" /></a>
          </div>{/* End .social-icons */}
        </div>{/* End .mobile-menu-wrapper */}
      </div>{/* End .mobile-menu-container */}
      {/* Sign in / Register Modal */}
      <div className="modal fade" id="signin-modal" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="icon-close" /></span>
              </button>
              <div className="form-box">
                <div className="form-tab">
                  <ul className="nav nav-pills nav-fill nav-border-anim" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="tab-content-5">
                    <div className="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                      <form action="#">
                        <div className="form-group">
                          <label htmlFor="singin-email">Username or email address *</label>
                          <input type="text" className="form-control" id="singin-email" name="singin-email" required />
                        </div>{/* End .form-group */}
                        <div className="form-group">
                          <label htmlFor="singin-password">Password *</label>
                          <input type="password" className="form-control" id="singin-password" name="singin-password" required />
                        </div>{/* End .form-group */}
                        <div className="form-footer">
                          <button type="submit" className="btn btn-outline-primary-2">
                            <span>LOG IN</span>
                            <i className="icon-long-arrow-right" />
                          </button>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="signin-remember" />
                            <label className="custom-control-label" htmlFor="signin-remember">Remember Me</label>
                          </div>{/* End .custom-checkbox */}
                          <a href="#" className="forgot-link">Forgot Your Password?</a>
                        </div>{/* End .form-footer */}
                      </form>
                      <div className="form-choice">
                        <p className="text-center">or sign in with</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-g">
                              <i className="icon-google" />
                              Login With Google
                            </a>
                          </div>{/* End .col-6 */}
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-f">
                              <i className="icon-facebook-f" />
                              Login With Facebook
                            </a>
                          </div>{/* End .col-6 */}
                        </div>{/* End .row */}
                      </div>{/* End .form-choice */}
                    </div>{/* .End .tab-pane */}
                    <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                      <form action="#">
                        <div className="form-group">
                          <label htmlFor="register-email">Your email address *</label>
                          <input type="email" className="form-control" id="register-email" name="register-email" required />
                        </div>{/* End .form-group */}
                        <div className="form-group">
                          <label htmlFor="register-password">Password *</label>
                          <input type="password" className="form-control" id="register-password" name="register-password" required />
                        </div>{/* End .form-group */}
                        <div className="form-footer">
                          <button type="submit" className="btn btn-outline-primary-2">
                            <span>SIGN UP</span>
                            <i className="icon-long-arrow-right" />
                          </button>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="register-policy" required />
                            <label className="custom-control-label" htmlFor="register-policy">I agree to the <a href="#">privacy policy</a> *</label>
                          </div>{/* End .custom-checkbox */}
                        </div>{/* End .form-footer */}
                      </form>
                      <div className="form-choice">
                        <p className="text-center">or sign in with</p>
                        <div className="row">
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login btn-g">
                              <i className="icon-google" />
                              Login With Google
                            </a>
                          </div>{/* End .col-6 */}
                          <div className="col-sm-6">
                            <a href="#" className="btn btn-login  btn-f">
                              <i className="icon-facebook-f" />
                              Login With Facebook
                            </a>
                          </div>{/* End .col-6 */}
                        </div>{/* End .row */}
                      </div>{/* End .form-choice */}
                    </div>{/* .End .tab-pane */}
                  </div>{/* End .tab-content */}
                </div>{/* End .form-tab */}
              </div>{/* End .form-box */}
            </div>{/* End .modal-body */}
          </div>{/* End .modal-content */}
        </div>{/* End .modal-dialog */}
      </div>{/* End .modal */}
      {/* Start at the last pop up bar 
        <div class="container newsletter-popup-container mfp-hide" id="newsletter-popup-form">
      <div class="row justify-content-center">
          <div class="col-10">
              <div class="row no-gutters bg-white newsletter-popup-content">
                  <div class="col-xl-3-5col col-lg-7 banner-content-wrap">
                      <div class="banner-content text-center">
                          <img src="assets/images/popup/newsletter/logo.png" class="logo" alt="logo" width="60" height="15">
                          <h2 class="banner-title">get <span>25<light>%</light></span> off</h2>
                          <p>Subscribe to the Stickers Baba newsletter to receive timely updates from your favorite products.</p>
                          <form action="#">
                              <div class="input-group input-group-round">
                                  <input type="email" class="form-control form-control-white" placeholder="Your Email Address" aria-label="Email Adress" required>
                                  <div class="input-group-append">
                                      <button class="btn" type="submit"><span>go</span></button>
                                  </div><!-- .End .input-group-append */}
      {/* .End .input-group */} 
      {/*  </form>
                          <div class="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="register-policy-2" required>
                              <label class="custom-control-label" for="register-policy-2">Do not show this popup again</label>
                          </div><!-- End .custom-checkbox */}
      {/* </div>
                  </div>
                  <div class="col-xl-2-5col col-lg-5 ">
                      <img src="assets/images/popup/newsletter/img-1.jpg" class="newsletter-img" alt="newsletter">
                  </div>
              </div>
          </div>
      </div>
  </div> */}
      {/* Plugins JS File */}
      {/* Main JS File */}
    </div>
    );
};