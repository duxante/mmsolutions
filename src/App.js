import { Routes, Route } from 'react-router-dom';
import HomeView from './features/home/homeView';
import Navigation from './features/navigation/components/navigation';
import Footer from './features/footer/footer';
import About from './features/about/components/about';
import './App.css';

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
      <Footer />
    </div>
  );
}

export default App;
