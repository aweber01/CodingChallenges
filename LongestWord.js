function LongestWord(sen) { 

  // code goes here 
  senSplit = sen.split(" ");
  senWord = isLetterOrNum(senSplit[0]);
  //console.log(senWord);

  for(let i = 0; i < senSplit.length; i++) {
    let newWord = isLetterOrNum(senSplit[i]);
      if(newWord.length > senWord.length) {
        senWord = newWord;
      }
    }
  return senWord; 
}

function isLetterOrNum(word){
    let justLetters = "";
  
    for(let i = 0; i < word.length; i++){
      if((word[i].charCodeAt()>64 && word[i].charCodeAt()<123) || 
      (word[i].charCodeAt()>47 && word[i].charCodeAt()<58)){
      justLetters += word[i];
      }
    }
    return justLetters;
  }
   
// keep this function call here 
console.log(LongestWord(readline()));
