function Animal (name,weight) {
    this.name=name;
    this.weight=weight;

    function getName (){
      return this.name
  };

   function getWeight (){
     return this.weight
  };

  this.setName= function(aName){
    if(typeof(aName)!=='string'){
      console.log('Введите корректное имя')
    }
    else{
      this.name=aName
    }
  };

   this.setWeight= function(aWeight){
    if(aWeight<0){
       throw new Error('Введите корректный вес, должен быть положительным')
    }
     if(aWeight>200){
       throw new Error('Введите корректный вес, должен быть меньше 200')
    }
    this.weight=aWeight
  };
}


var Giraffe  = new Animal('Giraffe',270);
console.log(Giraffe)

function Frize(roominess){
  isOpened= false;
  this.roominess=roominess,
  currentRoom=0
  function open(){
    if(isOpened){
      throw new Error("Холодильник уже открыт")
    } else{
      isOpened=true
    }

  };
  function close(){
     if(!isOpened){
      throw new Error("Холодильник уже закрыт")
    } else{
      isOpened=false
    }
  };
  function put(weight){
    if((currentRoom+weight)>this.roominess){
      throw new Error("Целиком животное не влезет, или смените животное или его вес")
    } else{
      currentRoom+=weight;
       console.log('Вы положили  в холодильник животное')
    }

  };
  function pull(){
    if(currentRoom==0||currentRoom<0){
      throw new Error("Холодильник пуст")
    }
    if((currentRoom-weight)>=0){
      currentRoom-=weight
      console.log('Вы достали из холодильника животное')
    }
  };
}
