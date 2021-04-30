import React from "react";
import "./footer.css";
import Logo from '../pics/logo.png'
//import "bootstrap/dist/css/bootstrap.min.css";
//import "font-awesome/css/font-awesome.min.css";
//import Logo from "../kurakoo-logo.png";

function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-cta">
              
                    <div className="row">
                      
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                         
                                <i className="fa fa-map-marker"></i>
                                <div className="cta-text">
                               
                                    <h4>Find us</h4>
                                    <span>1010 Avenue, sw 54321, Delhi</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fa fa-phone"></i>
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>123456789</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fa fa-envelope-open"></i>
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <span>mail@info.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="/">
                                        <img src={Logo} alt="logo" className="logo-img"/>
                                    </a>
                                </div>
                                <div className="footer-text">
                                    <p>
                                        Get high sdanousdfusdbf
                                        sdnfousfubsdlfbsd;fubds;
                                        sboussoifnsoi
                                    </p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <a href="/#">
                                    <i class="fab fa-facebook" style={{fontSize:"32px"}}></i>
                                    </a>
                                    <a href="/#">
                                    <i class="fab fa-twitter" style={{fontSize:"32px"}}></i>
                                    </a>
                                    <a href="/#">
                                    <i class="fab fa-instagram" style={{fontSize:"32px"}}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <br />
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/feed">Cart</a>
                                    </li>
                                    <li>
                                        <a href="/aboutus">About us</a>
                                    </li>
                                    <li>
                                        <a href="/#">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <br />
                                    <h3>Subscribe</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>
                                        Don’t miss to subscribe to our new
                                        feeds, kindly fill the form below.
                                    </p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="/#">
                                        <input
                                            type="text"
                                            placeholder="Email Address"
                                        />
                                        <button>
                                        <i class="fab fa-telegram-plane"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p>
                                    &copy; Otaku | All Right Reserved |
                                    Terms Of Service | Privacy
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div className="footer-menu">
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/#">Terms</a>
                                    </li>
                                    <li>
                                        <a href="/#">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="/#">Policy</a>
                                    </li>
                                    <li>
                                        <a href="/#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
