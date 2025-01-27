import React from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import image1 from '../Images/image13 (1).png';
import image2 from '../Images/image12.png';
import image3 from '../Images/image14.png';
import image4 from '../Images/image10.png';
import '../Assets/Carousel.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    { image: image1, content: 'A Project Management System simplifies the complexities of planning and executing projects. It helps teams collaborate efficiently, manage deadlines, and track progress in real-time. With tools like task allocation, milestone tracking, and resource management, you can deliver projects on time while maintaining quality and transparency.' },
    { image: image2, content: 'Organizing and completing projects has never been easier with a Project Management System. It brings your team together in one platform, streamlining communication, scheduling tasks, and monitoring performance. From small tasks to large-scale projects, it ensures seamless execution every step of the way.' },
    { image: image3, content: 'A Project Management System is your key to delivering projects efficiently. It keeps everything in one place, from task assignments to deadlines, so nothing gets overlooked. With real-time updates and insights, teams can stay aligned, meet objectives, and achieve success together.' },
    { image: image4, content: 'Maximize productivity with a Project Management System designed for modern teams. It enables seamless collaboration, smarter resource allocation, and better decision-making. Stay ahead of challenges, manage workflows effectively, and complete projects with confidence.' },
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slider-slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} loading="lazy" />
            <div className="content-overlay">
              <div className="content-text">{slide.content}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
