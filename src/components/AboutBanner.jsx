function AboutBanner() {
  return (
    <section className="about-banner relative  bg-[#2d2d2d] py-[4rem] text-white">
      <div className="about-banner-bg z-20"></div>
      <div className="about-banner-bg-color absolute left-0 top-0 h-full w-full bg-[#2d2d2d] z-30 opacity-[85%] "></div>
      <div className="container relative z-30 mx-auto space-y-[1.5rem] px-2 text-center">
        <h1 className="text-4xl font-bold">
          Book a car by getting in touch with us
        </h1>
        <p className="text-3xl font-bold text-accent md:text-4xl lg:text-4xl">
          (123) 456-7869
        </p>
      </div>
    </section>
  );
}
export default AboutBanner;
