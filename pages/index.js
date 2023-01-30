import Head from "next/head";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Tags from "../components/Tags";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mahdo blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main>
        <Hero />
        <section className="articles">
          <div className="articles__top">
            <Tags />
            <h2 className="articles__title">Articles</h2>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
