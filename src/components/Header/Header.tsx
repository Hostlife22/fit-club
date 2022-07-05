import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo.png';
import useMediaQuery from '../../hooks/useMediaQuery';
import styles from './Header.module.scss';
import { IHeaderProps } from './Header.props';

function Header(props: IHeaderProps) {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const mobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (mobile) {
      setMenuOpened(false);
    }
  }, [mobile]);

  return (
    <div className={styles.header}>
      <img src={Logo} className={styles.logo} alt="the fit club" />
      {mobile && (
        <div className={cn({ [styles.open]: menuOpened })} onClick={() => setMenuOpened(true)}>
          <span />
        </div>
      )}

      <ul className={cn(styles.headerMenu, { [styles.open]: menuOpened })}>
        <li>
          <Link to="home" smooth onClick={() => setMenuOpened(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth onClick={() => setMenuOpened(false)}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="reasons" smooth onClick={() => setMenuOpened(false)}>
            Why us
          </Link>
        </li>
        <li>
          <Link to="plans" smooth onClick={() => setMenuOpened(false)}>
            Plans
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth onClick={() => setMenuOpened(false)}>
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
