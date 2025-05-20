import React from 'react'
import { RiArrowRightUpLine, RiDownloadLine, RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine } from '@remixicon/react'
import profile_img from "../../assets/images/about/raju.jpg"
import SlideUp from '../animations/slideUp'
const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    {/*  START ABOUT IMAGE DESIGN AREA  */}
                    <div className="col-lg-5">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profile_img} alt="About Me" />
                                <h2>Raju Rayhan</h2>
                                <div className="about-btn btn-one text-center">
                                    <h6>Available for work</h6>
                                    <div className="circle pulse color-pulse"></div>
                                </div>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><a target="_blank" href="https://www.linkedin.com/in/rajurayhan/"><i><RiLinkedinFill size={20} /></i></a></li>
                                        <li><a target="_blank" href="https://github.com/rajurayhan/"><i><RiGithubLine size={20} /></i></a></li>
                                        <li><a target="_blank" href="https://www.facebook.com/rajurayhan/"><i><RiFacebookCircleFill size={20} /></i></a></li>
                                        <li><a target="_blank" href="https://twitter.com/raju_rayhan"><i><RiTwitterXLine size={20} /></i></a></li> 
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/*  END ABOUT IMAGE DESIGN AREA  */}
                    {/*  START ABOUT TEXT DESIGN AREA  */}
                    <div className="col-lg-7">
                        <div className="about-content-part">
                            <SlideUp>
                                <h2>
                                    I build things <span>That Works</span> and <span>Solves problems</span>
                                </h2>
                                <div className="hero-btns">
                                    <a href="#" className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i></a>
                                </div>
                            </SlideUp>
                            <SlideUp>
                                <ul className="list-style-one two-column">
                                    <li><i><RiArrowRightUpLine size={18} /></i> Scalable Architecture Design</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Full-Stack Web Development</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Advanced Prompt Engineering</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> API Integration & Automation</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Chrome Extension Development</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> AI Workflow Orchestration</li>
                                </ul>
                            </SlideUp>


                        </div>
                    </div>
                    {/*  END ABOUT TEXT DESIGN AREA  */}
                </div>
            </div>
        </section>
    )
}

export default About