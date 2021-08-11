import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, CardsData }) {
  return (
    <div className="h-[2vh]">
      <Head>
        <title>I don't know</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1>Hi there </h1> */}
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-4 sm:px-16">
        <section className="pt-6">
          <h2 className="text-2xl font-semibold pb-5 ">
            Explore some of these
          </h2>
          {/* Some data from the API */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => {
              return (
                <SmallCard
                  key={img}
                  img={img}
                  distance={distance}
                  location={location}
                />
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 ">
            {CardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Lorem ispum"
          buttonText="Let's go"
        />
      </main>
      <Footer />
      {/* header */}
      {/* banner */}
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const CardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      CardsData,
    },
  };
}
