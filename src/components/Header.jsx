import Button from '@/shared/Button';
import { useState } from 'react';
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
  // TODO: [ ] Add Intersection Observer to change header color, when not on hero section
  return (
    <header className="fixed z-50 w-full">
      <div className="container mx-auto flex justify-between px-6 py-4">
        <div className="logo">
          <Link to={'/'}>
            <img src="images/logo/logo.png" alt="logo" className="w-34 h-12" />
          </Link>
        </div>
        <label htmlFor="ham-checkbox" className="hamburgerMenu px-6 py-4">
          <input
            type="checkbox"
            id="ham-checkbox"
            checked={checked}
            onClick={() => setChecked((c) => !c)}
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
        <div className="item-center hidden gap-6 min-[1100px]:flex">
          <Button styleType="transparent">Signup</Button>
          <Button styleType="primary">Login</Button>
        </div>
      </div>
    </header>
  );
}
export default Header;
