import { Routes, Route } from 'react-router-dom';
import HomeView from './Features/Home/homeView';
import Navigation from './Features/Navigation/navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/navigation" element={<Navigation />} />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
