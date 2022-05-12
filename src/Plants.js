import './Plants.css'
import logo from './images/site-logo-white.svg'
import { Link } from "react-router-dom";
function Plants() {
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
                            <li><a href='#'>Plants</a></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><a href='#'><i class="fa-solid fa-bag-shopping"></i></a></li>

                        </ul>
                    </div>
                </div>
            </section>
            <section className='Plant1'>
                <nav className='navigation'>
                    <p>Home / Plants</p>
                </nav>
                <h1>Shop</h1>
                <h6>Showing 1–9 of 25 results</h6>
            </section>
            <div className='plant'>
                <div className="shop_plant1 flex container1">
                    <div className="plant_img1">
                        <img src={require('./images/plants-ecommerce-product-featured-img-17-400x600.jpg')} width={200} />
                        <h2>Alocasia Regal Shield</h2>
                        <h4>$240.90</h4>
                    </div>
                    <div className="plant_img1">
                        <img src={require('./images/plants-ecommerce-product-featured-img-19-400x600.jpg')} />
                        <h2>Aralia Ming</h2>
                        <h4>$64.00</h4>
                    </div>
                    <div className="plant_img1">
                        <img src={require('./images/plants-ecommerce-product-featured-img-14-600x900.jpg')} />
                        <h2>Bird of Paradise</h2>
                        <h4>$220.90</h4>
                    </div>
                </div>
                <div className="shop_plant1 flex container1">
                    <div className="plant_img1">
                        <img src={require('./images/plants-ecommerce-product-featured-img-8-400x600 (1).jpg')} />
                        <h2>Birdnest Japanese</h2>
                        <h4>$124.90</h4>
                    </div>
                    <div className="plant_img1">
                        <img src={require('./images/plants-ecommerce-accessories-product-featured-img-3-400x600.jpg')} />
                        <h2>Bypass Secateur</h2>
                        <h4>$48.00</h4>
                    </div>
                    <div className="plant_img1">
                        <img src={require('./images/plants-ecommerce-product-featured-img-7-400x600 (1).jpg')} />
                        <h2>Calathea Beauty Star</h2>
                        <h4>$79.90</h4>
                    </div>
                </div>
                <div className="shop_plant1 flex container1">
                    <div className="plant_img1">
                        <img src={require('./images/plants-ecommerce-product-featured-img-18-400x600.jpg')} />
                        <h2>Calathea Rufibarba</h2>
                        <h4>$109.90</h4>
                    </div>
                    <div className="plant_img1">
                        <img src={require('./images/plants-ecommerce-product-featured-img-20-400x600.jpg')} />
                        <h2>Dracaena Lisa</h2>
                        <h4>$114.00</h4>
                    </div>
                    <div className="plant_img1">
                        <img src={require('./images/plants-ecommerce-product-featured-img-10-400x600.jpg')} />
                        <h2>Euphorbia Ingens</h2>
                        <h4>$104.00</h4>
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
                            <li><a href="#">Plants</a></li>
                            <li><Link to="/about">About</Link></li>
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
export default Plants