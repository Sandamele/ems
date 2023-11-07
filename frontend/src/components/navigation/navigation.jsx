import Link from 'next/link'
import styles from '../../styles/navigation.module.scss';
import { CiLogout } from "react-icons/ci";
export default function Navigation() {
  return (
    <div className={`${styles.navigation}`}>
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/admins">Admins</Link></li>
        <li><Link href="/department">Department</Link></li>
        <li><Link href="/employee">Employee</Link></li>
      </ul>
      <ul className={styles.navigationUsername}>
        <li><Link href="">Logout  <CiLogout /> </Link></li>
      </ul>
    </div>
  )
}
