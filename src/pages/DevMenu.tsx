import { Link } from 'react-router-dom';
import styles from './DevMenu.module.scss';

export default function DevMenu() {
  return (
    <div className={styles.devMenu}>
      <h1>Dev Navigacija</h1>
      <div className={styles.links}>
        <Link to="/unreal-measurements">Unreal Measurements</Link>
        <Link to="/virtual-try-on">Unreal TryOn</Link>
      </div>
    </div>
  );
}
