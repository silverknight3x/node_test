function Car() {
    this.speed = 0
    this.number = ""
    this.fuel = 0
    this.setSpeed = function (speed) { this.speed = speed }
    this.isOverLimit = function (speedLimit) {
        return this.speed > speedLimit
    }
}

var myCar = new Car()
myCar.setSpeed(60)
myCar.fuel = 80
myCar.number = 'AB-1234'
console.log(myCar.number, 'current speed=', myCar.speed)
console.log(myCar.isOverLimit(100), myCar.isOverLimit(50))