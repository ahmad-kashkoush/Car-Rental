import SectionTitle from '@/shared/SectionTitle';
import { useState } from 'react';

const dropDowns = [
  {
    id: '1',
    label: 'Select Car type',
    for: 'car-type',
    preIcon: 'images/car-type-icon.svg',
    placeholder: 'Select car type',
    choices: [
      'Select car type',
      'Sedan',
      'SUV',
      'Hatchback',
      'Coupe',
      'Convertible',
    ],
  },
  {
    id: '2',
    label: 'Pick-up',
    for: 'pick-up',
    preIcon: 'images/marker-icon.svg',
    placeholder: 'Select pick up location',
    choices: [
      'Select Pickup location',
      'New York',
      'Los Angeles',
      'Chicago',
      'Houston',
      'San Francisco',
    ],
  },
  {
    id: '3',
    label: 'Drop-of',
    for: 'drop-of',
    preIcon: 'images/marker-icon.svg',
    placeholder: 'Select drop off location',
    choices: [
      'Select drop off location',
      'New York',
      'Los Angeles',
      'Chicago',
      'Houston',
      'San Francisco',
    ],
  },
];
function Booking() {
  const [date, setDate] = useState(new Date());
  // Todo: [] update section padding
  return (
    <section className="booking px-8 py-32 bg-bg-secondary">
      <div className="container mx-auto bg-bg-primary px-12 py-8 shadow-md">
        <SectionTitle className="font-semibold">Book a car</SectionTitle>
        <form className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {dropDowns.map((item) => (
            <div className="" key={item.id}>
              <label className="flex gap-1" htmlFor={item.for}>
                <img src={item.preIcon} />
                {item.label}
              </label>
              <select
                name={item.for}
                className="mt-3 w-full px-4 py-3"
                id={item.for}
              >
                {item.choices.map((option) => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
          <div>
            <label htmlFor="pickup" className="flex gap-1">
              <img src="images/calendar-icon.svg" alt="pickup" />
              Pick-up
            </label>
            <input
              type="date"
              id="pickup"
              defaultValue={date}
              //   onChange={setDate((date) => date)}
              className="mt-3 w-full bg-bg-secondary px-4 py-3"
            />
          </div>
          <div>
            <label htmlFor="dropoff" className="flex gap-1">
              <img src="images/calendar-icon.svg" alt="dropoff" />
              Drop-of
            </label>
            <input
              type="date"
              id="dropoff"
              defaultValue={date}
              //   onChange={setDate((date) => date)}
              className="mt-3 w-full bg-bg-secondary px-4 py-3"
            />
          </div>

          <button className="h-fit w-full place-self-end bg-accent px-4 py-3 font-medium text-white hover:bg-black-btn transition-colors duration-300">
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
export default Booking;
