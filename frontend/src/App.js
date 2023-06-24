import styles from './App.module.scss';
import AppContainer from './AppContainer/AppContainer';
import { AppProvider } from './AppContext';

function App() {

  return (
    <div>
      <header className={styles.app}>

        <AppProvider>
          <AppContainer />
        </AppProvider>

      </header>
    </div>
  );
}

export default App;
