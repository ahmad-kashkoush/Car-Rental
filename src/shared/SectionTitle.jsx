function SectionTitle({ children, className }) {
  return (
    <h2
      className={`mb-4 pt-4 font-sans text-3xl  text-title ${className}`}
    >
      {children}
    </h2>
  );
}
export default SectionTitle;
