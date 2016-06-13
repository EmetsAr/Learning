var sourceWord=['ч','е','б','у','р','а','ш','к','а'],
	totalLength=sourceWord.length,
	remainingLength=totalLength,
	guessWord=new Array(totalLength),
	startPoint=0,
	bonusPoint=false,
	attempLeft=6,
	usedLetters=new Array(0);

function guessLetter(letter){
	if(attempLeft>0){ //если есть попытки,то продолжаем проверять букву,если нет - сорян
	var goodAttemp=false, // флаг удачная попытка или нет
		allreadyUsed=false; // флаг использовалась ли раньше буква или нет

	letter.toUpperCase();
	console.log("Вы назвали букву: "+letter)

	/* запись использованных букв в массив*/
	var j=0;
	do{

		if (letter===usedLetters[j]){
			allreadyUsed=true;
			console.log("Эта буква уже использовалась");
			return false
		}
		j++;
	}while(j<=usedLetters.length)
	if(!allreadyUsed){
		usedLetters.push(letter)
	}
	console.log("использованые буквы: "+usedLetters)

	/* проверяем угадана ли буква */
	for(var i=0;i<sourceWord.length;i++){
		if(letter===sourceWord[i]){
			/* вставляем буквы в массив */
			guessWord[i]=letter;
			console.log(guessWord)
			goodAttemp=true;

			/* сколько осталось букв */
			remainingLength--
			if(remainingLength<1){
				console.log("Слово отгадано!!!")
				console.log('Всего очков '+startPoint)
				return;
			}else{
				console.log("Осталось отгадать "+remainingLength+" букв" )
			}
		}
	}
	if (goodAttemp){
		/* рассчет очков при угаданной букве */
		if(bonusPoint){
			startPoint+=randomInteger(10,50)*2;// удвоение,две подряд успешных попытки
			bonusPoint=false;
			console.log('Бонус, очки умножаем на два за ход!!! '+startPoint+ "очков")
			console.log('-------------ход закончен------')
		}else{
			startPoint+=randomInteger(10,50);
			bonusPoint=true;
			console.log('Буква угадана, всего '+startPoint+" очков")
			console.log('-------------ход закончен-----')
		}
	}
	else{
		bonusPoint=false;
		attempLeft--
		if(attempLeft<1){
			console.log('Сорян,ходов нет')
		}
		console.log('Всего очков '+startPoint)
		console.log('Осталось попыток  '+attempLeft)
		console.log('-------------Буква не угадана ,ход закончен-----')
	}
	}else{
		console.log('Сорян,ходов нет')
	}
}

guessLetter('а')
guessLetter('о')
guessLetter('к')
guessLetter('л')
guessLetter('б')
guessLetter('е')
guessLetter('и')
guessLetter('г')
guessLetter('ч')
guessLetter('г')
guessLetter('и')
guessLetter('у')
guessLetter('ы')
guessLetter('ж')
guessLetter('з')
guessLetter('ь')
guessLetter('у')
guessLetter('ш')
guessLetter('р')
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }