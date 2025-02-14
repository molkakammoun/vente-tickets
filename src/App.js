import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import './home.css';
import Header from './component/navbar';
import Footer from './component/footer';
import Card from './pages/home';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="header" >
              <h1>hi</h1>

              {/* Contenu de Card */}
              <div style={{ position: 'relative', zIndex: 3, marginTop: '150px' }}>
                <Card />
                <Footer/>
              </div>
            </div>
          }
        />
      </Routes>
      
    </Router>
  );
}

export default App;
