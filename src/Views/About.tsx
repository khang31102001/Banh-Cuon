import React from "react";
import SectionBanner from "@/components/SectionBanner";
import SectionStory from "@/components/About/SectionStory";
import SectionDevelopment from "@/components/About/SectionDevelopment";
import SectionValue from "@/components/About/SectionValue";
import { Media } from "@/assets/Media";






const About = () => {
    return (
        <div >
            <SectionBanner
                title="Giới Thiệu"
                backgroundImage={Media.banner_about}
                backgroundPosition="75% 50%"
            >
                <p className="text-neutral-200 text-lg md:text-xl mt-2 drop-shadow-sm tracking-wide">
                    Tìm hiểu câu chuyện, giá trị cốt lõi và hành trình phát triển của Bánh Cuốn Tây Hồ
                </p>
            </SectionBanner>

            {/* Story Section */}
            <SectionStory/>

            {/* Timeline Section */}
            <SectionDevelopment/>
            

            {/* Values Section */}
            <SectionValue/>
          
           
        </div>

    );
};

export default About;
