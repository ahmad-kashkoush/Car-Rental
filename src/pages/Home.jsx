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
    <main className="home w-full grow">
      <Hero /> {/* Todo: [x] make car on same row with buttons */}
      <Booking /> {/*TODO: [ ] ✏️ need review & refactoring */}
      <Plan /> {/* TODO: [x]*/}
      <Pick /> {/* TODO: [x]*/}
      <Banner /> {/* TODO: [x]  */}
      <Choose /> {/* TODO: [x] */}
      <TestimonialSection /> {/* TODO: [x] */}
      <Faq />
      <Download />
    </main>
  );
}
export default Home;
