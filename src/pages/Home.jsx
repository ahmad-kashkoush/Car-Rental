import {
  Banner,
  Booking,
  Choose,
  Download,
  Faq,
  Hero,
  Pick,
  Plan,
  TestimonialSection,
} from '@/components';

function Home() {
  return (
    <main className="home w-full grow ">
      <Hero /> {/* todo: [ ] make car on same row with buttons */}
      <Booking /> {/* Implemented, ✏️ need review & refactoring */}
      <Plan /> {/* Implemented */}
      <Pick />
      <Banner />
      <Choose />
      <TestimonialSection />
      <Faq />
      <Download />
    </main>
  );
}
export default Home;
