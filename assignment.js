//write a function in javaScript that read a sentence, which ends with a point, character by character, and determine:
//the number of characters, the number of words in the sentence and the number of vowels in the sentence.

function analyzeSentence(sentence) {
    let numCharacters = 0;
    let numWords = 0;
    let numVowels = 0;

    for (let i = 0; i < sentence.length; i++) {
        numCharacters++;
        if (sentence[i] === " ") {
            numWords++;
        }
        if (sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u") {
            numVowels++;
        }
    }

    // Increment word count to include the last word
    numWords++;

    return { numCharacters, numWords, numVowels };
}

console.log(analyzeSentence("Once upon a time"));
const sentence = prompt("Enter a sentence ending with a period: ");

const analysis = analyzeSentence(sentence);
console.log("Number of characters:", analysis.numCharacters);
console.log("Number of words:", analysis.numWords);
console.log("Number of vowels:", analysis.numVowels);
