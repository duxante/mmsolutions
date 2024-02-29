import { Routes, Route } from 'react-router-dom';
import HomeView from './features/home/homeView';
import Navigation from './features/navigation/components/navigation';
import Footer from './features/footer/footer';
import About from './features/about/components/about';
import ServiceOffering from './features/serviceOffering/serviceOffering';
import Statistics from './features/statistics/statistics';
import Testimonials from './features/testimonials/testimonials';
import './App.css';
import BlogPosts from './features/blog/blogPosts';
import MadeBy from './features/madeBy/madeBy';

function App() {
  return (
    <div className="App">
      <Navigation />
      {/*   <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      <HomeView />
      <About />
      <ServiceOffering />
      <Statistics />
      <Testimonials />
      <BlogPosts />
      <Footer />
      <MadeBy />
    </div>
  );
}

export default App;
