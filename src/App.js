import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Change Switch par Routes
import './App.css';
import Header from './component/navbar';
import Card from './component/card';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Header />
      <Card />
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </Router>
  );
}

export default App;
