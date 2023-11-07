import { useRouter } from "next/navigation";
import styles from "../../styles/common.module.scss";
import { IoIosArrowBack } from "react-icons/io";
export default function BackButton({ link }) {
  const router = useRouter();
  return (
    <button
      className={`btn ${styles.backButton}`}
      onClick={() => router.push(link)}
    >
      <IoIosArrowBack className="me-2" />
      Back
    </button>
  );
}
