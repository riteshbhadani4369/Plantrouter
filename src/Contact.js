import './Contact.css'
import logo from './images/site-logo-white.svg'
import { Link } from "react-router-dom";
function Contact() {
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
                            <li><Link to="/about">About</Link></li>
                            <li><a href='#'>Contact</a></li>
                            <li><a href='#'><i class="fa-solid fa-bag-shopping"></i></a></li>

                        </ul>
                    </div>
                </div>
            </section>

            <div className='contact'>
                <div className=' container1 flex'>
                    <div className='contact_text'>
                        <h1>Get In Touch</h1>
                        <p>Sit vulputate faucibus eget eget scelerisque faucibus malesuada nullam mollis ut montes, dui scelerisque ornare.</p>
                        <div className='flex'>
                            <div className='visit_us'>
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div className='visit_us1'>
                                <h5>VISIT US</h5>
                                <p>123 Demo St, San Francisco, CA 45678, United States</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='visit_us'>
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div className='visit_us1'>
                                <h5>CALL US</h5>
                                <p>+1 123-456-7890</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='visit_us'>
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div className='visit_us1'>
                                <h5>EMAIL US</h5>
                                <p>mail@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='contact_form'>
                        <h3>Drop us a line or two</h3>
                        <form>
                            <table className='message' cellSpacing="10">
                                <tr>
                                    <td>Name</td>
                                </tr>
                                <tr>
                                    <td><input type="text" placeholder="Full Name" /></td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                </tr>
                                <tr>
                                    <td><input type="Email" placeholder="Email address" /></td>
                                </tr>
                                <tr>
                                    <td>Comment or Message</td>
                                </tr>
                                <tr>
                                    <td><textarea placeholder='Your message'></textarea></td>
                                </tr>
                                <tr>
                                    <td><button>Submit</button></td>
                                </tr>
                            </table>
                        </form>
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
                            <li><Link to="/plants">Plants</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><a href="#">Contact</a></li>
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
export default Contact;