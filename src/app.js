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

module.exports = {
    isPalindrom,
    containsForbiddenWords,
    add,
    mul
}
