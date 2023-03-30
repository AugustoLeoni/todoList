import styles from './style.module.css'

export function Input({ ...rest }) {
  return (
    <input
      className={styles.input}
      type='text'
      {...rest}
    />
  )
}