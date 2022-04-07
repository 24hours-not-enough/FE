import styles from './modalContainer.module.css';

export default function ModalContainer({ children, propsStyle }) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.modal}`}
        style={propsStyle}
      >
        {children}
      </div>
    </div>
  );
}
