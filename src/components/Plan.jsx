function Plan() {
  return (
    <section className="plan mt-[10rem]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-sub-title font-medium">Plan Your Trip</h2>
        <h1 className="section-title mb-16 mt-3 font-bold">
          Quick & easy car rental
        </h1>
        <div className="flex flex-row flex-wrap justify-center gap-6 md:justify-between">
          <div className="plan-box">
            <img src="images/plan/icon1.png" alt="" className="w-[14rem]" />
            <h3 className="section-sub-title text-3xl font-bold">
              Select a car
            </h3>
            <p className="">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </div>
          <div className="plan-box">
            <img src="images/plan/icon3.png" alt="" className="w-[14rem]" />
            <h3 className="section-sub-title text-3xl font-bold">
              Let's Drive
            </h3>
            <p className="">
              Whether you're hitting the open road, we've got you covered with
              our wide range of cars
            </p>
          </div>
          <div className="plan-box">
            <img src="images/plan/icon2.png" alt="" className="w-[14rem]" />
            <h3 className="section-sub-title text-3xl font-bold">
              Contact Operator
            </h3>
            <p className="">
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Plan;
