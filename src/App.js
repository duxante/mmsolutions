import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomeView from './Features/Home/homeView';
import Navigation from './Features/Navigation/navigation';

function App() {
  return (
    <div className="App">
      <Navbar selectedProducts={selectedProducts} />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
