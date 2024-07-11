import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="mx-auto grid grid-cols-1 gap-12 px-[5rem] py-32 md:grid-cols-2 lg:grid-cols-4">
      <div className="text-center md:text-left">
        <h2 className="text-2xl">
          <span className="font-semibold uppercase text-title">Car</span> Rental
        </h2>
        <p className="mt-4">
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <Link className="footer-contact mt-4 justify-center md:justify-start">
          <img src="images/phone.svg" alt="phone" />
          (123) -456-789
        </Link>
        <Link className="footer-contact mt-1 justify-center md:justify-start">
          <img src="images/envelop.svg" />
          carrental@gmail.com
        </Link>
        <Link
          className="footer-contact mt-3 justify-center text-sm font-normal md:justify-start"
          to={'https://xpeedstudio.com/'}
          target="blank"
        >
          Design by XpeedStudio
        </Link>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-semibold uppercase text-title">Company</h2>
        <ul className="mt-4 flex flex-col gap-2">
          {['New York', 'Careers', 'Mobile', 'Blog', 'How we work'].map(
            (item) => (
              <li key={item}>
                <Link
                  className="font-mono transition duration-300 hover:text-accent"
                  to={'/'}
                >
                  {item}
                </Link>
              </li>
            ),
          )}
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-semibold uppercase text-title">
          Working Hours
        </h2>
        <ul className="mt-4 flex flex-col gap-2">
          {[
            'Mon - Fri: 9:00AM - 9:00PM',
            'Sat: 9:00AM - 19:00PM',
            'Sun: Closed',
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-semibold uppercase text-title">
          Subscription
        </h2>
        <p className="mt-4">
          Subscribe your Email address for latest news & updates.
        </p>
        <form className="mt-4">
          <input
            type="text"
            className="w-full bg-gray-input px-6 py-3 placeholder:text-sm"
            placeholder="Enter Email Address"
          />
          <button className="mt-4 w-full bg-accent py-4 text-center font-semibold text-white transition duration-300 hover:bg-black-btn">
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
}
export default Footer;
