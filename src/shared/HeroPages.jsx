function HeroPages({ pageTitle }) {
  return (
    <>
      <div className="hero-bg"></div>
      <div className="container mx-auto px-8 py-8 mb-[10rem] relative z-10">
        <h1 className="section-title font-medium">{pageTitle}</h1>
        <h2 className="mt-4 text-2xl text-title">Home / {pageTitle}</h2>
      </div>
    </>
  );
}
export default HeroPages;
