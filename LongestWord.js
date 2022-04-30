function LongestWord(sen) { 
  // code goes here 
  senSplit = sen.split(" ");
  senWord = isLetter(senSplit[0]);
  //console.log(senWord);

  for(let i = 0; i < senSplit.length; i++) {
    let newWord = isLetter(senSplit[i]);
      if(newWord.length > senWord.length) {
        senWord = newWord;
      }
    }
  return senWord; 
}

function isLetter(word){
    let justLetters = "";
  
    for(let i = 0; i < word.length; i++){
      if(word[i].charCodeAt()>64 && word[i].charCodeAt()<123){
      justLetters += word[i];
      }
    }
    return justLetters;
  }
   
// keep this function call here 
console.log(LongestWord(readline()));
