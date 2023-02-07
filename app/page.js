import { Footer, Navbar } from '../components/element';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../components/section';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <div>
      <World />
      <div className="gradient-01 z-0" />
      <Insights />
      <div className="gradient-02 z-0" />
      <Feedback />
    </div>

    <Footer />
  </div>
);

export default Page;
