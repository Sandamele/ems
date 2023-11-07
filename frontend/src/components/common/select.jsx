import styles from '../../styles/common.module.scss'
export default function Select({name, value, handleChange, children}) {
  return (
    <select className={`${styles.select} form-control`} value={value} onChange={handleChange} name={name}>
        {children}
    </select>
  )
}
