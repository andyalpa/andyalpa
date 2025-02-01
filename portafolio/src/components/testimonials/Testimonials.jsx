import React from 'react'
import './testimonials.css'
import Image1 from "../../assets/avatar-1.svg"
import Image3 from "../../assets/avatar-3.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {

  const testimonials = [
    {
      id: 1,
      image: Image1,
      title: "John Doe",
      subtitle: "Product designer at Dribble",
      comment:
        "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
    {
      id: 2,
      image: Image3,
      title: "John Doe",
      subtitle: "Product designer at Dribble",
      comment:
        "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
  ];
  
  return (
    <div className="testimonials container section" id="testimonials">
      <h2 className="section-title">Testimonials</h2>

      <Swiper className="testimonials__container grid"
      
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      pagination={{clickable: true}}
      >
        {testimonials.map(({id, image, title, subtitle, comment}) => {
          return (
            <SwiperSlide className="testimonial__item">
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonial__title">{title}</h3>
              <span className='subtitle'>{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Testimonials