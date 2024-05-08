//write a function in javaScript that read a sentence, which ends with a point, character by character

function readSentence(sentence) {
    // Check if the sentence ends with a period
    if (sentence[sentence.length - 1] !== '.') {
        console.log("Error: The sentence must end with a period.");
        return;
    }
// Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        console.log(char);
    }
}
const sentence = "Home and away.";
readSentence(sentence);