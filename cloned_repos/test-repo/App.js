import './App.css';
import AppContainer from './AppContainer/AppContainer';
import AppContext, {AppProvider} from './Context/AppContext';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
        <AppProvider>
          <AppContainer/>
        </AppProvider>

      </header>
    </div>
  );
}

export default App;
