const airport = require('./Airport');
const plane = require('./planes/plane');
const militaryPlane = require('./planes/militaryPlane');
const passengerPlane = require('./planes/passengerPlane');
const experimentalPlane = require('./planes/experimentalPlane');
const militaryType = require('./models/militaryType');
const experimentalTypes = require('./models/experimentalTypes');
const classificationLevel = require('./models/classificationLevel');

(function run() {

    let planes = [
        new passengerPlane('Boeing-737', 900, 12000, 60500, 164),
        new passengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
        new passengerPlane('Boeing-747', 980, 16100, 70500, 242),
        new passengerPlane('Airbus A320', 930, 11800, 65500, 188),
        new passengerPlane('Airbus A330', 990, 14800, 80500, 222),
        new passengerPlane('Embraer 190', 870, 8100, 30800, 64),
        new passengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
        new passengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
        new militaryPlane('B-1B Lancer', 1050, 21000, 80000, militaryType.bomber),
        new militaryPlane('B-2 Spirit', 1030, 22000, 70000, militaryType.bomber),
        new militaryPlane('B-52 Stratofortress', 1000, 20000, 80000, militaryType.bomber),
        new militaryPlane('F-15', 1500, 12000, 10000, militaryType.fighter),
        new militaryPlane('F-22', 1550, 13000, 11000, militaryType.fighter),
        new militaryPlane('C-130 Hercules', 650, 5000, 110000, militaryType.transport),
        new experimentalPlane("Bell X-14", 277, 482, 500, experimentalTypes.highAltitude, classificationLevel.secret),
        new experimentalPlane("Ryan X-13 Vertijet", 560, 307, 500, experimentalTypes.VTOL, classificationLevel.topSecret)
    ];

    let commonAirport = new airport(planes);
    let militaryAirport = new airport(commonAirport.getMilitaryPlanes());
    let passengerAirport = new airport(commonAirport.getPassengerPlanes());
    console.log(`Military airport sorted by max distance: ${airport.print(militaryAirport.sortByMaxDistance())}`);
    console.log(`Passenger airport sorted by max speed: ${airport.print(passengerAirport.sortByMaxSpeed())}`);
    console.log(`Plane with max passenger capacity: ${airport.print(passengerAirport.getPassengerPlaneWithMaxPassengersCapacity())}`);
})();