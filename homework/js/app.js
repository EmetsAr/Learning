/* food calculation */
var currentAge=28,
	endAge=118,
	snackName="Cheeps",
	perDay=0.17;

function calculateSnack(){
	var totalAge=endAge-currentAge;
	var totalDay=totalAge*365;
	var totalSnack=totalDay*perDay;
	console.log("Вы должны приобрести "+totalSnack +" "+snackName+" , чтобы вам хватило до глубокой старости")
}

calculateSnack()



/* converter functionality */

var toFar = document.getElementById("tofar"),
 	toCel = document.getElementById('tocel');


	toCel.addEventListener('click',function(){
		var farValue=document.querySelector('.farValue').value;
		converToCel(farValue)
	})

	toFar.addEventListener('click',function(){
		var celValue=document.querySelector('.celValue').value;
		converToFar(celValue)
	})


function converToCel(startValue){
	console.log((startValue-32)*(5/9))
}

function converToFar(startValue){
	console.log((startValue*(9/5))+32)
}
