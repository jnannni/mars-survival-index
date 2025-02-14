import './App.css';
import Home from './pages/Home';
import { ReservesProvider } from './contexts/reservesContext';
import { InstallationProvider } from './contexts/installationContext';

function App() {
  return (
    <div className="App">
      <ReservesProvider>
        <InstallationProvider>
          <Home />
        </InstallationProvider>        
      </ReservesProvider>                  
    </div>
  );
}

export default App;
