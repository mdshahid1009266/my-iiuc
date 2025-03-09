import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const images=[
    "https://c0.wallpaperflare.com/preview/638/482/358/castle-lawn-great-britain-england.jpg",
    "https://c1.wallpaperflare.com/preview/736/919/619/massachusetts-cambridge-boston-usa.jpg",
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://ik.imagekit.io/s1sp3stox/tr:h-555,w-1898,fo-none/graduation/952-graduation-summer-2016-throw-hats-wide.jpg",
    "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://www.keele.ac.uk/about/news/2022/april/keele-celebrates/Im1S.jpg",
    "https://images.unsplash.com/photo-1501503069356-3c6b82a17d89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1607013407627-6ee814329547?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
  const [image, setimage] = useState(images);
  // useEffect(() => {
  //   async function logMovies() {
  //     const response = await fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=15");
  //     const movies = await response.json();
  //     setimage(movies?.photos);
  //   }
  //   logMovies();
  // }, []);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div id="carousel">
      <div className="carouselContainer">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {/* <SwiperSlide>
            <div className="swiperchild">
              <img src="/image/swiperchildimg1.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperchild">
              <img src="/image/swiperchildimg1.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperchild">
              <img src="/image/swiperchildimg1.jpg" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiperchild">
              <img src="/image/swiperchildimg1.jpg" alt="" />
            </div>
          </SwiperSlide> */}
          {
            image?.map(e =>
              <SwiperSlide>
                <div className="swiperchild">
                  <img src={e} alt="" />
                </div>
              </SwiperSlide>
            )
          }
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
