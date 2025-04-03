import Navbar from "./components/Navbar";
import AboutUs from "./sections/AboutUs";
import FAQ from "./sections/FAQ";
import Hero from "./sections/Hero";
import OurApproach from "./sections/OurApproach";
import Overview from "./sections/Overview";
import Review from "./sections/Review";
import Services from "./sections/Services";
import Industry from "./sections/Industry";
import OurAchievement from "./sections/OurAchievment";
import Footer from "./sections/Footer";

function App() {
  return (
  
    <div>
      <Navbar />
      <Hero />
      <Overview />
      <Services />
      <OurApproach />
      <Industry />
      <OurAchievement />
      <Review />
      <AboutUs />
      <FAQ />
      <Footer />
      
      </div>
 
  );
}

export default App;
