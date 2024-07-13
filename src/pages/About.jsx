import { AboutBanner, AboutContent, Plan } from '@/components';

import HeroPages from '@/shared/HeroPages';

function About() {
  return (
    <main className="about w-full grow">
      <HeroPages pageTitle={'About'} />
      <AboutContent />
      <Plan />
      <AboutBanner />
    </main>
  );
}
export default About;
