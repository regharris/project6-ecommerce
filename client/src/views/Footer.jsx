import React from "react";



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
                        alt="snapchat"
                    />
                </a>

                <a href="https://www.instagram.com/?hl=en">
                    <img
                        src="https://img.icons8.com/officel/80/000000/instagram-new.png"
                        className="social-icon"
                        width="40px"
                        alt="instagram"
                    />
                </a>

                <a href="facebook.com">
                    <img
                        src="https://img.icons8.com/officel/80/000000/facebook-new.png"
                        className="social-icon"
                        width="40px"
                        alt="facebook"
                    />
                </a>

                <a href="twitter.com">
                    <img
                        src="https://img.icons8.com/color/96/000000/twitter.png"
                        className="social-icon"
                        width="40px"
                        alt="twitter"
                    />
                </a>

                <a href="youtube.com">
                    <img
                        src="https://img.icons8.com/officel/80/000000/youtube.png"
                        className="social-icon"
                        width="40px"
                        alt="youtube"
                    />
                </a>

                <a href="linkedin.com">
                    <img
                        src="https://img.icons8.com/officel/80/000000/linkedin.png"
                        className="social-icon"
                        width="40px"
                        alt="linkedin"
                    />
                </a>
            </div>
        </div>
    );
}

export default Footer;
