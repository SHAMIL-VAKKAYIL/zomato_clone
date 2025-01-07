import React from 'react'
import './zomato.css'
import { FaLinkedin, FaLocationDot, FaXTwitter } from 'react-icons/fa6'
import { CiSearch } from 'react-icons/ci'
import { IoLogoYoutube, IoMdArrowDropright } from 'react-icons/io'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Accordion from 'react-bootstrap/Accordion';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'


function Zomato() {
    return (
        <div>
            <div className='poster'>
                <div className='navbar'>
                    <div>
                        <p>Get the App</p>
                    </div>
                    <div className='navitems'>
                        <ul>
                            <li>Investor Relations</li>
                            <li>Add restaurent</li>
                            <li>log in</li>
                            <li>Sign up</li>
                        </ul>
                    </div>
                </div>
                <div className='bodycontent'>
                    <div className='img'>
                        <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="" />
                    </div>
                    <div >
                        <h2>Discover the best food & drinks in Tirur</h2>
                    </div>
                    <div className='inputcontainer'>
                        <div className='location'>
                            <FaLocationDot color='#FF7E8B' size={20} />
                            <select name="" id="">
                                <option>Fort kochi, kochi</option>
                            </select>
                        </div>
                        <div className='search'>
                            <CiSearch size={22} color='#828282' />
                            <input type="text" placeholder='Search for restaurents, cuisines...' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className='innersec2'>
                    <div className='seccontent1'>
                        <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="" />
                        <div className='head'>Order Online</div>
                        <div className='para'>stay home and order to your door step</div>
                    </div>
                </div>
                <div className='innersec2'>
                    <div className='seccontent1'>
                        <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="" />
                        <div className='head'>Dining</div>
                        <div className='para'>View the city's favourite dining venues</div>
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className='innersec3'>
                    <h1 className="heading">Collections</h1>
                    <div className="subheading">
                        <div className='left'>
                            <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Kochi, based on trends</p>
                        </div>
                        <div className='right'>
                            <p className=''>All Collections in Kochi</p>
                            <IoMdArrowDropright size={26} />
                        </div>
                    </div>
                    <div className="cardsec3">
                        <div className='card cardimg1'>
                            <div>8 Place For Art Lovers</div>
                            <div>7 Places <IoMdArrowDropright size={26} /></div>
                        </div>
                        <div className='card cardimg2'>
                            <div>Great Cafes</div>
                            <div>11 Places <IoMdArrowDropright size={26} /></div>
                        </div>
                        <div className='card cardimg3'>
                            <div>6 Place For Authentic Ku...</div>
                            <div>5 Places <IoMdArrowDropright size={26} /></div>
                        </div>
                        <div className='card cardimg4'>
                            <div>5 Must-visit Legendary Pl...</div>
                            <div>5 Places <IoMdArrowDropright size={26} /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section4">
                <div className="innersec4">
                    <h1 className='head'>Popular localities in and around Kochi</h1>
                    <div className="cardsec">
                        <div className="card4">
                            <div className="cardContent">
                                <h3>Kakkanad</h3>
                                <p>522 places</p>
                            </div>
                            <div className='icon'>

                                <MdOutlineKeyboardArrowRight size={22} />
                            </div>

                        </div>
                        <div className="card4">
                            <div className="cardContent">
                                <h3>Edappally</h3>
                                <p>375 places</p>
                            </div>
                            <div className='icon'>

                                <MdOutlineKeyboardArrowRight size={22} />
                            </div>

                        </div>
                        <div className="card4">
                            <div className="cardContent">
                                <h3>Fort Kochi</h3>
                                <p>142 places</p>
                            </div>
                            <div className='icon'>

                                <MdOutlineKeyboardArrowRight size={22} />
                            </div>

                        </div>
                        <div className="card4">
                            <div className="cardContent">
                                <h3>Panampilly Nagar</h3>
                                <p>112 places</p>
                            </div>
                            <div className='icon'>

                                <MdOutlineKeyboardArrowRight size={22} />
                            </div>

                        </div>
                        <div className="card4">
                            <div className="cardContent">
                                <h3>MG Road</h3>
                                <p>103 places</p>
                            </div>
                            <div className='icon'>

                                <MdOutlineKeyboardArrowRight size={22} />
                            </div>

                        </div>
                        <div className="card4">
                            <div className="cardContent">
                                <h3>Kacheripady</h3>
                                <p>126 places</p>
                            </div>
                            <div className='icon'>

                                <MdOutlineKeyboardArrowRight size={22} />
                            </div>

                        </div>
                        <div className="card4">
                            <div className="cardContent">
                                <h3>Palarivattom</h3>
                                <p>172 places</p>
                            </div>
                            <div className='icon'>

                                <MdOutlineKeyboardArrowRight size={22} />
                            </div>

                        </div>
                        <div className="card4">
                            <div className="cardContent">
                                <h3>Vyttila</h3>
                                <p>139 places</p>
                            </div>
                            <div className='icon'>

                                <MdOutlineKeyboardArrowRight size={22} />
                            </div>

                        </div>
                        <div className="card4 moreCard">
                            <h5>See more <MdOutlineKeyboardArrowDown size={22} /></h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section5">
                <div className="innersec5">
                    <div className='left5'>
                        <img src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png" alt="" height={'400px'} />
                    </div>
                    <div className='right5'>
                        <h1>Get the Zomato app</h1>
                        <p style={{ fontSize: '20px', color: 'rgb(54, 54, 54)' }}>We will send you a link, open it on your phone to download the app</p>
                        <div className='radiomain5'>
                            <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                                <input type="radio" size={32} name='select' className='radiobtn5' />
                                <div>Email</div>
                            </div>
                            <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                                <input type="radio" size={36} name='select' className='radiobtn5' />
                                <div>phone</div>
                            </div>
                        </div>
                        <div className='emailinp'>
                            <input type="text" placeholder='Email' />
                            <button>share app link</button>
                        </div>
                        <div>
                            <p style={{ color: ' rgba(54, 54, 54, 0.75)' }}>Dowenload app from</p>
                            <div className='dowenloadcard'>
                                <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
                                <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section6">
                <div className="innersec6">
                    <h1>Explore options near me</h1>
                    <div>
                        <br />
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0" style={{ height: '65px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Accordion.Header>Popular Cuisines Near Me</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <br />
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0" style={{ height: '65px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Accordion.Header>Popular Restaurant Types Near me</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <br />
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0" style={{ height: '65px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Accordion.Header>Top Restaurant Chains</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <br />
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0" style={{ height: '65px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Accordion.Header>Cities We Deliver To</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="innerfooter">
                    <div className='innerfooter1'>
                        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="" />
                        <div className='btns'>
                            <button><img src='https://cdn.pixabay.com/photo/2013/07/13/14/15/india-162319_640.png' alt="" />India  <MdOutlineKeyboardArrowDown size={20} /></button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#1C1C1C" width="18" height="18" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" class="sc-rbbb40-0 iwHbVQ"><title>language-globe</title><path d="M10 0c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.011-5.518-4.482-9.989-9.999-10h-0.001zM17.14 6.18h-3c-0.264-1.393-0.63-2.62-1.107-3.791l0.047 0.131c1.755 0.733 3.161 2.010 4.039 3.618l0.021 0.042zM18.1 10c-0.002 0.676-0.090 1.33-0.252 1.954l0.012-0.054h-3.44c0.059-0.57 0.092-1.231 0.092-1.9s-0.034-1.33-0.099-1.982l0.007 0.082h3.44c0.15 0.57 0.238 1.224 0.24 1.899v0.001zM1.9 10c0.002-0.676 0.090-1.33 0.252-1.954l-0.012 0.054h3.46c-0.059 0.57-0.092 1.231-0.092 1.9s0.034 1.33 0.099 1.982l-0.007-0.082h-3.46c-0.15-0.57-0.238-1.224-0.24-1.899v-0.001zM7.48 8.1h5.040c0.063 0.57 0.099 1.231 0.099 1.9s-0.036 1.33-0.107 1.981l0.007-0.081h-5.040c-0.063-0.57-0.099-1.231-0.099-1.9s0.036-1.33 0.107-1.981l-0.007 0.081zM10.76 1.9c0.603 1.228 1.106 2.657 1.436 4.152l0.024 0.128h-4.44c0.354-1.623 0.857-3.052 1.51-4.395l-0.050 0.115c0.24 0 0.5 0 0.76 0s0.48 0 0.76 0zM6.96 2.48c-0.445 1.051-0.825 2.291-1.079 3.576l-0.021 0.124h-3c0.899-1.65 2.305-2.927 4.007-3.64l0.053-0.020zM2.86 13.8h3c0.262 1.4 0.629 2.634 1.107 3.811l-0.047-0.131c-1.757-0.738-3.165-2.022-4.039-3.637l-0.021-0.043zM9.24 18.1c-0.605-1.234-1.108-2.67-1.437-4.172l-0.023-0.128h4.44c-0.352 1.63-0.855 3.066-1.51 4.415l0.050-0.115c-0.24 0-0.5 0-0.76 0s-0.48 0-0.76 0zM13.040 17.52c0.431-1.046 0.798-2.28 1.041-3.558l0.019-0.122h3.040c-0.902 1.642-2.308 2.912-4.006 3.62l-0.054 0.020z"></path></svg>
                                English
                                <MdOutlineKeyboardArrowDown size={20} />
                            </button>
                        </div>
                    </div>
                    <div className="innerfooter2">
                        <div className='innerfooter2_1'>
                            <h5>About Zomato</h5>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Who We Are</div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Blog</div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Work With Us</div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Investor Relation</div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Report Fraud</div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Press Kit</div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Contact us</div>
                        </div>
                        <div className='innerfooter2_2'>
                            <h5>Zomaverse</h5>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Zomato</div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Blinkit</div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>District</div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Feeding India</div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Hyperpure</div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Zomato Live</div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Zomaland</div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Weather Union</div>
                        </div>
                        <div className='innerfooter2_3'>
                            <h5>For Restaurants</h5>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Partner With US</div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Apps For you</div>
                        </div>
                        <div className='innerfooter2_4'>
                            <h5>Learn More</h5>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Privacy</div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Security</div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}>Terms</div>
                        </div>
                        <div className='innerfooter2_5'>
                            <h5>Social links</h5>
                            <div ><FaLinkedin size={24} /> <FaInstagramSquare size={24} /> <FaXTwitter size={24} /> <IoLogoYoutube size={24} /> <FaFacebookSquare size={24} /></div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}><img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" /></div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.69)', fontSize: '17px' }}><img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" /></div>
                        </div>
                    </div>
                    <hr />
                    <p style={{fontSize:'14px' ,color:'rgba(0, 0, 0, 0.69)'}}>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2025 © Zomato™ Ltd. All rights reserved</p>
                </div>
            </div>

        </div>
    )
}

export default Zomato
