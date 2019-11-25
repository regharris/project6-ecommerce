import React from "react";
import ReactDom from "react-dom";


function Footer() {
    return (
        <div id="flexbox">
            <div className="footer-bar">
                <p className="footer-title">Check Us Out !</p>
                <a href="https://www.snapchat.com/">
                    <img
                        id="snap"
                        src="https://img.icons8.com/color/48/000000/snapchat-circled-logo.png"
                        className="social-icon"
                        width="40px"
                    />
                </a>

                <a href="https://www.instagram.com/?hl=en">
                    <img
                        src="https://img.icons8.com/officel/80/000000/instagram-new.png"
                        className="social-icon"
                        width="40px"
                    />
                </a>

                <a href="facebook.com">
                    <img
                        src="https://img.icons8.com/officel/80/000000/facebook-new.png"
                        className="social-icon"
                        width="40px"
                    />
                </a>

                <a href="twitter.com">
                    <img
                        src="https://img.icons8.com/color/96/000000/twitter.png"
                        className="social-icon"
                        width="40px"
                    />
                </a>

                <a href="youtube.com">
                    <img
                        src="https://img.icons8.com/officel/80/000000/youtube.png"
                        className="social-icon"
                        width="40px"
                    />
                </a>

                <a href="linkedin.com">
                    <img
                        src="https://img.icons8.com/officel/80/000000/linkedin.png"
                        className="social-icon"
                        width="40px"
                    />
                </a>
            </div>
        </div>
    );
}

export default Footer;
