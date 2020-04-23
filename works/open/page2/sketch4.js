//string processing / methods
//array 
salutation1 = ["BELOVED", "DARLING", "DEAR", "DEAREST", "FANCIFUL", "HONEY"]
//console.log(salutation1[0][1])

salutation2 = "CHICKPEA DEAR DUCK JEWEL LOVE MOPPET SWEETHEART"
//js split method -- breaks a string into an array using a delimiter (empty space, specific character) 
salutation2 = salutation2.split(" ");
//console.log(salutation2)
adjectives = "AFFECTIONATE AMOROUS ANXIOUS AVID BEAUTIFUL BREATHLESS BURNING COVETOUS CRAVING CURIOUS EAGER FERVENT FONDEST LOVEABLE LOVESICK LOVING PASSIONATE PRECIOUS SEDUCTIVE SWEET SYMPATHETIC TENDER UNSATISFIED WINNING WISTFUL".split(" ")

nouns = "ADORATION/AFFECTION/AMBITION/APPETITE/ARDOUR/BEING/BURNING/CHARM/CRAVING/DESIRE/DEVOTION/EAGERNESS/ENCHANTMENT/ENTHUSIASM/FANCY/FELLOW FEELING/FERVOUR/FONDNESS/HEART/HUNGER/INFATUATION/LITTLE LIKING/LONGING/LOVE/LUST/PASSION/RAPTURE/SYMPATHY/THIRST/WISH/YEARNING".split("/")

adverbs = "AFFECTIONATELY ARDENTLY ANXIOUSLY BEAUTIFULLY BURNINGLY COVETOUSLY CURIOUSLY EAGERLY FERVENTLY FONDLY IMPATIENTLY KEENLY LOVINGLY PASSIONATELY SEDUCTIVELY TENDERLY WISTFULLY".split(" ")

verbs = "ADORES/ATTRACTS/CLINGS TO/HOLDS DEAR/HOPES FOR/HUNGERS FOR/LIKES/LONGS FOR/LOVES/LUSTS AFTER/PANTS FOR/PINES FOR/SIGHS FOR/TEMPTS/THIRSTS FOR/TREASURES/YEARNS FOR/WOOS".split("/")

/*open = salutation[Math.floor(Math.random() * salutation1.length)]*/

//setup code runs only once
function setup() {
	
	createCanvas(windowWidth,windowHeight)
}


function draw() {
	salutation = makeSalutation()
	body = makeBody()
	closing = makeClosing()
	loveletter = salutation + body + closing
	fill(0)
	textSize(45)
	textFont('Helvetica')
	text(loveletter, 40, 40, 1000, 4000) //text takes min 3 max 5 arguments (parameters)
	frameRate(1)
}


function makeSalutation() {
	s1 = random(salutation1)
	s2 = random(salutation2)
	salutation = s1 + " " + s2 + "," + "\n\n" 
	//this function will return a value
	return salutation


}

function makeBody(){
	s1 = "MY " + random(nouns) + " " + random(verbs) + " YOUR " + random(adjectives) + " " + random(nouns) + ".  " 
	s2 = "YOU ARE MY " + random(adjectives) + " " + random(nouns) + ", MY " + random(adjectives) + " " + random(nouns) + ".  "
	s3 = "MY " + random(adjectives) + " " +random(nouns) + " " + random(verbs) + " YOUR " + random(adjectives) + " " + random(nouns) + ".  "
	s4 = "MY " + random(nouns) + " " + random(adverbs) + " " + random(verbs) + " YOUR " + random(adjectives) + " " + random(nouns) + ".  " + "\n\n"
	body = s1 + s2 + s3 + s4
	return body
}

function makeClosing(){
	closing = "YOURS " + random(adverbs) + "," 
	return closing
}
