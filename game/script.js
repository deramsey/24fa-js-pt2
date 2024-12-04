const wordList = ["adventure", "spectacle", "blueprint", "treehouse", "radiantly"];
var word = wordList[Math.floor(Math.random() * (wordList.length - 1))];
var scrambled = scrambleWord(word);
var numGuesses = 0;
document.querySelector("#mixedup").innerText = scrambled;
document.querySelector("#numguess").innerText = numGuesses;

function scrambleWord(w){
    let arr = Array.from(w);
    for(let i = 0; i < 100; i++){
        let a = Math.floor(Math.random() * (arr.length - 1));
        let b = Math.floor(Math.random() * (arr.length - 1));
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    return arr.join("");
}

function checkGuess(){
    let guess = document.querySelector("#guess").value;
    if(guess.toLowerCase() == word){
        numGuesses++;
        let again = confirm(`You Win! You got the word in ${numGuesses} guesses! Play again?`)
        if(again){
            document.querySelector("#guess").value = "";
            location.reload();
        }
    }
    else{
        numGuesses++;
        document.querySelector("#numguess").innerText = numGuesses;
    }
}

document.querySelector("#submitguess").addEventListener("click", checkGuess);