import logo from './logo.svg';
import './App.scss';
import Land from './pages/LandingPage/Land';
import { Route, Routes ,BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    
     <Router>
     <Routes>
             <Route path="/*" element={<Land />} exact />
          
     </Routes>
 </Router>
  );
}

export default App;
