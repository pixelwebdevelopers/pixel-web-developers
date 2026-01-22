import About1 from "../Components/About/About1";

import CaseStudy1 from "../Components/CaseStudy/CaseStudy1";
import ContactInfo1 from "../Components/ContactInfo/ContactInfo1";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Marquee1 from "../Components/Marquee/Marquee1";
import Pricing1 from "../Components/Pricing/Pricing1";
import SuccessStories from "../Components/SuccessStories/SuccessStories";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import WhatWeDo from "../Components/WhatWeDo/WhatWeDo";
import WhyChoose1 from "../Components/WhyChoose/WhyChoose1";

const Home = () => {
    return (
        <div>
            <div id="home">
                <HeroBanner1></HeroBanner1>
            </div>
            <Marquee1></Marquee1>
            <div id="service">
                <WhatWeDo></WhatWeDo>
            </div>
            <div id="about">
                <About1></About1>
            </div>
            <div id="project">
                <CaseStudy1></CaseStudy1>
            </div>
            <SuccessStories></SuccessStories>
            <WhyChoose1></WhyChoose1>
            <div id="pricing">
                <Pricing1 CoulmnClass="pricing-section fix section-padding section-bg"></Pricing1>
            </div>
            <Testimonial1></Testimonial1>
            <div id="contact">
                <ContactInfo1></ContactInfo1>
            </div>

        </div>
    );
};

export default Home;