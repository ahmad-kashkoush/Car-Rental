import { CAR_DATA } from '@/carData';
import { AboutBanner } from '@/components';
import Button from '@/shared/Button';
import HeroPages from '@/shared/HeroPages';

function Models() {
  return (
    <main className="model">
      <HeroPages pageTitle={'Models'} />
      <section className="models-section mt-[10rem] px-8 py-32 pt-52">
        <div className="model-cards-wrapper container">
          {CAR_DATA.map((item) => (
            <div
              key={item.id}
              className="model-card max-w-[25rem] justify-self-center border-2 bg-bg-primary"
            >
              <img
                src={item.cardImage}
                alt={`${item.cardName} image`}
                className="h-[20rem] w-full"
              />
              <div className="model-details px-9 py-6">
                <p className="mt-4 flex items-center justify-between text-2xl font-bold text-title">
                  <span>{item.cardName}</span>
                  <span>${item.rent}</span>
                </p>
                <p className="mt-2 flex items-center justify-between">
                  <span>stars</span>
                  <span>per day</span>
                </p>
                <p className="mt-4 flex items-center justify-between">
                  <span>{item.model}</span>
                  <span>{item.doors}</span>
                </p>
                <p className="mt-4 flex items-center justify-between">
                  <span>{item.trans}</span>
                  <span>{item.fuel}</span>
                </p>
              <button className='bg-accent text-white font-medium text-2xl w-full hover:bg-black-btn mt-6 py-4 block mx-auto transition-colors duration-300'>Book</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <AboutBanner />
    </main>
  );
}
export default Models;
