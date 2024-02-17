import React, { useState } from "react";
import styles from "./index.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Header from "../Header/index";
import Projects from "../Projects/index";
import Footer from "../Footer/index";

export default function HomePage() {
  const [active, setActive] = useState<number>(0);
  const [swiper, setSwiper] = useState<any>(null);

  const handleNavItemClick = (index: number) => {
    swiper?.slideTo(index);
  };

  return (
    <div style={{ display: "flex" }}>
      <div className={styles.navber}>
        <h3>
          <span>M</span>
          <span>y</span>
          <br />
          <span>P</span>
          <span>o</span>
          <span>r</span>
          <span>t</span>
          <span>f</span>
          <span>o</span>
          <span>l</span>
          <span>i</span>
          <span>o</span>
        </h3>

        <ul>
          <li
            style={{ color: active === 2 ? "#7f00ff" : "#fff" }}
            onClick={() => handleNavItemClick(2)}
          >
            Contact
          </li>
          <li
            style={{ color: active === 1 ? "#7f00ff" : "#fff" }}
            onClick={() => handleNavItemClick(1)}
          >
            Projects
          </li>
          <li
            style={{ color: active === 0 ? "#7f00ff" : "#fff" }}
            onClick={() => handleNavItemClick(0)}
          >
            Home
          </li>
        </ul>
      </div>
      <div style={{ width: "100%" }}>
        <Swiper
          direction="vertical"
          onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
          onSlideChange={(e) => setActive(e.activeIndex)}
          className={styles.swiper}
        >
          <SwiperSlide>
            <Header />
          </SwiperSlide>
          <SwiperSlide>
            <Projects />
          </SwiperSlide>
          <SwiperSlide>
            <Footer />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
