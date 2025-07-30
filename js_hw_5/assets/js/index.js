const checkIsNumber = (number) => {
    if (!number) {
        alert('Please enter a value!');
        return false;
    }
    number = +number;
    if (isNaN(number)) {
        alert('Please enter a number!');
        return false;
    }
    return true;
}

class Car {
    constructor(
        manufacturer,
        model,
        year,
        averageSpeed,
        fuelCapacity,
        fuelConsumption,
        drivers
    ) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.averageSpeed = averageSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelConsumption = fuelConsumption;
        this.drivers = drivers;
    }

    addDriver(driver) {
        this.drivers.push(driver);
    }

    getInfo() {
        return `
        Manufacturer: ${this.manufacturer}, 
        Model: ${this.model}, 
        Year: ${this.year}, 
        Average speed: ${this.averageSpeed}, 
        Fuel capacity: ${this.fuelCapacity}, 
        Fuel consumption: ${this.fuelConsumption}, 
        Drivers: ${this.drivers.join(', ')}`;
    }

    checkDriver(driver) {
        return this.drivers.includes(driver);
    }

    calculateTrip(distance) {
        const drivingTime = distance / this.averageSpeed;
        const breaks = Math.floor(drivingTime / 4); // кожні 4 години — 1 година перерви
        const totalTime = drivingTime + breaks;

        const fuelNeeded = (this.fuelConsumption / 100) * distance;

        return {
            distance: distance,
            drivingTime: drivingTime.toFixed(2),
            breaks,
            totalTime: totalTime.toFixed(2),
            fuelNeeded: fuelNeeded.toFixed(2)
        };
    }
}


class Time {
    constructor(hours = 0, minutes = 0, seconds = 0) {
        this._hours = hours;
        this._minutes = minutes;
        this._seconds = seconds;
        this._normalize();
    }

    get hours() {
        return this._hours;
    }

    set hours(value) {
        this._hours = value;
        this._normalize();
    }

    get minutes() {
        return this._minutes;
    }

    set minutes(value) {
        this._minutes = value;
        this._normalize();
    }

    get seconds() {
        return this._seconds;
    }

    set seconds(value) {
        this._seconds = value;
        this._normalize();
    }

    _normalize() {
        this._minutes += Math.floor(this._seconds / 60);
        this._seconds = ((this._seconds % 60) + 60) % 60;

        this._hours += Math.floor(this._minutes / 60);
        this._minutes = ((this._minutes % 60) + 60) % 60;

        this._hours = ((this._hours % 24) + 24) % 24;
    }

    display() {
        const pad = n => String(n).padStart(2, '0');
        return `${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`;
    }

    addSeconds(s) {
        this.seconds += s; // викликає setter
    }

    addMinutes(m) {
        this.minutes += m;
    }

    addHours(h) {
        this.hours += h;
    }
}
