const findLongestWord = function(string) {
    let longestWord;
    let max=0;
    let words=string.split(" ");
    for(let word of words){
        let lengthOfWord =word.length;
        if(lengthOfWord>max){
            max=lengthOfWord;
            longestWord=word;
        }
    }
    return longestWord;
  };
  

  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'forcee'