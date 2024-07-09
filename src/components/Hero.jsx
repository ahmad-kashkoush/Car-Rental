import Button from '@/shared/Button';

function Hero() {
  return (
    <div className="hero mt-[10rem] h-[97vh] px-6 py-20 text-center lg:text-left bg-bg-secondary">
      <img
        src="images/hero/hero-bg.png"
        className="absolute right-0 top-0 z-10 hidden lg:block"
      />
      <div className="container relative mx-auto">
        <img
          src="images/hero/main-car.png"
          className="absolute right-0 z-10 hidden w-[65%] lg:block"
        />
        <div className="relative z-30 lg:max-w-[28rem]">
          <h4 className="font-sans text-2xl font-bold text-title">
            Plan your trip now
          </h4>
          <h1 className="mt-2 font-sans text-5xl font-bold">
            Save <span className="text-accent">big</span> with our car rental
          </h1>
          <p className="mt-4 font-mono text-normal-text">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="mt-4 space-x-3 space-y-3">
            <Button styleType="primary">
              <div className="flex gap-2">
                Book Ride <img src="images/circular-right.svg" />
              </div>
            </Button>
            <Button styleType="secondary">
              <div className="flex gap-2">
                Learn More
                <img src="images/learn-more.svg" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
