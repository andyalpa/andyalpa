import React from "react";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQFK_3yiaxHc-A/profile-displayphoto-shrink_200_200/B4EZQg0.EuGYAY-/0/1735717545099?e=1744243200&v=beta&t=j6uEe2by8YPn_HPNWiAJBdhvcXgEsudOgNOoWSs6MNg",
      title: "Taylor Allen",
      subtitle:
        "Implementation Specialist / Software Engineer | JavaScript | React | ReactNative | Python | TypeScript | Firebase | Skilled in creating seamless user experiences and mentoring aspiring developers",
      comment: (
        <>
          I had the pleasure of mentoring Andy during his time at 4Geeks
          Academy, and he stood out as a dedicated, hardworking, and highly
          engaged student. He never shied away from challenges and consistently
          asked thoughtful questions that demonstrated his deep commitment to
          learning. <br />
          <br />
          Andy excelled in React and JavaScript, with a strong understanding of
          API implementation. His problem-solving skills were exceptional—he
          conducted thorough research before seeking help, showcasing his
          initiative and critical thinking. His eagerness to learn was evident,
          as he regularly sought additional challenges and applied feedback
          effectively to improve his skills. <br />
          <br />
          A strong collaborator and communicator, Andy worked well with his
          peers, often taking the lead and fostering an open, productive
          dialogue. His leadership qualities shone during group projects, where
          he contributed meaningful ideas and stepped up during setbacks. One
          notable example was his final project, where he successfully
          implemented two APIs and proactively supported his team. <br />
          <br />
          Andy’s growth throughout the cohort was remarkable, particularly in
          his ability to independently research and troubleshoot. His natural
          curiosity, open-mindedness, and proactive approach make him an asset
          to any team. I highly recommend him for any opportunity that values
          dedication, technical skill, and a collaborative mindset.
        </>
      ),
    },
    {
      id: 2,
      image: "https://media.licdn.com/dms/image/v2/D5603AQEE9nVxP0kv3w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1683813966776?e=1744243200&v=beta&t=YzLhDVmcYUEEpplLCmHauVNwfjqEMvZwS-TGsuwE9o4",
      title: "Valerie Dubach",
      subtitle: "Full-stack software developer- React | CSS | Python | SQL",
      comment: (
        <>
          As Andy's teacher at 4Geeks, I saw his intelligence and dedication
          shine throughout our time together. Andy has a sharp mind and a
          natural ability to grasp complex concepts quickly, often going beyond
          the surface to truly understand the material. His curiosity and
          eagerness to learn complement his determination to tackle challenges
          head-on. <br />
          <br />
          What also stood out was Andy’s ability to balance his intellect with
          approachability. He is thoughtful and kind, earning the respect of his
          peers while fostering a collaborative environment. His insightful
          questions demonstrated not only a desire to learn but also a
          willingness to engage deeply with the subject matter.
          <br />
          <br />
          Andy’s combination of intelligence, ambition, and strong interpersonal
          skills makes him an exceptional student. I’m confident he will be a
          valuable asset to any team or organization.
          <br />
          <br />
        </>
      ),
    },
    {
      id: 2,
      image: "https://media.licdn.com/dms/image/v2/C5603AQF7x3iuBPvbyQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517048392743?e=1744243200&v=beta&t=glrdB6CHsxPALI7HArGyqzx1vSCc_BNFrwMmxVnMgT8",
      title: "Alfonso Leon",
      subtitle: "Security Administration Analyst at Mechanics Bank",
      comment: (
        <>
          Andy was a great mentee, very bright, tech-savvy, reliable, and adept at anything he learns. I can see Andy flourishing in the IT world, as he brings a tenacious and eager energy, ready to learn, and always willing to help. Anyone that hires him will see how great of an asset he can be to any team.
        </>
      ),
    },
  ];

  return (
    <div className="testimonials container section" id="testimonials">
      <h2 className="section-title">Testimonials</h2>

      <Swiper
        className="testimonials__container grid"
        data-aos="zoom-out-up"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {testimonials.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item">
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonial__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
