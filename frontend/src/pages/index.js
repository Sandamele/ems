import RootAdminRegister from '../components/rootAdminRegister/rootAdminRegister'
import styles from '../styles/Home.module.scss'
import { fetchData } from '../utils/fetchData'
import AdminLogin from '../components/adminLogin/adminLogin'
export default function Home({adminDoestExist}) {

  return (
    <>
      <main className={styles.container}>
       {adminDoestExist.data.data ? <RootAdminRegister /> : <AdminLogin />}
      </main>
    </>
  )
}
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {
  const adminDoestExist= await fetchData('admin/adminEmpty');
  return {
    props: {
      adminDoestExist
    }
  }
}