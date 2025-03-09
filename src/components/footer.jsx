import "./footer.css"
export default () => {
    // const x=new Parallax();
    return (
        <div id="footer">
            <footer>
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <i className="fab fa-slack"></i>
                            <span className="logo_name"> IIUC</span>
                        </div>
                        <div className="media-icons">
                            <a href="https://www.facebook.com/profile.php?id=100078562877994" target="_blank"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Important Links</li>
                            <li><a href="https://www.moedu.gov.bd" target="_blank">Ministry of Education</a></li>
                            <li><a href="http://www.educationboardresults.gov.bd/" target="_blank">Board Results</a></li>
                            <li><a href="https://bise-ctg.portal.gov.bd/" target="_blank">CTG Board</a></li>
                            <li><a href="https://muktopaath.gov.bd/" target="_blank">Muktopaath</a></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Other Links</li>
                            <li><a href="https://dshe.gov.bd" target="_blank">DSHE</a></li>
                            <li><a href="http://www.emis.gov.bd/emis" target="_blank">EMIS</a></li>
                            <li><a href="http://www.ntrca.gov.bd/" target="_blank">NTRCA</a></li>
                            <li><a href="https://banbeis.gov.bd/" target="_blank">BANBEIS</a></li>
                        </ul>
                        {/* <ul className="box">
                            <li className="link_name">Company</li>
                            <li><a href="https://www.moedu.gov.bd" target="_blank">Ministry of Education</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Get started</a></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Account</li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Prefrences</a></li>
                            <li><a href="#">Purchase</a></li>
                        </ul> */}
                        <ul className="box input-box">
                            <li className="link_name">Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">Copyright &#169; 2023 All rights reserved develop by</span>
                        <span className="policy_terms">
                            <a href="#">Privacy policy</a>
                            <a href="#">Terms & condition</a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}