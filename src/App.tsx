import styles from './App.module.scss';
import { Hero, Plans, Programs, Reasons } from './components';

function App() {
  return (
    <div className={styles.App}>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
    </div>
  );
}

export default App;
