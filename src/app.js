const sentence = "Hello world !"

function isPalindrom(word) {
    const reversed = word.split('').reverse().join("");
    const result = word === reversed;
    return result;
}

const forbiddenWords = ["clavier", "passeport", "visa", "gourde"];

function containsForbiddenWords(msg) {
    const msgWords = msg.split(" ");

    for(i = 0; i < msgWords.length; i++) {
        if (forbiddenWords.includes(msgWords[i]))
            return true;
    }
    return false;
}

function add(x, y) {
  return x + y;
}

function mul(x, y){
  return x * y;
}

function dateIsSuperior(a, b) {
    a = a.split('/').reverse().join('/');
	b = b.split('/').reverse().join('/');
	var date1 = new Date(a);
	var date2 = new Date(b);
	if (date1 == "Invalid Date") {
		date1 = new Date(2100,12,01);
	} else if (date2 == "Invalid Date") {
		date2 = new Date(2100,12,01);
	}
	return date1 > date2 ? 1 : -1
}

module.exports = {
    isPalindrom,
    containsForbiddenWords,
    add,
    mul
}
