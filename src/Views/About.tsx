import React from "react";
import SectionTitle from "../components/SectionTitle";
import SectionBanner from "@/components/SectionBanner";
import SectionStory from "@/components/About/SectionStory";
import SectionDevelopment from "@/components/About/SectionDevelopment";
import SectionValue from "@/components/About/SectionValue";





const About = () => {
    return (
        <div >
            <SectionBanner
                title="Giới Thiệu"
                backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            >
                <p className="text-white/90 max-w-3xl mx-auto text-center mt-4">
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
