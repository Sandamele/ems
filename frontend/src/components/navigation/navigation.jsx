import Link from 'next/link'
import styles from '../../styles/navigation.module.scss';
import { CiLogout } from "react-icons/ci";
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();
  const handleLogout = () => {
    deleteCookie('token');
    router.push('/');
  }
  return (
    <div className={`${styles.navigation}`}>
      <ul>
        <li><Link href="/admins">Admins</Link></li>
        <li><Link href="/department">Department</Link></li>
        <li><Link href="/employee">Employee</Link></li>
      </ul>
      <ul className={styles.navigationUsername}>
        <li><Link href="" onClick={handleLogout}>Logout  <CiLogout /> </Link></li>
      </ul>
    </div>
  )
}
