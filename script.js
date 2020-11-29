
class Traveler {
    constructor(pName) {
        this.name = pName;
        this.food = 1;
        this.isHealthy = true;
    }

    eat() {
        if (this.food > 0) {
            this.food--;
            if (this.food === 0) {
                this.isHealthy = false;
            }
        }
        //console.log(`Food for ${this.name} is ${this.food}`)
    }

    hunt() {
        this.food += 2;
        if (this.food > 0 ) {
            this.isHealthy = true;
        }
    }
}

class Wagon {
    constructor(pCapacity) {
        this.capacity = pCapacity;
        this.passengers = [];
    }

    getAvailableSeatCount() {
        let myCapacity = 0;

        //console.log(`Capacity is ${this.capacity} and number of passengers is ${this.passengers.length}`)
        myCapacity = this.capacity - this.passengers.length;
 
        //console.log ("avaailable seats " + myCapacity);
        return myCapacity;
    }

    join(traveler) {

        if (this.getAvailableSeatCount() > 0) {
            this.passengers.push(traveler);
            //console.log(this.passengers);
        }
    }

    shouldQuarantine() {
        let result = false;

        for (let  count = 0; count < this.passengers.length; count++) {
            //console.log(`Passenger ${this.passengers[count].name} has ${this.passengers[count].food} food left`)
            if (this.passengers[count].isHealthy === false) {
                result = true;
            }
        }

        return result;
    }

    totalFood() {
        let total = 0;

        for (let count = 0; count < this.passengers.length; count++) {
            total += this.passengers[count].food;
        }

        return total;
    }
}