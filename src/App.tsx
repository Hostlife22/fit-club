import styles from './App.module.scss';
import { Footer, Hero, Join, Plans, Programs, Reasons, Testimonials } from './components';

function App() {
  return (
    <div className={styles.App}>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
