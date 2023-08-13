function anagram(first, second) {
    if (first.length !== second.length) return false;
  
    let lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter1 = first[i];
      // APPROACH 1
      //if (lookup[letter1] > 0) lookup[letter1] += 1;
      //else lookup[letter1] = 1;
      // APPROACH 2
      //lookup[letter1] = ++lookup[letter1] || 1
      // APPROACH 3
      // lookup[letter1] ? lookup[letter1] += 1 : lookup[letter1] = 1;
      lookup[letter1] ? (lookup[letter1] += 1) : (lookup[letter1] = 1);
      
    }
    for (let i = 0; i < second.length; i++) {
      let letter2 = second[i];
      if (!lookup[letter2]) return false;
      else {
        lookup[letter2] -= 1;
      }
    }
    return true;
  }
  
  const str1 = "iceman";
  const str2 = "cinema";
  console.log(anagram(str1, str2));
  