function Excuse() {
	
	var myDog = ['dog', 'cat', 'cousin', 'hamster', 'chinchilla', 'iguana', 'turtle', 'best friend', 'bro', 'boo', 'crush', 'sister', 'brother', 'nemesis', 'doppelganger', 'gerbil', 'bunny', 'fish', 'crew'];
	//var myDog = [{name: 'dog', image: 'dog.png'}, {name: 'cat', image: 'cat.png'}, {name: 'turtle', image: 'turtle.png'}, {name: 'bird', image: 'bird.png'}, {name: 'chameleon', image: 'chameleon.png'}, {name: 'sister', image: 'sister.png'}];
	var ate = ['ate', 'destroyed', 'deleted', 'erased', 'remixed', 'recycled', 'livetweeted', 'undermined', 'underbid', 'upcycled', 'gave away', 'plagiarised', 'confiscated', 'barfed on', 'stole', 'ransomed', 'spilled water on', 'lost', 'misplaced', 'buried', 'shredded', 'hid', 'liberated', 'left with', 'ebayed', 'craigslisted', 'etsyed', 'tweeted', 'instagrammed', 'snapchatted', 'youtubed', 'dunked on', 'subteweeted', 'favorited', 'upvoted', 'downvoted', 'live cast', 'pinned', 'vlogged', 'blogged about'];
	var myHomework = ['homework', 'project', 'essay', 'film project', 'visualization', 'infographic', 'pre-writing', 'term paper', 'lab report', 'code', 'reading log', 'summary', 'article', 'flash cards', 'study guide', 'textbook', 'workbook', 'reading book', 'diorama', 'poster', 'dreams', 'laptop', 'computer', 'tablet', 'report', 'slideshow', 'slide deck', 'presentation', 'worksheet', 'handout', 'notes', 'portfolio', 'blog post'];
	
	var who = myDog[Math.round(Math.random()*(myDog.length-1))];
	var did = ate[Math.round(Math.random()*(ate.length-1))];
	var what = myHomework[Math.round(Math.random()*(myHomework.length-1))];
	
	document.getElementById('excuses').innerHTML = '<div>My ' + who + ' ' + did + ' my ' + what + '.</div>'
	//document.getElementById('excuses').innerHTML = '<div>My ' + '<img src="'+who.image+'">' + ' ' + did + ' my ' + what + '.</div>'

}