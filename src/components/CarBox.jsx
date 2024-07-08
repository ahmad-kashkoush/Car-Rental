export function CarBox({ car }) {
  return (
    <div className="flex-3 mx-auto flex flex-col items-center justify-between gap-8 md:flex-row">
      <img
        src={car.image}
        className="mt-[6rem] block md:mt-auto w-full lg:w-[36rem]"
      />
      <div className="pick-description w-full max-w-[20rem] lg:min-w-[15rem]">
        <h4 className="mt-[6rem] bg-accent px-4 py-3 text-2xl text-white lg:mt-auto">
          <span className="mr-2 font-semibold">${car.rent} </span>/rent per day
        </h4>
        {['Model', 'Mark', 'Year', 'Doors', 'AC', 'Trans', 'Fuel'].map(
          (property) => (
            <p
              className="flex items-center justify-center border-x-2 border-b-2 border-gray-400 px-4 py-3 text-title"
              key={property}
            >
              <span className="w-full border-r-2 border-gray-400">
                {property}
              </span>
              <span className="w-full">
                {car[property.toLocaleLowerCase()]}
              </span>
            </p>
          ),
        )}
      </div>
    </div>
  );
}
