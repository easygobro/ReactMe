import { Footer, Navbar, Contact } from "../components";
import {
  About,
  Work,
  Feedback,
  Skills,
  Hero,
  Insights,
  WhatsNew,
} from "../sections";

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Work />
    </div>
    <div className="relative">
      <Skills />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Contact />
    <Footer id="footer" />
  </div>
);

export default Home;
