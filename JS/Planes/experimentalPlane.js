const plane = require('./plane');

class experimentalPlane extends plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, experimentalType, classificationLevel) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.experimentalType = experimentalType;
        this.classificationLevel = classificationLevel;

    }

    getExperimentalType() {
        return this.experimentalType;
    }

    getClassificationLeve() {
        return this.classificationLevel;
    }
}

module.exports = experimentalPlane