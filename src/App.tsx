import './App.css';
import Home from './pages/Home';
import { ReservesProvider } from './contexts/reservesContext';
import { InstallationProvider } from './contexts/installationContext';
import { CustomWeatherProvider } from './contexts/customWeatherContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (        
      <ReservesProvider>
        <InstallationProvider>
          <CustomWeatherProvider>            
            <BrowserRouter>            
              <Routes>
                <Route path='/' element={<Home />}/>
                {/* <Route path='/survival-mission' element={}/>
                <Route path='/space-quiz' element={}/> */}
              </Routes>
            </BrowserRouter>
          </CustomWeatherProvider>          
        </InstallationProvider>        
      </ReservesProvider>                      
  );
}

export default App;
