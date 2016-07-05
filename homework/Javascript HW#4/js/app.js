function getPerson (name,childrenName,parentName,grandParName) {
	var person = {
	  name: name,
	  children: childrenName,
	  parent: parentName,
	  grandParent:grandParName,
	  sayAboutFamily:function(){
	  	console.log(' имя: '+ person.name)
	  	/* есть ли дети */
	  	if(person.children){
	  		console.log('имена детей:'+person.children)
	  	}
	  	else{
	  		console.log('детей нет')
	  	}
	  	/* есть ли родители  */
	  	if(person.parent){
	  	console.log('имена родителей:'+person.parent)
			}
		else{
			console.log('родителей нет')
			}
	  	/* есть ли бабушка и дедушка */
	  	if(person.grandParent){
		  	console.log('имена дедушки/бабушки:'+person.grandParent)
			}
		else{
			console.log('дедушки/бабушки нет')
			}
		console.log('---------------------------------')
	  }
	};
	return person;
}

var brother = getPerson('John',"","Kate M,Sam F","Lisa GM,MikeGF"),
  	sister = getPerson('Ann',"","Kate M,Sam F","Lisa GM,MikeGF"),
  	mother = getPerson('Kate M',"Ann,John","Lisa GM,MikeGF",""),
  	father = getPerson('Sam F',"Ann,John","Lisa GM,MikeGF",""),
  	grandmother = getPerson('Lisa GM',"Kate M,Sam F","",""),
  	grandfather = getPerson('Mike GF',"Kate M,Sam F","","");

brother.sayAboutFamily()
sister.sayAboutFamily()
mother.sayAboutFamily()
father.sayAboutFamily()
grandmother.sayAboutFamily()
grandfather.sayAboutFamily()
/*

4. Добавить метод для объекта sayAboutFamily(), который выводи в консоль сообщение о том:

        как зовут текущий объект
        есть ли у него дети
            если есть, то как зовут детей
        есть ли у него родители
            если есть, то как зовут родителей
        если бабушки и дедушки
            если есть, то как их зовут

Для того что бы вам решить последний пункт, вам нужно будет проверять своства children и parent, если там что-то есть, то проходиться по массиву и добавлять в сообщение текст с именами.

Например:

Меня зовут Саша.

У меня есть родители: Карина и Всеволод.

У меня есть бабушки и дедушки: Гай, Юлий, Цезарь и Августина.

*/