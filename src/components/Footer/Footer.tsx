import GitHub from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';
import styles from './Footer.module.scss';
import { IFooterProps } from './Footer.props';

function Footer(props: IFooterProps) {
  return (
    <div className={styles.footerContainer}>
      <hr />
      <div className={styles.footer}>
        <div className={styles.socialLinks}>
          <img src={GitHub} alt="GitHub link" />
          <img src={Instagram} alt="Instagram link" />
          <img src={LinkedIn} alt="LinkedIn link" />
        </div>
        <div className={styles.logoF}>
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <div className={styles.blurOne} />
      <div className={styles.blurTwo} />
    </div>
  );
}

export default Footer;
