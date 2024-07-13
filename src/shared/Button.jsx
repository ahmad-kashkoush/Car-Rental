function Button({ children, styleType = 'primary' }) {
  const base = 'transition duration-300 font-semibold   ';
  const style = {
    primary: base + ' px-12 py-4 bg-accent text-white hover:bg-black-btn',

    secondary: base + 'py-4 px-12 bg-black-btn text-white hover:bg-accent',
    transparent: base + ' py-4 text-title  hover:text-accent ',
  };
  return <button className={style[styleType]}>{children}</button>;
}
export default Button;
