import React from 'react';
import './Testimonials.css';
import AVT1 from '../../assets/avatar1.jpg';
import AVT2 from '../../assets/avatar2.jpg';
import AVT3 from '../../assets/avatar3.jpg';
import AVT4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  const data = [
    {
      avatar: AVT1,
      name: 'Elsa Andersson',
      review: 'Working with Alvin was a fantastic experience. His web development skills are exceptional, and I was amazed by the quality of his work. As a client with needs in both web development and .NET ASP.NET solutions, Alvin proved to be a highly skilled and reliable professional.',
    },
    {
      avatar: AVT2,
      name: 'Oskar Lindström',
      review: 'Alvin exceeded my expectations in our recent collaboration. His expertise in web development and .NET ASP.NET solutions is evident in the seamless project delivery. As a client, I appreciate Alvin\'s reliability and commitment to delivering high-quality results.',
    },
    {
      avatar: AVT3,
      name: 'Astrid Nilsson',
      review: 'I had the pleasure of working with Alvin, and I must say his web development and .NET ASP.NET skills are top-notch. As a client seeking professional solutions, I found Alvin to be not only highly skilled but also a trustworthy partner who delivered beyond my expectations.',
    },
    {
      avatar: AVT4,
      name: 'Gustav Eriksson',
      review: 'Alvin is a standout developer. His work on our web development project and .NET ASP.NET solutions was impeccable. As a client, I value Alvin\'s dedication to excellence, and I highly recommend his services to anyone in need of reliable and skilled development.',
    },
  ];

  return (
    <section id='testimonial'>
      <h5>Review From Clients</h5>
      <h1>Testimonials</h1>

      <Swiper className="container testimonials_container"
      
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="client_avatar">
              <img src={avatar} alt={`Avatar ${index + 1}`} />
            </div>
            <h5 className='client_name'>{name}</h5>
            <small className="client_review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Testimonials;
