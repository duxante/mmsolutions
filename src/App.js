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
import PostById from './features/blog/component/postById';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Pages = () => {
  return (
    <>
      <HomeView />
      <About />
      <ServiceOffering />
      <Statistics />
      <Testimonials />
      <BlogPosts />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Pages />} />
          <Route path="/:postId" element={<PostById />} />
        </Routes>
        <Footer />
        <MadeBy />
      </BrowserRouter>
    </div>
  );
}

export default App;
