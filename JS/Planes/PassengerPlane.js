const plane = require('./plane');

class passengerPlane extends plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.passengersCapacity = passengersCapacity;
    }

    getPassengersCapacity() {
        return this.passengersCapacity;
    }

}

module.exports = passengerPlane;