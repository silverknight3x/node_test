function Car() {
}
Car.prototype.speed = 0
Car.prototype.number = ""
Car.prototype.fuel = 0
Car.prototype.setSpeed = function (speed) { Car.prototype.speed = speed }
Car.prototype.isOverLimit = function (speedLimit) {
    return Car.prototype.speed > speedLimit
}
// make HybradCar as a child class
function HybridCar() {
}
HybridCar.prototype = new Car()
HybridCar.prototype.__proto__ = Car.prototype
HybridCar.prototype.batterLimit = 50000
HybridCar.prototype.totalEnergy = function(){
    return this.fuel*21+this.batterLimit/500
}

var myCar = new HybridCar()
myCar.setSpeed(60)
myCar.fuel = 80
myCar.number = 'AB-1234'
console.log(myCar.number, 'current speed=', myCar.speed)
console.log(myCar.isOverLimit(100), myCar.isOverLimit(50))
console.log("total energy for my car:",myCar.totalEnergy())