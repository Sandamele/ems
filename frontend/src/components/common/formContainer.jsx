import style from '../../styles/formContainer.module.scss'
export default function FormContainer({header,children}) {
  return (
    <div className={style.formContainer}>
        <div className={style.header}>{header}</div>
        <div className={style.children}>
        {children}
        </div>
    </div>
  )
}
