import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
export function Category() {
  return (
<>
  
  <div className="page-wrapper">
    <Navbar/>
    <main className="main">
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
      >
        <div className="container">
          <h1 className="page-title">
            Grid 3 Columns<span>Shop</span>
          </h1>
        </div>
        {/* End .container */}
      </div>
      {/* End .page-header */}
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Shop</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Grid 3 Columns
            </li>
          </ol>
        </div>
        {/* End .container */}
      </nav>
      {/* End .breadcrumb-nav */}
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="toolbox">
                <div className="toolbox-left">
                  <div className="toolbox-info">
                    Showing <span>9 of 56</span> Products
                  </div>
                  {/* End .toolbox-info */}
                </div>
                {/* End .toolbox-left */}
                <div className="toolbox-right">
                  <div className="toolbox-sort">
                    <label htmlFor="sortby">Sort by:</label>
                    <div className="select-custom">
                      <select
                        name="sortby"
                        id="sortby"
                        className="form-control"
                      >
                        <option value="popularity" selected="selected">
                          Most Popular
                        </option>
                        <option value="rating">Most Rated</option>
                        <option value="date">Date</option>
                      </select>
                    </div>
                  </div>
                  {/* End .toolbox-sort */}
                  <div className="toolbox-layout">
                    <a href="category-list.html" className="btn-layout">
                      <svg width={16} height={10}>
                        <rect x={0} y={0} width={4} height={4} />
                        <rect x={6} y={0} width={10} height={4} />
                        <rect x={0} y={6} width={4} height={4} />
                        <rect x={6} y={6} width={10} height={4} />
                      </svg>
                    </a>
                    <a href="category-2cols.html" className="btn-layout">
                      <svg width={10} height={10}>
                        <rect x={0} y={0} width={4} height={4} />
                        <rect x={6} y={0} width={4} height={4} />
                        <rect x={0} y={6} width={4} height={4} />
                        <rect x={6} y={6} width={4} height={4} />
                      </svg>
                    </a>
                    <a href="category.html" className="btn-layout active">
                      <svg width={16} height={10}>
                        <rect x={0} y={0} width={4} height={4} />
                        <rect x={6} y={0} width={4} height={4} />
                        <rect x={12} y={0} width={4} height={4} />
                        <rect x={0} y={6} width={4} height={4} />
                        <rect x={6} y={6} width={4} height={4} />
                        <rect x={12} y={6} width={4} height={4} />
                      </svg>
                    </a>
                    <a href="category-4cols.html" className="btn-layout">
                      <svg width={22} height={10}>
                        <rect x={0} y={0} width={4} height={4} />
                        <rect x={6} y={0} width={4} height={4} />
                        <rect x={12} y={0} width={4} height={4} />
                        <rect x={18} y={0} width={4} height={4} />
                        <rect x={0} y={6} width={4} height={4} />
                        <rect x={6} y={6} width={4} height={4} />
                        <rect x={12} y={6} width={4} height={4} />
                        <rect x={18} y={6} width={4} height={4} />
                      </svg>
                    </a>
                  </div>
                  {/* End .toolbox-layout */}
                </div>
                {/* End .toolbox-right */}
              </div>
              {/* End .toolbox */}
              <div className="products mb-3">
                <div className="row justify-content-center">
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="product product-7 text-center">
                      <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <a href="product.html">
                          <img
                            src="assets/images/products/product-4.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart">
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Women</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Brown paperbag waist pencil skirt
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$60.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "20%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-thumbs">
                          <a href="#" className="active">
                            <img
                              src="assets/images/products/product-4-thumb.jpg"
                              alt="product desc"
                            />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/products/product-4-2-thumb.jpg"
                              alt="product desc"
                            />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/products/product-4-3-thumb.jpg"
                              alt="product desc"
                            />
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-lg-4 */}
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="product product-7 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/products/product-5.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart">
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Dresses</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Dark yellow lace cut out swing dress
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$84.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "0%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 0 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-thumbs">
                          <a href="#" className="active">
                            <img
                              src="assets/images/products/product-5-thumb.jpg"
                              alt="product desc"
                            />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/products/product-5-2-thumb.jpg"
                              alt="product desc"
                            />
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-lg-4 */}
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="product product-7 text-center">
                      <figure className="product-media">
                        <span className="product-label label-out">
                          Out of Stock
                        </span>
                        <a href="product.html">
                          <img
                            src="assets/images/products/product-6.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart">
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Jackets</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Khaki utility boiler jumpsuit
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="out-price">$120.00</span>
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 6 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-lg-4 */}
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="product product-7 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/products/product-7.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart">
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Jeans</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Blue utility pinafore denim dress
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$76.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "20%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 2 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-lg-4 */}
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="product product-7 text-center">
                      <figure className="product-media">
                        <span className="product-label label-new">New</span>
                        <a href="product.html">
                          <img
                            src="assets/images/products/product-8.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart">
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Shoes</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Beige knitted elastic runner shoes
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$84.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "0%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 0 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-thumbs">
                          <a href="#" className="active">
                            <img
                              src="assets/images/products/product-8-thumb.jpg"
                              alt="product desc"
                            />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/products/product-8-2-thumb.jpg"
                              alt="product desc"
                            />
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-lg-4 */}
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="product product-7 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/products/product-9.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart">
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Bags</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Orange saddle lock front chain cross body bag
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$84.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "60%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 1 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-thumbs">
                          <a href="#" className="active">
                            <img
                              src="assets/images/products/product-9-thumb.jpg"
                              alt="product desc"
                            />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/products/product-9-2-thumb.jpg"
                              alt="product desc"
                            />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/products/product-9-3-thumb.jpg"
                              alt="product desc"
                            />
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-lg-4 */}
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="product product-7 text-center">
                      <figure className="product-media">
                        <span className="product-label label-top">Top</span>
                        <a href="product.html">
                          <img
                            src="assets/images/products/product-11.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart">
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Shoes</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Light brown studded Wide fit wedges
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$110.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 1 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-thumbs">
                          <a href="#" className="active">
                            <img
                              src="assets/images/products/product-11-thumb.jpg"
                              alt="product desc"
                            />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/products/product-11-2-thumb.jpg"
                              alt="product desc"
                            />
                          </a>
                          <a href="#">
                            <img
                              src="assets/images/products/product-11-3-thumb.jpg"
                              alt="product desc"
                            />
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-lg-4 */}
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="product product-7 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/products/product-10.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart">
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Jumpers</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">Yellow button front tea top</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$56.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "0%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 0 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-lg-4 */}
                  <div className="col-6 col-md-4 col-lg-4">
                    <div className="product product-7 text-center">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/products/product-12.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist btn-expandable"
                          >
                            <span>add to wishlist</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product-icon btn-quickview"
                            title="Quick view"
                          >
                            <span>Quick view</span>
                          </a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare"
                            title="Compare"
                          >
                            <span>Compare</span>
                          </a>
                        </div>
                        {/* End .product-action-vertical */}
                        <div className="product-action">
                          <a href="#" className="btn-product btn-cart">
                            <span>add to cart</span>
                          </a>
                        </div>
                        {/* End .product-action */}
                      </figure>
                      {/* End .product-media */}
                      <div className="product-body">
                        <div className="product-cat">
                          <a href="#">Bags</a>
                        </div>
                        {/* End .product-cat */}
                        <h3 className="product-title">
                          <a href="product.html">
                            Black soft RI weekend travel bag
                          </a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$68.00</div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "0%" }}
                            />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 0 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-lg-4 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .products */}
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a
                      className="page-link page-link-prev"
                      href="#"
                      aria-label="Previous"
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      <span aria-hidden="true">
                        <i className="icon-long-arrow-left" />
                      </span>
                      Prev
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item-total">of 6</li>
                  <li className="page-item">
                    <a
                      className="page-link page-link-next"
                      href="#"
                      aria-label="Next"
                    >
                      Next{" "}
                      <span aria-hidden="true">
                        <i className="icon-long-arrow-right" />
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* End .col-lg-9 */}
            <aside className="col-lg-3 order-lg-first">
              <div className="sidebar sidebar-shop">
                <div className="widget widget-clean">
                  <label>Filters:</label>
                  <a href="#" className="sidebar-filter-clear">
                    Clean All
                  </a>
                </div>
                {/* End .widget widget-clean */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-1"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-1"
                    >
                      Category
                    </a>
                  </h3>
                  {/* End .widget-title */}
                  <div className="collapse show" id="widget-1">
                    <div className="widget-body">
                      <div className="filter-items filter-items-count">
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-1"
                            >
                              Dresses
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">3</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-2"
                            >
                              T-shirts
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">0</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-3"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-3"
                            >
                              Bags
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">4</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-4"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-4"
                            >
                              Jackets
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">2</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-5"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-5"
                            >
                              Shoes
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">2</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-6"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-6"
                            >
                              Jumpers
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">1</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-7"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-7"
                            >
                              Jeans
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">1</span>
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-8"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-8"
                            >
                              Sportwear
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">0</span>
                        </div>
                        {/* End .filter-item */}
                      </div>
                      {/* End .filter-items */}
                    </div>
                    {/* End .widget-body */}
                  </div>
                  {/* End .collapse */}
                </div>
                {/* End .widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-2"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-2"
                    >
                      Size
                    </a>
                  </h3>
                  {/* End .widget-title */}
                  <div className="collapse show" id="widget-2">
                    <div className="widget-body">
                      <div className="filter-items">
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="size-1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-1"
                            >
                              XS
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="size-2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-2"
                            >
                              S
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              defaultChecked=""
                              id="size-3"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-3"
                            >
                              M
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              defaultChecked=""
                              id="size-4"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-4"
                            >
                              L
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="size-5"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-5"
                            >
                              XL
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="size-6"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-6"
                            >
                              XXL
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                      </div>
                      {/* End .filter-items */}
                    </div>
                    {/* End .widget-body */}
                  </div>
                  {/* End .collapse */}
                </div>
                {/* End .widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-3"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-3"
                    >
                      Colour
                    </a>
                  </h3>
                  {/* End .widget-title */}
                  <div className="collapse show" id="widget-3">
                    <div className="widget-body">
                      <div className="filter-colors">
                        <a href="#" style={{ background: "#b87145" }}>
                          <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#f0c04a" }}>
                          <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                          <span className="sr-only">Color Name</span>
                        </a>
                        <a
                          href="#"
                          className="selected"
                          style={{ background: "#cc3333" }}
                        >
                          <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#3399cc" }}>
                          <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#669933" }}>
                          <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#f2719c" }}>
                          <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#ebebeb" }}>
                          <span className="sr-only">Color Name</span>
                        </a>
                      </div>
                      {/* End .filter-colors */}
                    </div>
                    {/* End .widget-body */}
                  </div>
                  {/* End .collapse */}
                </div>
                {/* End .widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-4"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-4"
                    >
                      Brand
                    </a>
                  </h3>
                  {/* End .widget-title */}
                  <div className="collapse show" id="widget-4">
                    <div className="widget-body">
                      <div className="filter-items">
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-1"
                            >
                              Next
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-2"
                            >
                              River Island
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-3"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-3"
                            >
                              Geox
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-4"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-4"
                            >
                              New Balance
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-5"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-5"
                            >
                              UGG
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-6"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-6"
                            >
                              F&amp;F
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-7"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-7"
                            >
                              Nike
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                        </div>
                        {/* End .filter-item */}
                      </div>
                      {/* End .filter-items */}
                    </div>
                    {/* End .widget-body */}
                  </div>
                  {/* End .collapse */}
                </div>
                {/* End .widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <a
                      data-toggle="collapse"
                      href="#widget-5"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-5"
                    >
                      Price
                    </a>
                  </h3>
                  {/* End .widget-title */}
                  <div className="collapse show" id="widget-5">
                    <div className="widget-body">
                      <div className="filter-price">
                        <div className="filter-price-text">
                          Price Range:
                          <span id="filter-price-range" />
                        </div>
                        {/* End .filter-price-text */}
                        <div id="price-slider" />
                        {/* End #price-slider */}
                      </div>
                      {/* End .filter-price */}
                    </div>
                    {/* End .widget-body */}
                  </div>
                  {/* End .collapse */}
                </div>
                {/* End .widget */}
              </div>
              {/* End .sidebar sidebar-shop */}
            </aside>
            {/* End .col-lg-3 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .page-content */}
    </main>
    {/* End .main */}
    <footer className="footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="widget widget-about">
                <img
                  src="assets/images/logo.png"
                  className="footer-logo"
                  alt="Footer Logo"
                  width={105}
                  height={25}
                />
                <p>
                  Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                  augue, eu vulputate magna eros eu erat.{" "}
                </p>
                <div className="social-icons">
                  <a
                    href="#"
                    className="social-icon"
                    target="_blank"
                    title="Facebook"
                  >
                    <i className="icon-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    target="_blank"
                    title="Twitter"
                  >
                    <i className="icon-twitter" />
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    target="_blank"
                    title="Instagram"
                  >
                    <i className="icon-instagram" />
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    target="_blank"
                    title="Youtube"
                  >
                    <i className="icon-youtube" />
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    target="_blank"
                    title="Pinterest"
                  >
                    <i className="icon-pinterest" />
                  </a>
                </div>
                {/* End .soial-icons */}
              </div>
              {/* End .widget about-widget */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">Useful Links</h4>
                {/* End .widget-title */}
                <ul className="widget-list">
                  <li>
                    <a href="about.html">About Molla</a>
                  </li>
                  <li>
                    <a href="#">How to shop on Molla</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact us</a>
                  </li>
                  <li>
                    <a href="login.html">Log in</a>
                  </li>
                </ul>
                {/* End .widget-list */}
              </div>
              {/* End .widget */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">Customer Service</h4>
                {/* End .widget-title */}
                <ul className="widget-list">
                  <li>
                    <a href="#">Payment Methods</a>
                  </li>
                  <li>
                    <a href="#">Money-back guarantee!</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                  <li>
                    <a href="#">Shipping</a>
                  </li>
                  <li>
                    <a href="#">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
                {/* End .widget-list */}
              </div>
              {/* End .widget */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">My Account</h4>
                {/* End .widget-title */}
                <ul className="widget-list">
                  <li>
                    <a href="#">Sign In</a>
                  </li>
                  <li>
                    <a href="cart.html">View Cart</a>
                  </li>
                  <li>
                    <a href="#">My Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Track My Order</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                </ul>
                {/* End .widget-list */}
              </div>
              {/* End .widget */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .footer-middle */}
      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            Copyright © 2019 Molla Store. All Rights Reserved.
          </p>
          {/* End .footer-copyright */}
          <figure className="footer-payments">
            <img
              src="assets/images/payments.png"
              alt="Payment methods"
              width={272}
              height={20}
            />
          </figure>
          {/* End .footer-payments */}
        </div>
        {/* End .container */}
      </div>
      {/* End .footer-bottom */}
    </footer>
    {/* End .footer */}
  </div>
  {/* End .page-wrapper */}
  <button id="scroll-top" title="Back to Top">
    <i className="icon-arrow-up" />
  </button>
  {/* Mobile Menu */}
  <div className="mobile-menu-overlay" />
  {/* End .mobil-menu-overlay */}
  <div className="mobile-menu-container">
    <div className="mobile-menu-wrapper">
      <span className="mobile-menu-close">
        <i className="icon-close" />
      </span>
      <form action="#" method="get" className="mobile-search">
        <label htmlFor="mobile-search" className="sr-only">
          Search
        </label>
        <input
          type="search"
          className="form-control"
          name="mobile-search"
          id="mobile-search"
          placeholder="Search in..."
          required=""
        />
        <button className="btn btn-primary" type="submit">
          <i className="icon-search" />
        </button>
      </form>
      <nav className="mobile-nav">
        <ul className="mobile-menu">
          <li className="active">
            <a href="index.html">Home</a>
            <ul>
              <li>
                <a href="index-1.html">01 - furniture store</a>
              </li>
              <li>
                <a href="index-2.html">02 - furniture store</a>
              </li>
              <li>
                <a href="index-3.html">03 - electronic store</a>
              </li>
              <li>
                <a href="index-4.html">04 - electronic store</a>
              </li>
              <li>
                <a href="index-5.html">05 - fashion store</a>
              </li>
              <li>
                <a href="index-6.html">06 - fashion store</a>
              </li>
              <li>
                <a href="index-7.html">07 - fashion store</a>
              </li>
              <li>
                <a href="index-8.html">08 - fashion store</a>
              </li>
              <li>
                <a href="index-9.html">09 - fashion store</a>
              </li>
              <li>
                <a href="index-10.html">10 - shoes store</a>
              </li>
              <li>
                <a href="index-11.html">11 - furniture simple store</a>
              </li>
              <li>
                <a href="index-12.html">12 - fashion simple store</a>
              </li>
              <li>
                <a href="index-13.html">13 - market</a>
              </li>
              <li>
                <a href="index-14.html">14 - market fullwidth</a>
              </li>
              <li>
                <a href="index-15.html">15 - lookbook 1</a>
              </li>
              <li>
                <a href="index-16.html">16 - lookbook 2</a>
              </li>
              <li>
                <a href="index-17.html">17 - fashion store</a>
              </li>
              <li>
                <a href="index-18.html">18 - fashion store (with sidebar)</a>
              </li>
              <li>
                <a href="index-19.html">19 - games store</a>
              </li>
              <li>
                <a href="index-20.html">20 - book store</a>
              </li>
              <li>
                <a href="index-21.html">21 - sport store</a>
              </li>
              <li>
                <a href="index-22.html">22 - tools store</a>
              </li>
              <li>
                <a href="index-23.html">23 - fashion left navigation store</a>
              </li>
              <li>
                <a href="index-24.html">24 - extreme sport store</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="category.html">Shop</a>
            <ul>
              <li>
                <a href="category-list.html">Shop List</a>
              </li>
              <li>
                <a href="category-2cols.html">Shop Grid 2 Columns</a>
              </li>
              <li>
                <a href="category.html">Shop Grid 3 Columns</a>
              </li>
              <li>
                <a href="category-4cols.html">Shop Grid 4 Columns</a>
              </li>
              <li>
                <a href="category-boxed.html">
                  <span>
                    Shop Boxed No Sidebar
                    <span className="tip tip-hot">Hot</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="category-fullwidth.html">Shop Fullwidth No Sidebar</a>
              </li>
              <li>
                <a href="product-category-boxed.html">Product Category Boxed</a>
              </li>
              <li>
                <a href="product-category-fullwidth.html">
                  <span>
                    Product Category Fullwidth
                    <span className="tip tip-new">New</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="cart.html">Cart</a>
              </li>
              <li>
                <a href="checkout.html">Checkout</a>
              </li>
              <li>
                <a href="wishlist.html">Wishlist</a>
              </li>
              <li>
                <a href="#">Lookbook</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="product.html" className="sf-with-ul">
              Product
            </a>
            <ul>
              <li>
                <a href="product.html">Default</a>
              </li>
              <li>
                <a href="product-centered.html">Centered</a>
              </li>
              <li>
                <a href="product-extended.html">
                  <span>
                    Extended Info<span className="tip tip-new">New</span>
                  </span>
                </a>
              </li>
              <li>
                <a href="product-gallery.html">Gallery</a>
              </li>
              <li>
                <a href="product-sticky.html">Sticky Info</a>
              </li>
              <li>
                <a href="product-sidebar.html">Boxed With Sidebar</a>
              </li>
              <li>
                <a href="product-fullwidth.html">Full Width</a>
              </li>
              <li>
                <a href="product-masonry.html">Masonry Sticky Info</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul>
              <li>
                <a href="about.html">About</a>
                <ul>
                  <li>
                    <a href="about.html">About 01</a>
                  </li>
                  <li>
                    <a href="about-2.html">About 02</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
                <ul>
                  <li>
                    <a href="contact.html">Contact 01</a>
                  </li>
                  <li>
                    <a href="contact-2.html">Contact 02</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="login.html">Login</a>
              </li>
              <li>
                <a href="faq.html">FAQs</a>
              </li>
              <li>
                <a href="404.html">Error 404</a>
              </li>
              <li>
                <a href="coming-soon.html">Coming Soon</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="blog.html">Blog</a>
            <ul>
              <li>
                <a href="blog.html">Classic</a>
              </li>
              <li>
                <a href="blog-listing.html">Listing</a>
              </li>
              <li>
                <a href="#">Grid</a>
                <ul>
                  <li>
                    <a href="blog-grid-2cols.html">Grid 2 columns</a>
                  </li>
                  <li>
                    <a href="blog-grid-3cols.html">Grid 3 columns</a>
                  </li>
                  <li>
                    <a href="blog-grid-4cols.html">Grid 4 columns</a>
                  </li>
                  <li>
                    <a href="blog-grid-sidebar.html">Grid sidebar</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Masonry</a>
                <ul>
                  <li>
                    <a href="blog-masonry-2cols.html">Masonry 2 columns</a>
                  </li>
                  <li>
                    <a href="blog-masonry-3cols.html">Masonry 3 columns</a>
                  </li>
                  <li>
                    <a href="blog-masonry-4cols.html">Masonry 4 columns</a>
                  </li>
                  <li>
                    <a href="blog-masonry-sidebar.html">Masonry sidebar</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Mask</a>
                <ul>
                  <li>
                    <a href="blog-mask-grid.html">Blog mask grid</a>
                  </li>
                  <li>
                    <a href="blog-mask-masonry.html">Blog mask masonry</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Single Post</a>
                <ul>
                  <li>
                    <a href="single.html">Default with sidebar</a>
                  </li>
                  <li>
                    <a href="single-fullwidth.html">Fullwidth no sidebar</a>
                  </li>
                  <li>
                    <a href="single-fullwidth-sidebar.html">
                      Fullwidth with sidebar
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="elements-list.html">Elements</a>
            <ul>
              <li>
                <a href="elements-products.html">Products</a>
              </li>
              <li>
                <a href="elements-typography.html">Typography</a>
              </li>
              <li>
                <a href="elements-titles.html">Titles</a>
              </li>
              <li>
                <a href="elements-banners.html">Banners</a>
              </li>
              <li>
                <a href="elements-product-category.html">Product Category</a>
              </li>
              <li>
                <a href="elements-video-banners.html">Video Banners</a>
              </li>
              <li>
                <a href="elements-buttons.html">Buttons</a>
              </li>
              <li>
                <a href="elements-accordions.html">Accordions</a>
              </li>
              <li>
                <a href="elements-tabs.html">Tabs</a>
              </li>
              <li>
                <a href="elements-testimonials.html">Testimonials</a>
              </li>
              <li>
                <a href="elements-blog-posts.html">Blog Posts</a>
              </li>
              <li>
                <a href="elements-portfolio.html">Portfolio</a>
              </li>
              <li>
                <a href="elements-cta.html">Call to Action</a>
              </li>
              <li>
                <a href="elements-icon-boxes.html">Icon Boxes</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* End .mobile-nav */}
      <div className="social-icons">
        <a href="#" className="social-icon" target="_blank" title="Facebook">
          <i className="icon-facebook-f" />
        </a>
        <a href="#" className="social-icon" target="_blank" title="Twitter">
          <i className="icon-twitter" />
        </a>
        <a href="#" className="social-icon" target="_blank" title="Instagram">
          <i className="icon-instagram" />
        </a>
        <a href="#" className="social-icon" target="_blank" title="Youtube">
          <i className="icon-youtube" />
        </a>
      </div>
      {/* End .social-icons */}
    </div>
    {/* End .mobile-menu-wrapper */}
  </div>
  {/* End .mobile-menu-container */}
  {/* Sign in / Register Modal */}
  <div
    className="modal fade"
    id="signin-modal"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i className="icon-close" />
            </span>
          </button>
          <div className="form-box">
            <div className="form-tab">
              <ul className="nav nav-pills nav-fill" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="signin-tab"
                    data-toggle="tab"
                    href="#signin"
                    role="tab"
                    aria-controls="signin"
                    aria-selected="true"
                  >
                    Sign In
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="register-tab"
                    data-toggle="tab"
                    href="#register"
                    role="tab"
                    aria-controls="register"
                    aria-selected="false"
                  >
                    Register
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="tab-content-5">
                <div
                  className="tab-pane fade show active"
                  id="signin"
                  role="tabpanel"
                  aria-labelledby="signin-tab"
                >
                  <form action="#">
                    <div className="form-group">
                      <label htmlFor="singin-email">
                        Username or email address *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="singin-email"
                        name="singin-email"
                        required=""
                      />
                    </div>
                    {/* End .form-group */}
                    <div className="form-group">
                      <label htmlFor="singin-password">Password *</label>
                      <input
                        type="password"
                        className="form-control"
                        id="singin-password"
                        name="singin-password"
                        required=""
                      />
                    </div>
                    {/* End .form-group */}
                    <div className="form-footer">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2"
                      >
                        <span>LOG IN</span>
                        <i className="icon-long-arrow-right" />
                      </button>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="signin-remember"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="signin-remember"
                        >
                          Remember Me
                        </label>
                      </div>
                      {/* End .custom-checkbox */}
                      <a href="#" className="forgot-link">
                        Forgot Your Password?
                      </a>
                    </div>
                    {/* End .form-footer */}
                  </form>
                  <div className="form-choice">
                    <p className="text-center">or sign in with</p>
                    <div className="row">
                      <div className="col-sm-6">
                        <a href="#" className="btn btn-login btn-g">
                          <i className="icon-google" />
                          Login With Google
                        </a>
                      </div>
                      {/* End .col-6 */}
                      <div className="col-sm-6">
                        <a href="#" className="btn btn-login btn-f">
                          <i className="icon-facebook-f" />
                          Login With Facebook
                        </a>
                      </div>
                      {/* End .col-6 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .form-choice */}
                </div>
                {/* .End .tab-pane */}
                <div
                  className="tab-pane fade"
                  id="register"
                  role="tabpanel"
                  aria-labelledby="register-tab"
                >
                  <form action="#">
                    <div className="form-group">
                      <label htmlFor="register-email">
                        Your email address *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="register-email"
                        name="register-email"
                        required=""
                      />
                    </div>
                    {/* End .form-group */}
                    <div className="form-group">
                      <label htmlFor="register-password">Password *</label>
                      <input
                        type="password"
                        className="form-control"
                        id="register-password"
                        name="register-password"
                        required=""
                      />
                    </div>
                    {/* End .form-group */}
                    <div className="form-footer">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2"
                      >
                        <span>SIGN UP</span>
                        <i className="icon-long-arrow-right" />
                      </button>
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="register-policy"
                          required=""
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="register-policy"
                        >
                          I agree to the <a href="#">privacy policy</a> *
                        </label>
                      </div>
                      {/* End .custom-checkbox */}
                    </div>
                    {/* End .form-footer */}
                  </form>
                  <div className="form-choice">
                    <p className="text-center">or sign in with</p>
                    <div className="row">
                      <div className="col-sm-6">
                        <a href="#" className="btn btn-login btn-g">
                          <i className="icon-google" />
                          Login With Google
                        </a>
                      </div>
                      {/* End .col-6 */}
                      <div className="col-sm-6">
                        <a href="#" className="btn btn-login  btn-f">
                          <i className="icon-facebook-f" />
                          Login With Facebook
                        </a>
                      </div>
                      {/* End .col-6 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .form-choice */}
                </div>
                {/* .End .tab-pane */}
              </div>
              {/* End .tab-content */}
            </div>
            {/* End .form-tab */}
          </div>
          {/* End .form-box */}
        </div>
        {/* End .modal-body */}
      </div>
      {/* End .modal-content */}
    </div>
    {/* End .modal-dialog */}
  </div>
  {/* End .modal */}
  {/* Plugins JS File */}
  {/* Main JS File */}
</>
);
}

export default Category;
