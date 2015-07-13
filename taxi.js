function Taxi(driverName, maxNumberOfPassengers) {
  // your code here
  this.driverName  = driverName;
  this.maxNumberOfPassengers = maxNumberOfPassengers;
  this.passengers = [];
}

Taxi.prototype.addPassenger = function(passengerName) {
  // your code here
  this.passengers.push(passengerName);
};

Taxi.prototype.passengerCount = function () {
  if (this.passengers.length > 0) {
    return this.passengers.length;
  }
  else {
    return 0;
  }
}

Taxi.prototype.full = function () {
  if (this.passengers.length >= 4) {
    return true;
  }
  else {
    return false;
  }
}

Taxi.prototype.dropOffPassengers = function () {
  this.passengers.splice(0, this.passengers.length);
}

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = Taxi;
