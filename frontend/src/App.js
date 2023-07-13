import styles from './App.module.scss';
import AppContainer from './components/organisms/AppContainer/AppContainer';

function App() {

  return (
    <div>
      <header className={styles.app}>
        <AppContainer />
      </header>
    </div>
  );
}

export default App;
