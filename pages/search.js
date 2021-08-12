import Footer from "../components/Footer";
import Header from "../components/Header";

const Search = () => {
  return (
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className=" font-semibold text-xs">
            300+ Stays for 5 number of guests
          </p>
          <h2 className="text-3xl font-semibold mt-2 mb-5">Stays in Jupiter</h2>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Cancellation Flexibility</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
