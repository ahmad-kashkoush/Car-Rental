function Button({ children, styleType = 'primary', value, isActive, onClick }) {
  const base = 'transition duration-300 font-semibold   ';
  const style = {
    primary: base + ' px-12 py-4 bg-accent text-white hover:bg-black-btn',

    secondary: base + 'py-4 px-12 bg-black-btn text-white hover:bg-accent',
    transparent: base + ' py-4 text-title  hover:text-accent ',
    tab: `${isActive ? 'bg-accent text-white' : 'bg-gray-200 text-title'} font-semibold w-[100%]  py-4 my-2 text-left px-4   `,
  };
  if (onClick)
    return (
      <button className={style[styleType]} onClick={onClick} value={value}>
        {children}
      </button>
    );

  return <button className={style[styleType]}>{children}</button>;
}
export default Button;
