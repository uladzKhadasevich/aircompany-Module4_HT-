const passengerPlane = require('./planes/passengerPlane');
const militaryPlane = require('./planes/militaryPlane');
const experimentalPlane = require('./planes/experimentalPlane');
const militaryType = require('./models/militaryType');


class airport {

    constructor(planes) {
        this.planes = planes;
    }

    getPlanes() {
        return this.planes;
    }

    getPassengerPlanes() {
        let passengerPlanes = [];
        for (let plane of this.planes) {
            if (plane instanceof passengerPlane) {
                passengerPlanes.push(plane);
            }
        }
        return passengerPlanes;
    }

    getMilitaryPlanes() {
        let militaryPlanes = [];
        for (let plane of this.planes) {
            if (plane instanceof militaryPlane) {
                militaryPlanes.push(plane);
            }
        }
        return militaryPlanes;
    }

    getExperimentalPlanes() {
        let experimentalPlanes = [];
        for (let plane of this.planes) {
            if (plane instanceof experimentalPlane) {
                experimentalPlanes.push(plane);
            }
        }
        return experimentalPlanes;
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getPassengerPlanes();
        let passengerPlaneWithMaxCapacity = passengerPlanes[0];
        for (let i = 0; i < passengerPlanes.length; i++) {
            if (passengerPlanes[i].getPassengersCapacity() > passengerPlaneWithMaxCapacity.getPassengersCapacity()) {
                passengerPlaneWithMaxCapacity = passengerPlanes[i];
            }
        }
        return passengerPlaneWithMaxCapacity;
    }

    getTransportMilitaryPlanes() {
        let transportMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].getMilitaryType() === militaryType.transport) {
                transportMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return transportMilitaryPlanes;
    }


    getBomberMilitaryPlanes() {
        let bomberMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        for (let i = 0; i < militaryPlanes.length; i++) {
            if (militaryPlanes[i].getMilitaryType() === militaryType.bomber) {
                bomberMilitaryPlanes.push(militaryPlanes[i]);
            }
        }
        return bomberMilitaryPlanes;
    }


    sortByMaxDistance() {
        return this.planes.sort((a, b) => (a.getMaxFlightDistance() > b.getMaxFlightDistance()) ? 1 : -1);
    }


    sortByMaxSpeed() {
        return this.planes.sort((a, b) => (a.getMaxSpeed() > b.getMaxSpeed()) ? 1 : -1);
    }

    sortByMaxLoadCapacity() {
        return this.planes.sort((a, b) => (a.getMaxLoadCapacity() > b.getMaxLoadCapacity()) ? 1 : -1);
    }


    planesToJson() {
        return JSON.stringify(planes);
    }
}

module.exports = airport;