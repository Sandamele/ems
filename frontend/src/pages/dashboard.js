import { sessionSSR } from '@/utils/sessionSSR';
import { session } from '../utils/session';
import Layout from '../components/layout/layout';
export default function Dashboard() {
  return (
    <Layout>
      <h1>Hello World</h1>
    </Layout>
  )
}

export const getServerSideProps = async ({req, res}) => {
  const token = sessionSSR(req, res);
  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  return {
    props: {
      
    }
  }
}