import Home from './pages/Home';
import { ReservesProvider } from '@contexts/reservesContext';
import { InstallationProvider } from '@contexts/installationContext';
import { CustomWeatherProvider } from '@contexts/customWeatherContext';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (        
      <ReservesProvider>
        <InstallationProvider>
          <CustomWeatherProvider>            
            <Router>            
              <Routes>
                <Route path='/' element={<Home />}/>                
              </Routes>
            </Router>
          </CustomWeatherProvider>          
        </InstallationProvider>        
      </ReservesProvider>                      
  );
}

export default App;
