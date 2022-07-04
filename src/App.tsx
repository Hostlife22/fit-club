import styles from './App.module.scss';
import { Hero, Programs } from './components';

function App() {
  return (
    <div className={styles.App}>
      <Hero />
      <Programs />
    </div>
  );
}

export default App;
