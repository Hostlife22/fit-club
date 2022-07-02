import Logo from '../../assets/logo.png';
import styles from './Header.module.scss';
import { IHeaderProps } from './Header.props';

function Header(props: IHeaderProps) {
  return (
    <div className={styles.header}>
      <img src={Logo} className={styles.logo} alt="the fit club" />

      <ul className={styles.headerMenu}>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
}

export default Header;
