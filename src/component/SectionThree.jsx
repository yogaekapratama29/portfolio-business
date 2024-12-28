import gedung1 from "../assets/gedung1.jpg";
import gedung2 from "../assets/gedung2.jpg";
import gedung3 from "../assets/gedung3.jpg";
import gedung4 from "../assets/gedung14.webp";
import gedung5 from "../assets/gedung5.jpg";
import gedung6 from "../assets/gedung6.jpg";

import { Navigation, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/navigation';

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";


const SectionThree = () => {
    const [swiper,setSwiper] = useState()
    const [activeSlide,setActiveSlide] = useState(1)
  const imgs = [
    { id: 1, gedung: gedung3 },
    { id: 2, gedung: gedung2 },
    { id: 3, gedung: gedung1 },
    { id: 4, gedung: gedung6 },
    { id: 5, gedung: gedung5 },
  ];

  const CustomNextArrow = () => (
    <button className="swiper-button-next">
      <FaArrowRight />
    </button>
  );

  const CustomPrevArrow = () => (
    <button className="swiper-button-prev">
       <FaArrowLeft />
    </button>
  );

  const handlePrev = () => {
    swiper?.slidePrev();
  }
  const handleNext = () => {
    swiper?.slideNext();
  }

  return (
    <section className="p-20 overflow-hidden">
      <div className="flex items-center justify-around mb-10">
        <h1 className="text-4xl font-bold">Senopati Gallery</h1>
        <div className="custom-navigation">
          <div onClick={handlePrev}>
            <CustomPrevArrow />
          </div>
          <span>{activeSlide} / {imgs.length} </span>
          <div onClick={handleNext}>
            <CustomNextArrow />
          </div>
        </div>
      </div>
      <div className="swiper-container-wrapper">
        <Swiper
          className="h-[500px px-20 ml-40"
          modules={[Navigation, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          //   navigation
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          //   scrollbar={{ draggable: true }}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => {setActiveSlide(swiper.activeIndex + 1)}}
        >
          {imgs.map((slide) => {
            return (
              <div key={slide.id}>
                <SwiperSlide>
                  <img
                    className="h-full object-cover w-[90%] rounded-xl"
                    src={slide.gedung}
                    alt=""
                  />
                </SwiperSlide>
              </div>
            );
          })}
          {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionThree;
