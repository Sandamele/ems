import style from '../../styles/common.module.scss';
export default function Button({name, type, handleButton}) {
  return (
    <button type='submit' onClick={handleButton} className={`btn ${style.button}`}>{name}</button>
  )
}
