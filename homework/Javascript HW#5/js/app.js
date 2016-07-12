function Animal(name, weight) {
  this.name = name;
  this.weight = weight;

  this.getName = function() {
    return this.name
  };

  this.getWeight = function() {
    return this.weight
  };

  this.setName = function(aName) {
    if (typeof(aName) !== 'string') {
      console.log('Введите корректное имя')
    } else {
      this.name = aName
    }
  };

  this.setWeight = function(aWeight) {
    if (aWeight < 0) {
      throw new Error('Введите корректный вес, должен быть положительным')
    }
    if (aWeight > 200) {
      throw new Error('Введите корректный вес, должен быть меньше 200')
    }
    this.weight = aWeight
  };
}


function Frize(roominess) {
  isOpened = false;
  this.roominess = roominess,
    currentRoom = 0;
  this.open = function() {
    if (isOpened) {
      throw new Error("Холодильник уже открыт")
    } else {
      isOpened = true
    }

  };
  this.close = function() {
    if (!isOpened) {
      throw new Error("Холодильник уже закрыт")
    } else {
      isOpened = false
    }
  };
  this.put = function(weight) {
    if ((currentRoom + weight) > this.roominess) {
      throw new Error("Целиком животное не влезет, или смените животное или его вес")
    } else {
      currentRoom += weight;
      console.log('Вы положили  в холодильник животное')
      console.log('Всего в холодильнике ' + currentRoom)
    }

  };
  this.pull = function(weight) {
    if (currentRoom == 0 || currentRoom < 0) {
      throw new Error("Холодильник пуст")
    }
    if ((currentRoom - weight) >= 0) {
      currentRoom -= weight
      console.log('Вы достали из холодильника животное')
    }
  };
}

var Giraffe = new Animal('Giraffe', 370);
console.log(Giraffe)
var newFreeze = new Frize(1820);
console.log(newFreeze)
newFreeze.open();
newFreeze.put(Giraffe.getWeight());
newFreeze.close();
newFreeze.open();
newFreeze.put(Giraffe.getWeight());
newFreeze.close();
newFreeze.open();
newFreeze.pull(Giraffe.getWeight());
newFreeze.close();
newFreeze.open();
newFreeze.pull(Giraffe.getWeight());
newFreeze.pull(Giraffe.getWeight());
newFreeze.pull(Giraffe.getWeight());
newFreeze.pull(Giraffe.getWeight());
newFreeze.close();
