import styles from './bottomTab.module.css';

function BottomTab({ children, propsClassName, closeTab }) {
  return (
    <>
      <div onClick={closeTab} className="absolute w-full h-screen top-0 left-0 opacity-30 bg-main z-10" />
      <section className={`${styles.base} ${propsClassName}`}>
        {children}
      </section>
    </>
  );
}

export default BottomTab;
