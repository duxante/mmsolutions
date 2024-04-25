import HomeView from './features/home/homeView';
import Navigation from './features/navigation/Navigation';
import Footer from '../src/features/footer/footer';
import About from './features/about/about';
import ServiceOffering from './features/serviceOffering/serviceOffering';
import Statistics from './features/statistics/statistics';
import Testimonials from './features/testimonials/testimonials';
import BlogPosts from './features/blog/blogPosts';
import MadeBy from './features/madeBy/madeBy';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
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
