var sourceWord=['е','л','к','а'],
	totalLength=sourceWord.length,
	remainingLength=totalLength,
	guessWord=new Array(totalLength),
	startPoint=0,
	bonusPoint=false,
	goodAttemp=false

function guessLetter(letter){
	letter.toUpperCase()
	console.log(letter)
	for(var i=0;i<sourceWord.length;i++){
		if(letter===sourceWord[i]){
			/* вставляем буквы в массив */
			guessWord[i]=letter;
			console.log(guessWord)
			goodAttemp=true
			/* очки за угаданную букву*/
			if(bonusPoint){
				startPoint+=(randomInteger(10,50)*2)
				bonusPoint=false
				console.log('удвоение!!!')
			} else{
				startPoint+=randomInteger(10,50)
				bonusPoint=true
				console.log('угадал')
			}
			console.log(startPoint)

			/* сколько осталось букв */
			remainingLength--
			if(remainingLength<1){
				console.log("Слово отгадано!!!")
				return;
			}else{
				console.log("Осталось отгадать "+totalLength+" букв" )
			}
		}

	}
}

guessLetter('а')
guessLetter('о')
guessLetter('к')
guessLetter('л')
guessLetter('б')
guessLetter('е')

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }