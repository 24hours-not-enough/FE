import styles from './bottomTab.module.css';

function BottomTab({ children, propsClassName, closeTab }) {
  return (
    <div>
      <div onClick={closeTab} className="absolute w-screen h-screen top-0 left-0 opacity-70 bg-[#E5E5E5] z-10" />
      <section className={`${styles.base} ${propsClassName}`}>
        {children}
      </section>
    </div>
  );
}

export default BottomTab;
