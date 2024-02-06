import { Routes, Route } from 'react-router-dom';
import HomeView from './features/home/homeView';
import Navigation from './features/navigation/components/navigation';
import Footer from './features/footer/footer';
import About from './features/about/components/about';
import './App.css';
import ServiceOffering from './features/serviceOffering/serviceOffering';

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
      <Footer />
    </div>
  );
}

export default App;
