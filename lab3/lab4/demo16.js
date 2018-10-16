function Car() {
}
Car.prototype.speed = 0
Car.prototype.number = ""
Car.prototype.fuel = 0
Car.prototype.setSpeed = function (speed) { Car.prototype.speed = speed }
Car.prototype.isOverLimit = function (speedLimit) {
    return Car.prototype.speed > speedLimit
}

var myCar = new Car()
myCar.setSpeed(60)
myCar.fuel = 80
myCar.number = 'AB-1234'
console.log(myCar.number, 'current speed=', myCar.speed)
console.log(myCar.isOverLimit(100), myCar.isOverLimit(50))