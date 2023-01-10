import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home(data) {
  console.log(data);
  return (
    <div className="text-balck">
      <Head>
        <title>News - therogersak</title>
        <meta name="description" content="news app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main data={data} />
      <Footer />
    </div>
  );
}

/* API FEATCH => */
export async function getServerSideProps() {
  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`
  ).then((res) => res.json());

  return {
    props: { data },
  };
}
