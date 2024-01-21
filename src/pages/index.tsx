import Head from "../../node_modules/next/head";
import { useEffect } from "react";
import HomePage from "@/components/HomePage/index";

export default function Home() {
  useEffect((): void => {
    const cursorRing: HTMLElement | null =
      document.getElementById("cursor-ring");
    if (cursorRing) {
      document.addEventListener("mousemove", (e) => {
        requestAnimationFrame(() => {
          cursorRing.style.left = `${e.clientX}px`;
          cursorRing.style.top = `${e.clientY}px`;
        });
      });

      const toggleCursor = () => {
        cursorRing.classList.toggle("active");
      };

      document.addEventListener("mousedown", toggleCursor);
      document.addEventListener("mouseup", toggleCursor);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <main>
        <div id="cursor-ring"></div>
        <HomePage />
      </main>
    </>
  );
}
