import './About.css'
import logo from './images/site-logo-white.svg'
import { Link } from "react-router-dom";
const About = () => {
    return (
        <>
            <section className="header1">
                <div className="container flex space_between align_item_center">
                    <div className="logo1">
                        <img src={logo} />
                    </div>
                    <div>
                        <ul className="main_menu1 flex">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/plants">Plants</Link></li>
                            <li><a href="#">About</a></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>

                        </ul>
                    </div>
                </div>
            </section>
            <section className='About container1 flex'>
                <div className='about'>
                    <h1>About</h1>
                </div>
                <div className='about_text'>
                    <h6></h6>
                    <h5>We provide fresh and healthy plants for your space</h5>
                    <p>Tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit mauris semper platea urna, sapien fermentum venenatis etiam enim ullamcorper phasellus tortor justo sapien faucibus in adipiscing risus adipiscing bibendum nec eget tincidunt sed.</p>
                </div>
            </section>
            <div className='container1 About_video'>
                <img src={require('./images/Group-107.jpg')} />
                <a href='#'><i class="fa-solid fa-play"></i></a>
            </div>
            <section className='container1 flex'>
                <div className='our_story'>
                    <h6>OUR STORY</h6>
                </div>
                <div className='our_story1'>
                    <p>Tristique dapibus porta viverra sit accumsan integer semper dolor etiam id iaculis feugiat egestas urna est magna euismod donec facilisis sed integer orci ac.</p>
                    <p>Mi et tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit mauris semper platea urna, sapien fermentum venenatis etiam enim ullamcorper phasellus tortor justo, et, pellentesque pellentesque sapien faucibus in adipiscing risus adipiscing bibendum in nec eget tincidunt in in sed magna arcu molestie nec mauris quisque.</p>
                    <p>Feugiat lacus sagittis, mauris, lobortis velit ullamcorper vitae in volutpat faucibus elementum, sodales orci mi fames molestie venenatis nunc hendrerit.</p>
                    <i class="fa-solid fa-quote-left"></i>
                    <h3>Massa aliquam montes, odio porttitor sit ac maecenas interdum ut tincidunt nisl erat quam eu natoque in nisl, lobortis sapien in nec ullamcorper vel.</h3>
                    <div className='flex'>
                        <div className='founder_img'>
                            <img src={require("./images/plants-store-owner-avatar-img.jpg")} />
                        </div>
                        <div className='founder'>
                            <h4>EMILY EVERGREEN</h4>
                            <p>Founder, Owner</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container1 flex'>
                <div className='About_img'>
                    <img src={require('./images/plants-store-gallery-img-6.jpg')} />
                </div>
                <div className='About_img'>
                    <img src={require('./images/plants-store-gallery-img-1.jpg')} />
                </div>
                <div className='About_img'>
                    <img src={require('./images/plants-store-gallery-img-2.jpg')} />
                </div>
            </div>
            <div className='container1 flex'>
                <div className='About_img'>
                    <img src={require('./images/plants-store-gallery-img-3.jpg')} />
                </div>
                <div className='About_img'>
                    <img src={require('./images/plants-store-gallery-img-4.jpg')} />
                </div>
                <div className='About_img'>
                    <img src={require('./images/plants-store-gallery-img-5.jpg')} />
                </div>
            </div>
            <div className='footer' id='fo'>
                <div className="container flex space_between align_item_center">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div>
                        <ul className="main_menu flex">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/plants">Plants</Link></li>
                            <li><a href="#">About</a></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='flex space_between nm'>
                    <div className='copy'>
                        <p>© 2022 Plant Shop. Powered by Plant Shop.</p>
                    </div>
                    <div className='copy_icon'>
                        <a href='#'><i class="fa-brands fa-instagram"></i></a>
                        <a href='#'><i class="fa-brands fa-facebook"></i></a>
                        <a href='#'><i class="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;