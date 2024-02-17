import React, { useEffect } from "react";

const Footer: React.FC = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      for (let i = 0; i < 128; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.setProperty("--size", `${2 + Math.random() * 4}rem`);
        bubble.style.setProperty("--distance", `${6 + Math.random() * 4}rem`);
        bubble.style.setProperty("--position", `${-5 + Math.random() * 110}%`);
        bubble.style.setProperty("--time", `${2 + Math.random() * 2}s`);
        bubble.style.setProperty("--delay", `${-1 * (2 + Math.random() * 2)}s`);
        document.querySelector(".bubbles")?.appendChild(bubble);
      }
    }
  }, []);

  return (
    <div className="main">
      <div className="footer">
        <div className="bubbles"></div>
        <div className="content">
          <div>
            <div>
              <b>Eldew</b>
              <a href="#">Secuce</a>
              <a href="#">Drupand</a>
              <a href="#">Oceash</a>
              <a href="#">Ugefe</a>
              <a href="#">Babed</a>
            </div>
            <div>
              <b>Eldew</b>
              <a href="#">Secuce</a>
              <a href="#">Drupand</a>
              <a href="#">Oceash</a>
              <a href="#">Ugefe</a>
              <a href="#">Babed</a>
            </div>
            <div>
              <b>Eldew</b>
              <a href="#">Secuce</a>
              <a href="#">Drupand</a>
              <a href="#">Oceash</a>
              <a href="#">Ugefe</a>
              <a href="#">Babed</a>
            </div>
          </div>
          <div>
            <a
              className="image"
              // href="https://codepen.io/z-"
              target="_blank"
              style={{
                backgroundImage:
                  "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg')",
              }}
            ></a>
            <p>©2024 Not Really</p>
          </div>
        </div>
      </div>
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Footer;
