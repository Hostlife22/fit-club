import { Button, Header } from '..';
import styles from './Hero.module.scss';
import { IHeroProps } from './Hero.props';

function Hero(props: IHeroProps) {
  return (
    <div className={styles.hero}>
      <div className={styles.leftH}>
        <Header />

        <div className={styles.theBestAd}>
          <div />
          <span>the best fitness club in the town</span>
        </div>

        <div className={styles.heroText}>
          <div>
            <span>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build ideal body and live up your life to
              fullest
            </span>
          </div>
        </div>

        <div className={styles.figures}>
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className={styles.heroButtons}>
          <Button appearance="primary">Get Started</Button>
          <Button appearance="ghost">Learn More</Button>
        </div>
      </div>
      <div className={styles.rightH}>right side</div>
    </div>
  );
}

export default Hero;
