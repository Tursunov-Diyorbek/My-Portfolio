import styles from "./index.module.sass";
import { useEffect } from "react";
import Typed from "typed.js";

export default function Header() {
  useEffect(() => {
    let typingEffect: Typed = new Typed(".multid", {
      strings: ["Tursunov", "Diyorbek", "Frontend developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
    });

    return () => {
      typingEffect.destroy();
    };
  }, []);

  return (
    <>
      <div className={styles.header}>
        <div>
          <h1>
            {"I'm"} <span className="multid"></span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            aperiam asperiores eligendi laboriosam, quas ratione rem!
            Accusantium aliquid deleniti earum error expedita, incidunt nisi
            pariatur.
          </p>
          <button>Contact</button>
        </div>
        <div>
          <img
            src="/photo_2023-02-07_14-21-59.jpg"
            alt="myPhoto"
            className={styles.header__myPhoto}
          />
        </div>
      </div>
    </>
  );
}
