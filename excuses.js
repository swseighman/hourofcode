function Excuse() {
	
	var myDog = ['dog', 'cat'];
	var ate = ['ate', 'shredded'];
	var myHomework = ['homework', 'report'];
	
	var who = myDog[Math.round(Math.random()*(myDog.length-1))];
	var did = ate[Math.round(Math.random()*(ate.length-1))];
	var what = myHomework[Math.round(Math.random()*(myHomework.length-1))];
	
	document.getElementById('excuses').innerHTML = '<div>My ' + who + ' ' + did + ' my ' + what + '.</div>'
	
}