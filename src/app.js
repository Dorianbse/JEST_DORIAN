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

module.exports = {
    isPalindrom,
    containsForbiddenWords
}