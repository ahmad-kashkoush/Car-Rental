function TestimonialSection() {
  return (
    <section className="testomonial mt-[10rem] bg-bg-secondary py-32 pt-52">
      <div className="container mx-auto px-8 text-center">
        <h2 className="section-sub-title mx-auto max-w-[34rem] font-medium">
          Reviewed by People
        </h2>
        <h1 className="section-title mx-auto mb-6 mt-3 max-w-[34rem] font-bold">
           Testimonials
        </h1>
        <p className="mx-auto mb-5 max-w-[34rem]">
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
        <div className="flex gap-8">
          <div className="test-box bg-white px-8 py-16 shadow-lg">
            <p className="text-left font-mono text-2xl font-medium text-title">
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable."
            </p>
            <div className="mt-9 flex items-center gap-4">
              <img
                src="images/testimonials/pfp1.jpg"
                className="h-20 w-20 rounded-full"
              />
              <div className="flex-1 text-left">
                <p className="font-mono text-xl font-semibold text-title">
                  Parry Hotter
                </p>
                <span className="text-gray-500">Belgrade</span>
              </div>
              <span>
                <img src="images/quote-icon.svg" className="current" />
              </span>
            </div>
          </div>
          <div className="test-box hidden bg-white px-8 py-16 shadow-lg lg:block">
            <p className="text-left font-mono text-2xl font-medium text-title">
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental website!"
            </p>
            <div className="mt-9 flex items-center gap-4">
              <img
                src="images/testimonials/pfp2.jpg"
                className="h-20 w-20 rounded-full"
              />
              <div className="flex-1 text-left">
                <p className="font-mono text-xl font-semibold text-title">
                  Ron Rizzly
                </p>
                <span className="text-gray-500">Novi Sad</span>
              </div>
              <span>
                <img src="images/quote-icon.svg" className="current" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
