import styles from './App.module.scss';
import { Hero, Plans, Programs, Reasons, Testimonials } from './components';

function App() {
  return (
    <div className={styles.App}>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
    </div>
  );
}

export default App;
