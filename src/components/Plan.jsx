import TextContainer from '@/shared/TextContainer';

function Plan() {
  return (
    <section className="plan py-32 bg-bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-sub-title font-medium">Plan Your Trip</h2>
        <h1 className="section-title mb-16 mt-3 font-bold">
          Quick & easy car rental
        </h1>
        <div className="flex flex-row flex-wrap justify-center gap-6">
          <div className="plan-box">
            <TextContainer
              imgSrc="images/plan/icon1.png"
              alt="plan Icon 1"
              h3="Select a car"
              p="We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs"
            />
          </div>
          <div className="plan-box">
            <TextContainer
              imgSrc="images/plan/icon2.png"
              alt="plan Icon 2"
              h3="Let's Drive"
              p="Whether you're hitting the open road, we've got you covered with
            our wide range of cars"
            />
          </div>
          <div className="plan-box">
            <TextContainer
              imgSrc="images/plan/icon3.png"
              alt="plan Icon 3"
              h3="Contact Operator"
              p="Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Plan;
