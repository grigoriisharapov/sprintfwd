import { Link, useLocation } from "react-router-dom";
import styles from './Header.module.css';
import MembersIcon from "./MembersIcon";
import TeamsIcon from "./TeamsIcon";
import TodoIcon from "./TodoUcon";

const ACTIVE_TAB_COLOR = '#41475E'
const INACTIVE_TAB_COLOR = '#7A7E86'

const getTabColor = (isActive: boolean) => isActive ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR

const Header = () => {
  const activeTabName = useLocation().pathname.slice(1)

  return (
    <header className={styles.root}>
      <h1 className={styles.logo}>SPRINTFWD</h1>
      <nav className={styles.nav}>
        <Link to="/members" className={styles.link}>
          <MembersIcon color={getTabColor(activeTabName === 'members')} className={styles.icon} />
          <span className={styles.label} style={{
            color: getTabColor(activeTabName === 'members')
          }}>Members</span>
        </Link>
        <Link to="/teams" className={styles.link}>
          <TeamsIcon color={getTabColor(activeTabName === 'teams')} className={styles.icon} />
          <span className={styles.label} style={{
            color: getTabColor(activeTabName === 'teams')
          }}>Teams</span>
        </Link>
        <Link to="/todo" className={styles.link}>
          <TodoIcon color={getTabColor(activeTabName === 'todo')} className={styles.icon} />
          <span className={styles.label} style={{
            color: getTabColor(activeTabName === 'todo')
          }}>TODO</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
