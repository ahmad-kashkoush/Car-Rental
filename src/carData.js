const CAR_DATA = [
    {
        id: "1",
        name: "Audi A1 S-Line",
        cardName: "Audi A1",
        cardImage: "images/cars-big/audi-box.png",
        image: "images/cars-big/audia1.jpg",
        rent: 45,
        model: "Audi",
        mark: "A1",
        year: 2012,
        doors: "4/5",
        ac: "Yes",
        trans: "Manual",
        fuel: "Gasoline"
    },
    {
        id: "2",
        name: "Toyota Camry",
        cardName: "Toyota",
        cardImage: "public/images/cars-big/toyota-box.png",
        image: "images/cars-big/toyotacamry.jpg",
        rent: 55,
        model: "Camry",
        mark: "Toyota",
        year: "2006",
        doors: "4/5",
        ac: "Yes",
        trans: "Automatic",
        fuel: "Hybrid"
    },
    {
        id: "3",
        name: "BMW 320 ModernLine",
        cardName: "BMW 320",
        cardImage: "public/images/cars-big/bmw-box.png",
        image: "images/cars-big/bmw320.jpg",
        rent: 25,
        model: "320",
        mark: "BMW",
        year: "2012",
        doors: "4/5",
        ac: "Yes",
        trans: "Manual",
        fuel: "Gasoline"
    },
    {
        id: "4",
        name: "Mercedes-Benz GLK",
        cardImage: "public/images/cars-big/benz-box.png",
        cardName: "Mercedes",
        image: "images/cars-big/benz.jpg",
        rent: 75,
        model: "Benz GLK",
        mark: "Mercedes",
        year: "2006",
        doors: "4/5",
        ac: "Yes",
        trans: "Manual",
        fuel: "Diesel"
    },
    {
        id: "5",
        name: "VW Passat CC",
        cardImage: "public/images/cars-big/passat-box.png",
        cardName: "VW Passat",
        image: "images/cars-big/passatcc.jpg",
        rent: 45,
        model: "Passat CC",
        mark: "Volkswagen",
        year: "2008",
        doors: "4/5",
        ac: "Yes",
        trans: "Automatic",
        fuel: "Gasoline"
    },



];
const getCarNameById = (id) => CAR_DATA.find(car => car.id === id)?.name;
const getCarDataById = (id) => CAR_DATA.find(car => car.id === id);

export { CAR_DATA, getCarDataById, getCarNameById };