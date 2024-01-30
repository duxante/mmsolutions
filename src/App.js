import { Routes, Route } from 'react-router-dom';
import HomeView from './features/home/homeView';
import Navigation from './features/navigation/components/navigation';
import Footer from './features/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
