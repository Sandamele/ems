import style from '../../styles/common.module.scss';
export default function Inputbox({type, name, placeholder, value, handleChange, required=false}) {
  return (
    <input type={type} name={name} value={value} placeholder={placeholder} onChange={handleChange} className={`${style.inputbox} form-control`} required={required} />
  )
}
