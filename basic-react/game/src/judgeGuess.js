const secretWord = "REACT";

function isValid(guessedWord) {
    if (guessedWord.length === 5){
        return true;
    }
    return false;
};

function isCorrect(guessedWord) {
      if (guessedWord.toUpperCase() === secretWord.toUpperCase()){
        return true;
      }
    return false;
};

function lettersInCommon(guessedWord) {
    let match = 0;
    let secretWordArr = secretWord.toUpperCase().split('');
    let guessedWordArr = guessedWord.toUpperCase().split('');
    guessedWordArr.forEach( str => {
      if (secretWordArr.includes(str)){
        match++;
        secretWordArr.splice(secretWordArr.indexOf(str), 1);
      }
    });
    return match;
};

function judgeGuess(guessedWord) { 
    let message = ""
    if ( !isValid(guessedWord) ){
        message = `${guessedWord} was not a valid word.`;
    }
    else if ( !isCorrect(guessedWord) ) {
        let match = lettersInCommon(guessedWord);
        message =`${guessedWord} had ${match} letter(s) in common.`;
    }
    else {
        message =`${guessedWord} is the secret word.`;
    }
    return message;
};

export default judgeGuess;
