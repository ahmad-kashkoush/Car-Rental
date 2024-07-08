import {
  Booking,
  Hero,
} from '@/components';
function Home() {
  return (
    <main className="home w-full grow bg-bg-secondary">
      <Hero /> {/* Implemented */}
      <Booking /> {/* Implemented, ✏️ need review & refactoring */}
    </main>
  );
}
export default Home;