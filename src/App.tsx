import './App.css';
import Home from './pages/Home';
import { ReservesProvider } from './contexts/reservesContext';
import { InstallationProvider } from './contexts/installationContext';
import { CustomWeatherProvider } from './contexts/customWeatherContext';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (        
      <ReservesProvider>
        <InstallationProvider>
          <CustomWeatherProvider>            
            <Router>            
              <Routes>
                <Route path='/' element={<Home />}/>
                {/* <Route path='/survival-mission' element={}/>
                <Route path='/space-quiz' element={}/> */}
              </Routes>
            </Router>
          </CustomWeatherProvider>          
        </InstallationProvider>        
      </ReservesProvider>                      
  );
}

export default App;
