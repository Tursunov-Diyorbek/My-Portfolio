import Head from "../../node_modules/next/head";
import HomePage from "@/components/HomePage/index";
import ParticleComponent from "@/components/animation";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <main>
        <ParticleComponent />
        <HomePage />
      </main>
    </>
  );
}
