import styles from './App.module.scss';
import AppContainer from './AppContainer/AppContainer';
import { AppProvider } from './AppContext';

function App() {

  return (
    <div>
      <AppProvider>
        <header className={styles.app}>
          <AppContainer />
        </header>
      </AppProvider>
    </div>
  );
}

export default App;
