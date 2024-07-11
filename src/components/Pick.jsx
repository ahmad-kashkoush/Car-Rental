import { CAR_DATA, getCarDataById } from '@/carData';
import Button from '@/shared/Button';
import { useState } from 'react';
import CarBox  from './CarBox';

function Pick() {
  const [activeCar, setActiveCar] = useState(() => getCarDataById('1'));
  function handleTabClick(e) {
    setActiveCar(getCarDataById(e.target.value));
    return;
  }
  return (
    <section className="pick py-32">
      <div className="mx-auto max-w-[75rem] px-8 text-center">
        <h2 className="section-sub-title font-medium">Vehicle Models</h2>
        <h1 className="section-title mt-3 font-bold">Our rental fleet</h1>
        <p className="mx-auto mt-3 max-w-[20rem] text-base">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
        <div className="pick-content mt-16 items-center justify-between gap-8 lg:flex">
          <div className="tabs flex-1">
            {CAR_DATA.map((car) => (
              <Button
                key={car.id}
                styleType="tab"
                value={car.id}
                isActive={car.id === activeCar.id}
                onClick={handleTabClick}
              >
                {car.name}
              </Button>
            ))}
          </div>
          <CarBox car={activeCar} />
        </div>
      </div>
    </section>
  );
}
export default Pick;
