import "./landingPage.css"

import Navbar from '../../Components/Navbar/Navbar'

import vid from "../../assets/landing-video.mp4";
import {FaFilePen, FaTruck } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa";
import map from "../../assets/map.png";
import driver from "../../assets/driver.gif";
import mobile from "../../assets/mobile.png"
import { services } from '../../data';

import Aos from 'aos';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
    const navigate = useNavigate(); 

    const goToRegistration = () => {
        navigate("/register"); 
    };


    useEffect(() => {
        Aos.init();
    }, [])

  return (
    <div>
        <Navbar />
        <div className="page">
            <div className="hero" id="hero">
                <video src={vid} autoPlay muted controls={false} loop></video>
                <div className="hero-text" data-aos="fade-up">
                    <h1>START EARNING <br />WITH YOUR VAN.</h1>
                    <p>Become a Partner in Our Moving Services Network</p>
                    <button onClick={() => {
                        navigate("/register");
                    }}>Apply to drive</button>
                </div>
            </div>

            {/* <div className="flow">
                <div className="flow-item" data-aos="fade-up" data-aos-delay="100">
                    <FaFilePen color='black' size={38} />
                    <p>Register</p>
                </div>
                <div className="flow-item" data-aos="fade-up" data-aos-delay="200">
                    <FaRegThumbsUp color='black' size={38} />
                    <p>Get Approval</p>
                </div>
                <div className="flow-item" data-aos="fade-up" data-aos-delay="300">
                    <FaTruck color='black' size={38} />
                    <p>Start Driving</p>
                </div>
            </div> */}

            <div className="map">
                <img src={map} alt="map" />
            </div>
            
            <div className="about" id='about' >
                <div className="about-grid" >
                    <h1 data-aos="fade-right">ABOUT US</h1>
                    <p data-aos="fade-right">At Flexiver, we understand the importance of reliable and efficient delivery services. With years of experience in the industry, we have established ourselves as a premier packers and movers company dedicated to providing seamless transportation solutions tailored to your needs. Whether you're moving homes, sending packages, or transporting goods for your business, trust Flexiver to deliver with precision and professionalism.</p>
                    <div className="about-left" >
                        <div data-aos="fade-right">
                            <h2>Why Choose Flexiver?</h2> <br />
                            <ul>
                                <li>
                                <strong>Reliability:</strong> With Flexiver, you can trust that your packages will reach their destination safely and on time.
                                </li>
                                <li>
                                <strong>Affordability:</strong> We offer competitive rates without compromising on the quality of service.
                                </li>
                                <li>
                                <strong>Customer Satisfaction:</strong> Our dedicated team is committed to providing exceptional customer service every step of the way.
                                </li>
                                <li>
                                <strong>Flexibility:</strong> We understand that plans can change. That's why we offer flexible scheduling options to accommodate your needs.
                                </li>
                            </ul>
                        </div>
                        <div data-aos="fade-right">
                        <h2>Why Drive with Flexiver?</h2> <br />
                            <ul>
                            <li>
                            <strong>Flexibility:</strong> With Flexiver, you're in control of your schedule. Choose when and where you want to work, whether it's part-time or full-time.
                            </li>
                            <li>
                            <strong>Earn More:</strong> Enjoy competitive earnings for every delivery you complete. The more you drive, the more you earn.
                            </li>
                            <li>
                            <strong>Support:</strong> Our dedicated support team is here to assist you every step of the way. From onboarding to ongoing assistance, we're committed to your success.
                            </li>
                            <li>
                            <strong>Safety:</strong> Your safety is our priority. We provide comprehensive safety guidelines and support to ensure a secure driving experience.
                            </li>
                            <li>
                            <strong>Opportunity:</strong> Join a growing community of drivers and tap into new opportunities for growth and development.
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div className="about-right">
                        <img src={driver} alt="driver" data-aos="fade-left" />
                    </div>
                </div>
            </div>

            <div className="service" id='service' data-aos="fade-left">
                <h1>SERVICES</h1>
                <p>At Flexiver, we provide a range of services tailored to meet your transportation needs:</p>

                <div className='service-container'>
                    {services.map((service, id) => (
                        <div className="service-box" key={id} data-aos="fade-up" data-aos-delay={`${id * 100}`}>
                            <img src={service.image} alt="" />
                            <h2>{service.title}</h2>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="trucks" id="available">
                <h1 data-aos="fade-up">AVAILABLE VEHICLES</h1>
                <p data-aos="fade-up">Join our fleet of drivers and choose from a variety of vehicles to suit your preferences and transportation needs:</p>
                <div className="trucks-container">
                    <h2>2 wheeler</h2>
                    <h2>4 wheeler</h2>
                    <h2>refregirated vans</h2>
                </div>
            </div>

            <div className="mobile">
                <div className="mobile-container">
                    <div className="mobile-left">
                        <img src={mobile} alt="mobile" data-aos="fade-right" />
                    </div>
                    <div className="mobile-text" data-aos="fade-left">
                        <div>
                        <h1>AVAILABLE ON <br />YOUR FINGERTIPS</h1>
                        <p>Experience convenience like never before with our innovative solutions. Whether you're at home, on the go, or in the office, access our services effortlessly. </p>
                        </div>
                        <div>
                        <button className='apply-button'>Apply to drive</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="footer-left">
                    <h1>Flexiver</h1>
                </div>
                <div className="footer-right">
                    <div className="footer-box">
                        <h3>Services</h3>
                        <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor 
                        incididunt ut labore </p>
                    </div>
                    <div className="footer-box">
                        <h3>Contact Us</h3>
                        <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor 
                        incididunt ut labore </p>
                    </div>
                    <div className="footer-box">
                        <h3>Careers</h3>
                        <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, 
                        sed do eiusmod tempor 
                        incididunt ut labore </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default LandingPage