import styles from "./index.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Header from "../Header/index";

export default function HomePage() {
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
          <li>Contact</li>
          <li>Projects</li>
          <li>Home</li>
        </ul>

        {/* <CgMenuRight className={styles.navber__menuIcon}/> */}
      </div>
      <div style={{ width: "100%" }}>
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.swiper__slide}>
            <Header />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
