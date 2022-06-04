import logo from './logo.svg';
import './App.scss';
import Land from './pages/LandingPage/Land';
import { Route, Routes ,BrowserRouter as Router, ScrollToTop} from 'react-router-dom'
import CityWeather from './pages/CityPage/CityWeather';

function App() {
  return (
    
     <Router>
        <ScrollToTop />
     <Routes>
             <Route path="/*" element={<Land />} exact />
             <Route path="/city/:city" element={<CityWeather />} exact />
          
     </Routes>
 </Router>
  );
}

export default App;
