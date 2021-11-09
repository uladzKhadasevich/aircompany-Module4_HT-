const assert = require("chai").assert;

const airport = require("../Airport");
const plane = require("../planes/plane");
const militaryPlane = require("../planes/militaryPlane");
const passengerPlane = require("../planes/passengerPlane");
const experimentalPlane = require("../planes/experimentalPlane");
const militaryType = require("../models/militaryType");
const experimentalType = require("../models/experimentalType");
const classificationLevel = require("../models/classificationLevel");

describe("My Test", () => {
    let planes = [
        new passengerPlane("Boeing-737", 900, 12000, 60500, 164),
        new passengerPlane("Boeing-737-800", 940, 12300, 63870, 192),
        new passengerPlane("Boeing-747", 980, 16100, 70500, 242),
        new passengerPlane("Airbus A320", 930, 11800, 65500, 188),
        new passengerPlane("Airbus A330", 990, 14800, 80500, 222),
        new passengerPlane("Embraer 190", 870, 8100, 30800, 64),
        new passengerPlane("Sukhoi Superjet 100", 870, 11500, 50500, 140),
        new passengerPlane("Bombardier CS300", 920, 11000, 60700, 196),
        new militaryPlane("B-1B Lancer", 1050, 21000, 80000, militaryType.bomber),
        new militaryPlane("B-2 Spirit", 1030, 22000, 70000, militaryType.bomber),
        new militaryPlane("B-52 Stratofortress", 1000, 20000, 80000, militaryType.bomber),
        new militaryPlane("F-15", 1500, 12000, 10000, militaryType.fighter),
        new militaryPlane("F-22", 1550, 13000, 11000, militaryType.fighter),
        new militaryPlane("C-130 Hercules", 650, 5000, 110000, militaryType.transport),
        new experimentalPlane("Bell X-14", 277, 482, 500, experimentalType.highAltitude, classificationLevel.secret),
        new experimentalPlane("Ryan X-13 Vertijet", 560, 307, 500, experimentalType.verticalTakeoffAndLanding, classificationLevel.topSecret),
    ];
    let planeWithMaxPassengerCapacity = new passengerPlane("Boeing-747", 980, 1610070500, 242);
    let commonAirport = new airport(planes);

    it("should have military Planes with transport type", () => {
        let transportMilitaryPlains = commonAirport.getTransportMilitaryPlanes();
        let has = false;
        for (let militaryPlane of transportMilitaryPlains) {
            if (militaryPlane.getMilitaryType() === militaryType.transport) {
                flag = true;
                break;
            }
        }
        assert.equal(flag, true);
    });

    it("should check passenger plane with max capacity", () => {
        let expectedPlaneWithMaxPassengersCapacity =
            commonAirport.getPassengerPlaneWithMaxPassengersCapacity();
        assert.isFalse(
            expectedPlaneWithMaxPassengersCapacity == planeWithMaxPassengerCapacity
        );
    });

    it("should be the second largest plane", () => {
        commonAirport.sortByMaxLoadCapacity();
        let planesSortedByMaxLoadCapacity = airport.getPlanes();
        let nextPlaneMaxLoadCapacityIsHigherThanCurrent = true;
        for (let i = 0; i < planesSortedByMaxLoadCapacity.length - 1; i++) {
            let currentPlane = planesSortedByMaxLoadCapacity[i];
            let nextPlane = planesSortedByMaxLoadCapacity[i + 1];
            if (currentPlane.getMaxLoadCapacity() > nextPlane.getMaxLoadCapacity()) {
                nextPlaneMaxLoadCapacityIsHigherThanCurrent = false;
                break;
            }
        }
        assert.isTrue(nextPlaneMaxLoadCapacityIsHigherThanCurrent);
    });

    it("testHasAtLeastOneBomberInMilitaryPlanes", () => {
        let bomberMilitaryPlanes = commonAirport.getBomberMilitaryPlanes();
        let flag = false;
        for (let militaryPlane of bomberMilitaryPlanes) {
            if (militaryPlane.getMilitaryType() === MilitaryType.BOMBER) {
                flag = true;
            } else {
                assert.fail("Test failed!");
            }
        }
    });

    it("should check that experimentsl planes has classification level higher than unclassified", () => {
        let bomberMilitaryPlanes = commonAirport.getExperimentalPlanes();
        let hasUnclassifiedPlanes = false;
        for (let experimentalPlane of bomberMilitaryPlanes) {
            if (
                experimentalPlane.classificationLevel ===
                ClassificationLevel.UNCLASSIFIED
            ) {
                hasUnclassifiedPlanes = true;
            }
            assert.isFalse(hasUnclassifiedPlanes);
        }
    });
});