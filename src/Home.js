import logo from './images/site-logo-white.svg'
import './Home.css'
import { Link } from "react-router-dom";
function Home() {
    return (
        <>
            <section className="header">
                <div className="container flex space_between align_item_center">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div>
                        <ul className="main_menu flex">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="Plants">Plants</Link></li>
                            <li><Link to="about">About</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                            <li><a href="#"><i class="fa-solid fa-bag-shopping"></i></a></li>

                        </ul>
                    </div>
                </div>
                <div className="info">
                    <h6>Welcome To The Greenstore</h6>
                    <h1>Let’s Bring the Spring to Your Home</h1>
                    <button><a href="#">Shop Now</a></button>
                </div>
            </section>
            <div className="plant container1 flex space_between">
                <h2>New Plants</h2>
                <button><a href="#">Shop Now</a></button>
            </div>
            <div className="shop_plant flex container1">
                <div className="plant_img">
                    <img src={require('./images/plants-ecommerce-product-featured-img-8-400x600.jpg')} />
                    <h2>Birdnest Japanese</h2>
                    <h4>$84.90</h4>
                </div>
                <div className="plant_img">
                    <img src={require('./images/plants-ecommerce-product-featured-img-5-600x900.jpg')} />
                    <h2>Hoya Obovatum</h2>
                    <h4>$64.00</h4>
                </div>
                <div className="plant_img">
                    <img src={require('./images/plants-ecommerce-product-featured-img-14-600x900.jpg')} />
                    <h2>Monstera Deliciosa</h2>
                    <h4>$220.90</h4>
                </div>
            </div>
            <div className="shop_plant flex container1">
                <div className="plant_img">
                    <img src={require('./images/plants-ecommerce-product-featured-img-16-400x600.jpg')} />
                    <h2>Zz Plants</h2>
                    <h4>$124.90</h4>
                </div>
                <div className="plant_img">
                    <img src={require('./images/plants-ecommerce-product-featured-img-4-400x600.jpg')} />
                    <h2>Bird of Paradise</h2>
                    <h4>$249.00</h4>
                </div>
                <div className="plant_img">
                    <img src={require('./images/plants-ecommerce-product-featured-img-7-400x600.jpg')} />
                    <h2>Calathea Beauty Star</h2>
                    <h4>$79.90</h4>
                </div>
            </div>
            <div className="flex">
                <div className="our_story_img">
                    <img src={require('./images/plants-store-story-section-img.jpg')} />
                </div>
                <div className="our_Story_text">
                    <h6>OUR STORY</h6>
                    <h2>For People Who Love Plants</h2>
                    <p>Vivamus quam sociis tristique diam at donec nisl, hendrerit leo nunc at velit lacinia porttitor a nulla tellus ultrices varius aliquet sed in placerat.</p>
                    <p>Facilisis eu faucibus diam cursus pulvinar consectetur purus sem felis, mauris consectetur nisl vitae gravida ultricies sem condimentum aliquet ut sed gravida amet vitae euismod pulvinar volutpat laoreet pharetra.</p >
                    <button><a href="#">Read More</a></button>
                </div>
            </div>
            <div className="customer">
                <h2>What Our Customers Say</h2>
                <h6></h6>
                <div className="flex">
                    <div className="cus_del">
                        <i class="fa-solid fa-quote-left"></i>
                        <h4>Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit.</h4>
                        <img src={require('./images/plants-store-testimonial-avatar-img.jpg')} />
                        <p>JENNIFER LEWIS</p>
                    </div>
                    <div className="cus_del">
                        <i class="fa-solid fa-quote-left"></i>
                        <h4>Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit.</h4>
                        <img src={require('./images/plants-store-testimonials-avatar-img-2.jpg')} />
                        <p>ALICIA HEART</p>
                    </div>
                    <div className="cus_del">
                        <i class="fa-solid fa-quote-left"></i>
                        <h4>Sed odio donec curabitur auctor amet tincidunt non odio enim felis tincidunt amet morbi egestas hendrerit.</h4>
                        <img src={require('./images/plants-store-testimonials-avatar-img-1.jpg')} />
                        <p>JUAN CARLOS</p>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className="container flex space_between align_item_center">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div>
                        <ul className="main_menu flex">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="plants">Plants</Link></li>
                            <li><Link to="about">About</Link></li>
                            <li><Link to="contact">Contact</Link></li>
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
export default Home;