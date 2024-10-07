import React from 'react'
import './Footer.css'
const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="footer__container">
            <div className="footer__links">
                <div className="footer__link--wrapper">
                    <div className="footer__link--items">
                        <h2>About us</h2>
                        <a href="#">How it works</a>
                        <a href="#">Testimonials</a>
                        <a href="#">Careers</a>
                        <a href="#">Terms of Service</a>
                    </div>
                                    
                    <div className="footer__link--items">
                        <h2>Contact Us</h2>
                        <a href="https://web.facebook.com/nexafoz">Contact</a>
                        <a href="https://wa.me/+1(863)281-1748/">Support</a>
                        <a href="https://web.facebook.com/nexafoz">Destination</a>
                    </div>
                
                </div>
                <div className="footer__link--wrapper">
                    <div className="footer__link--items">
                        <h2>Videos</h2>
                        <a href="#">Submite Video</a>
                        <a href="#">Ambassadors</a>
                        <a href="#">Agency</a>
                    </div>
                
                    <div className="footer__link--items">
                        <h2>Social Media</h2>
                        <a href="https://www.instagram.com/nexafoz/" target="_blank">Instagram</a>
                        <a href="https://web.facebook.com/nexafoz/" target="_blank">Facebook</a>
                        <a href="https://wa.me/+1(863)281-1748/" target="_blank">WhatsApp</a>
                        <a href="https://www.linkedin.com/company/nexafoz/" target="_blank">LinkedIn</a>
                    </div>
                </div>      
            </div>
            <section className="social__media">
                <div className="social__media--wrap">
                    <div className="footer__logo">
                        <a href="/" id="footer__logo">NexaFOZ</a>
                    </div>
                    <p className="website__rights">&copy; {currentYear} NexaFOZ. All right reserved</p>
                    <div className="social__icons">
                        <a href="https://web.facebook.com/nexafoz" className="social__icon--link" target="_blank">
                            <i className="fab fa-facebook"></i>
                        </a>

                        <a href="https://www.instagram.com/nexafoz/" className="social__icon--link" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a href="https://www.linkedin.com/company/nexafoz/" className="social__icon--link" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
  )
}

export default Footer