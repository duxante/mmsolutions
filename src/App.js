import { Routes, Route } from 'react-router-dom';
import HomeView from './Features/Home/homeView';
import Navigation from './Features/Navigation/Components/navigation';
import Footer from './Features/Footer/footer';
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
