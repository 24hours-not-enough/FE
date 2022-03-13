import styles from './button.module.css';
// 버튼 타입종류
// 'main' || 'kakao' || 'google' || 'decline';

function Button({
  onClick,
  children, // 버튼 글자
  propsClassName, // tailwindcss 파라미터
  propsStyle, // style 파라미터
  type, // 버튼 타입
}) {
  const buttonType = () => {
    switch (type) {
      case 'main':
        return styles.main;
      case 'kakao':
        return styles.kakao;
      case 'google':
        return styles.google;
      case 'decline':
        return styles.decline;
      case 'none':
        return styles.none;
      default:
        return styles.main;
    }
  };

  return (
    <button
      className={
      `${styles.base}
      ${propsClassName}
      ${buttonType()}
      `
      }
      style={propsStyle}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
