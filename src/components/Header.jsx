import Button from '@/shared/Button';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const navLinks = [
  { link: 'Home', to: '/' },
  { link: 'About', to: '/about' },
  { link: 'Vehicle Models', to: '/models' },
  { link: 'Testimonials', to: '/testimonials' },
  { link: 'Team', to: '/team' },
  { link: 'Contact', to: '/contact' },
];

function Header() {
  const [checked, setChecked] = useState(false);
  const { ref: containerRef, inView: visible } = useInView({
    root: null,
    threshold: 0,
    rootMargin: '10%',
  });
  // TODO: [x] Add Intersection Observer to change header color, when not on hero section
  return (
    <header ref={containerRef}>
      <nav
        className={`relative z-40 mx-auto ${visible ? '' : '!fixed w-full bg-bg-primary'}`}
      >
        <div className="mx-auto max-w-[76rem]">
          <div className="relative mx-auto flex items-center justify-between px-6 py-4">
            <div className="logo">
              <Link to={'/'}>
                <img
                  src="images/logo/logo.png"
                  alt="logo"
                  className="w-34 h-12"
                />
              </Link>
            </div>
            <label htmlFor="ham-checkbox" className="hamburgerMenu  py-4">
              <input
                type="checkbox"
                id="ham-checkbox"
                checked={checked}
                onChange={() => setChecked((c) => !c)}
              />
            </label>

            <ul className="flex flex-1 items-center justify-center gap-4 font-medium">
              {navLinks.map((link) => (
                <Link
                  to={link.to}
                  key={link.to}
                  onClick={() => setChecked(false)}
                  className="text-title transition-colors duration-300 hover:text-accent"
                >
                  {link.link}
                </Link>
              ))}
            </ul>
            <div className="item-center relative hidden gap-6 min-[1140px]:flex">
              <Button styleType="transparent">Signup</Button>
              <Button styleType="primary">Login</Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
