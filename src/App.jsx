import Articles from "./components/Articles";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </div>
  );
};

export default App;
