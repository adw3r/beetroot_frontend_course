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

const createCarObject = (
    manufacturer,
    model,
    year,
    averageSpeed,
    fuelCapacity,
    fuelConsumption,
    drivers = []
) => {
    return {
        manufacturer,
        model,
        year,
        averageSpeed,
        fuelCapacity,
        fuelConsumption,
        drivers,

        addDriver(driver) {
            if (!this.drivers.includes(driver)) {
                this.drivers.push(driver);
            }
        },

        checkDriver(driver) {
            return this.drivers.includes(driver);
        },

        getInfo() {
            return `
                Manufacturer: ${this.manufacturer}
                Model: ${this.model}
                Year: ${this.year}
                Average speed: ${this.averageSpeed} km/h
                Fuel capacity: ${this.fuelCapacity} L
                Fuel consumption: ${this.fuelConsumption} L/100km
                Drivers: ${this.drivers.join(", ") || "None"}
            `.trim();
        },

        calculateTrip(distance) {
            if (this.averageSpeed === 0) {
                throw new Error("Average speed can't be 0.");
            }

            const drivingTime = distance / this.averageSpeed;
            const breaks = Math.floor(drivingTime / 4); // 1 break per 4h
            const totalTime = drivingTime + breaks;
            const fuelNeeded = (this.fuelConsumption / 100) * distance;

            return {
                distance,
                drivingTime: +drivingTime.toFixed(2),
                breaks,
                totalTime: +totalTime.toFixed(2),
                fuelNeeded: +fuelNeeded.toFixed(2)
            };
        }
    };
};


class Time {
    constructor(hours = 0, minutes = 0, seconds = 0) {
        this._hours = hours;
        this._minutes = minutes;
        this._seconds = seconds;
        this._normalize();
    }

    get seconds() {
        return this._seconds;
    }

    set seconds(value) {
        this._seconds = value;
        this._normalize();
    }

    get minutes() {
        return this._minutes;
    }

    set minutes(value) {
        this._minutes = value;
        this._normalize();
    }

    get hours() {
        return this._hours;
    }

    set hours(value) {
        this._hours = value;
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

const createTimeObject = (hours, minutes, seconds) => {
    return {
        hours,
        minutes,
        seconds,
        addSeconds(s) {
            this.seconds += s
            this._normalize();
        },
        addMinutes(m) {
            this.minutes += m
            this._normalize();
        },
        addHours(h) {
            this.hours += h
            this._normalize();
        },
        display() {
            const pad = n => String(n).padStart(2, '0');
            return `${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`;
        },
        _normalize() {
            this.minutes += Math.floor(this.seconds / 60);
            this.seconds = ((this.seconds % 60) + 60) % 60;

            this.hours += Math.floor(this.minutes / 60);
            this.minutes = ((this.minutes % 60) + 60) % 60;

            this.hours = ((this.hours % 24) + 24) % 24;
            return this;
        }
    }._normalize()
}

let TimeInstance = createTimeObject(23, 59, 59);
console.log(TimeInstance.display());
TimeInstance.addSeconds(1);
TimeInstance.addSeconds(1);
console.log(TimeInstance.display());


class Fraction {
    constructor(numerator, denominator) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero.");
        }
        this.numerator = numerator;
        this.denominator = denominator;
        this.reduce(); // автоматично скорочує при створенні
    }

    static gcd(a, b) {
        return b === 0 ? a : Fraction.gcd(b, a % b);
    }

    reduce() {
        const gcd = Fraction.gcd(Math.abs(this.numerator), Math.abs(this.denominator));
        this.numerator /= gcd;
        this.denominator /= gcd;
        if (this.denominator < 0) { // знак переносимо в чисельник
            this.numerator *= -1;
            this.denominator *= -1;
        }
        return this;
    }

    add(other) {
        const num = this.numerator * other.denominator + other.numerator * this.denominator;
        const den = this.denominator * other.denominator;
        return new Fraction(num, den);
    }

    subtract(other) {
        const num = this.numerator * other.denominator - other.numerator * this.denominator;
        const den = this.denominator * other.denominator;
        return new Fraction(num, den);
    }

    multiply(other) {
        return new Fraction(
            this.numerator * other.numerator,
            this.denominator * other.denominator
        );
    }

    divide(other) {
        if (other.numerator === 0) {
            throw new Error("Division by zero.");
        }
        return new Fraction(
            this.numerator * other.denominator,
            this.denominator * other.numerator
        );
    }

    toString() {
        return `${this.numerator}/${this.denominator}`;
    }
}

const createFractionObject = (numerator, denominator) => {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    return {
        numerator,
        denominator,

        reduce() {
            const divisor = gcd(Math.abs(this.numerator), Math.abs(this.denominator));
            this.numerator /= divisor;
            this.denominator /= divisor;
            if (this.denominator < 0) {
                this.numerator *= -1;
                this.denominator *= -1;
            }
            return this;
        },

        add(other) {
            const num = this.numerator * other.denominator + other.numerator * this.denominator;
            const den = this.denominator * other.denominator;
            return createFractionObject(num, den).reduce();
        },

        subtract(other) {
            const num = this.numerator * other.denominator - other.numerator * this.denominator;
            const den = this.denominator * other.denominator;
            return createFractionObject(num, den).reduce();
        },

        multiply(other) {
            return createFractionObject(
                this.numerator * other.numerator,
                this.denominator * other.denominator
            ).reduce();
        },

        divide(other) {
            if (other.numerator === 0) {
                throw new Error("Division by zero.");
            }
            return createFractionObject(
                this.numerator * other.denominator,
                this.denominator * other.numerator
            ).reduce();
        },

        toString() {
            return `${this.numerator}/${this.denominator}`;
        }
    };
};

const a = createFractionObject(1, 2);
const b = createFractionObject(1, 3);

console.log("a =", a.toString()); // 1/2
console.log("b =", b.toString()); // 1/3

console.log("a + b =", a.add(b).toString());       // 5/6
console.log("a - b =", a.subtract(b).toString());  // 1/6
console.log("a * b =", a.multiply(b).toString());  // 1/6
console.log("a / b =", a.divide(b).toString());    // 3/2
