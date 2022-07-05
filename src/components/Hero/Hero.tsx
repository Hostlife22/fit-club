import { Button, Header } from '..';
import Calories from '../../assets/calories.png';
import Heart from '../../assets/heart.png';
import HeroImage from '../../assets/hero_image.png';
import HeroImageBack from '../../assets/hero_image_back.png';
import styles from './Hero.module.scss';
import { IHeroProps } from './Hero.props';

function Hero(props: IHeroProps) {
  return (
    <div className={styles.hero}>
      <div className={styles.blur} />
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

      <div className={styles.rightH}>
        <Button>Join Now</Button>

        <div className={styles.heartRate}>
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        <img src={HeroImage} alt="heroImage" className={styles.heroImage} />
        <img src={HeroImageBack} alt="heroImage back" className={styles.heroImageBack} />

        <div className={styles.calories}>
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
