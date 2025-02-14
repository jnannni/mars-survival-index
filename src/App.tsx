import './App.css';
import Home from './pages/Home';
import { ReservesProvider } from './contexts/reservesContext';
import { InstallationProvider } from './contexts/installationContext';
import { CustomWeatherProvider } from './contexts/customWeatherContext';

function App() {
  return (
    <div className="App">
      <ReservesProvider>
        <InstallationProvider>
          <CustomWeatherProvider>
          <Home />
          </CustomWeatherProvider>          
        </InstallationProvider>        
      </ReservesProvider>                  
    </div>
  );
}

export default App;
