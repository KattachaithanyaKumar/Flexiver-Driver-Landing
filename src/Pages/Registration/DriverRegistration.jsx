import "./registration.css";

import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const DriverRegistration = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className="nav">
            <img src={logo} alt="" />
        </div>

        <div className="register-page">
            <div className="register-content">
                <h1 className="heading2">Welcome to the Flexivr Extravaganza!</h1>
                <p>So, you wanna join the PicUp team of rockstar flexers? Awesome choice! But first, let's jazz up the details. 🎉</p>

                <a onClick={() => {
                    navigate("/dashboard");
                }}>Login?</a>

                <h1 className="heading">What You Gotta Bring to the flex Party:</h1>
                <div className="content">
                    <p>
                    Licence to flex and a Ride to Roll: You gotta have a valid Aussie driver's licence and be the proud owner of a Ute or Van. Bonus points if your vehicle is not just reliable but the superhero of the road, fully insured, and has its own theme music. 
                    </p>
                    <p>
                    Flex Those Muscles: We're not asking you to bench press a sofa, but you should be able to move large, quirky items without breaking a sweat. Flex those muscles – we're in the business of serious fun here! 
                    </p>
                    <p>
                    Insurance Galore: You're not just a flexer; you're an insured superhero. Got your public liability and carrier liability insurance sorted? If not, no worries, you can always grab them for your superhero toolkit. 
                    </p> 
                    <p>
                    Charm Offensive: We want communicators who could charm a kangaroo out of a pouch. If you're as honest as a koala's stare and as friendly as a quokka selfie, you're our kind of people. 
                    </p> 
                    <p>
                    SEQ and Northern NSW Showdown: Right now, we're rocking the Brisbane, Ipswich, Gold Coast, and the cool Northern Rivers (NSW). If you're around these parts, you're in for a wild flexer ride.
                    </p>
                </div>

                <h1 className="heading">Fill in the flexer Application Magic Form:</h1>
                <form action="" className="register-form">
                    <p>PERSONAL DETAILS</p>
                    <div className="inputs">
                        <div className="split">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <input type="text" placeholder="Email" />
                        <div className="split">
                            <input type="text" placeholder="Mobile Number" />
                            <input type="text" placeholder="ABN Number" />
                        </div>
                        <div className="split">
                            <input type="text" placeholder="Your Suburb" />
                            <input type="text" placeholder="Your City" />
                        </div>
                        <input type="password" placeholder="Choose a Password" />
                        <input type="password" placeholder="Re-Enter Password" />
                    </div>

                    <p>VEHICLE DETAILS</p>
                    <div className="inputs">
                        <select name="type">
                            <option value="2 weeler">2 Wheeler</option>
                            <option value="4 weeler">4 Wheeler</option>
                            <option value="ref weeler">Refregirated Van</option>
                        </select>
                        <input type="text" placeholder="Vehicle Make" />
                        <input type="text" placeholder="Vehicle Model" />
                        <input type="text" placeholder="Vehicle Year" />
                    </div>

                    <p>APPLICATION</p>
                    <div className="inputs">
                        <p>Can You Lift and Groove? (Yes or No – we need to know if you can dance with that fridge)</p>
                        <textarea placeholder="Answer" rows={6}></textarea>

                        <p>Pitch Your flexer Tale: Why are you the next PicUp sensation?</p>
                        <textarea placeholder="Answer" rows={6}></textarea>
                    </div>

                    <p>PARTY PREFERENCES</p>
                    <div className="inputs">
                        <p>Availability (Days, Hours, When the stars align, etc.)</p>
                        <input type="text" placeholder="Answer" />
                        <p>flexer Style: Are you a solo superstar or do you prefer a duo act? Or are you the Beyoncé of flexing and can do both?</p>
                        <input type="text" placeholder="Answer" />
                    </div>

                    <p>LAST DANCE MOVE</p>
                    <div className="inputs">
                        <p>Insurance Mastery: You know the drill – public liability, CTP car insurance. We need to see your superhero cape (insurance papers) before you officially join the flexer dance floor.</p>
                        <input type="text" placeholder="Answer" />
                        <p>Ready to drop the beat and make some flex-tastic memories? APPLY NOW and let the flexer saga begin! 🚀🎶</p>
                    </div>

                    <button>Submit Details</button>
                </form>
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
  )
}

export default DriverRegistration