import { AboutBanner, ContactForm } from '@/components';
import HeroPages from '@/shared/HeroPages';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <main>
      <HeroPages pageTitle={'Contact'} />
      <section className="contact mt-[10rem] bg-bg-primary px-8 py-32 pt-52">
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-start lg:gap-12 justify-center items-center">
          <div className="left-content text-center lg:text-left max-w-[23rem]">
            <h1 className="section-title font-semibold">
              Need additional information?
            </h1>
            <p className="mt-6">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <Link className="footer-contact mt-4 justify-center lg:justify-start">
              <img src="images/phone.svg" alt="phone" />
              (123) -456-789
            </Link>
            <Link className="footer-contact mt-3 justify-center lg:justify-start">
              <img src="images/envelop.svg" />
              carrental@gmail.com
            </Link>
          </div>
          <ContactForm />
        </div>
      </section>
      <AboutBanner />
    </main>
  );
}
export default Contact;
