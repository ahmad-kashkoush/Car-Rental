function AboutContent() {
  return (
    <section className="about-content bg-bg-primary py-32 pt-52 ">
      <div className="container mx-auto max-w-[55rem] px-8">
        <div className="align-center mx-auto flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
          <img
            src="images/about/about-main.png"
            alt="about-image"
            className=""
          />
          <div className="about-text-content">
            <h2 className="text-2xl font-medium text-title">About Comapny</h2>
            <h1 className="mb-4 mt-4 text-4xl font-bold text-title">
              You start the engine and your adventure begins
            </h1>
            <p className="mt-8 lg:pr-12">
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className="stats mt-8 flex flex-col items-center justify-center gap-12 sm:gap-4 sm:flex-row sm:items-start lg:justify-between lg:gap-0">
              <div className="stat">
                <img src="images/about/icon1.png" className="h-12 sm:h-8" />
                <div className="mt-4 items-center gap-2 sm:flex">
                  <p className="text-5xl font-bold text-title">20</p>
                  <p>
                    car <br />
                    <span>Types</span>
                  </p>
                </div>
              </div>
              <div className="stat">
                <img src="images/about/icon2.png" className="h-12 sm:h-8" />
                <div className="mt-4 items-center gap-2  sm:flex">
                  <p className="text-5xl font-bold text-title">85</p>
                  <p>
                    Rental <br />
                    <span>Outlets</span>
                  </p>
                </div>
              </div>
              <div className="stat">
                <img src="images/about/icon3.png" className="h-12 sm:h-8" />
                <div className="mt-4 items-center gap-2 sm:flex">
                  <p className="text-5xl font-bold text-title">75</p>
                  <p>
                    Repair
                    <br />
                    <span>Shops</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutContent;
