import { CiMenuBurger, CiLogout } from "react-icons/ci";
import styles from "../../styles/navbar.module.scss";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className="d-flex justify-content-between">
        <div>
          <CiMenuBurger />
        </div>
        <div>
          <CiLogout />
        </div>
      </div>
    </div>
  );
}
