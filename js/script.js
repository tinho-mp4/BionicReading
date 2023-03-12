function convertToBionicReading(text) {
    const words = text.split(/\b/); // split text into an array of words and non-word characters
    let output = '';
    let boldChars = 0;
    
    for (const word of words) {
      if (/\w+/.test(word)) { // if word contains at least one letter
        const numChars = Math.ceil(word.length / 2);
        output += '<b>' + word.slice(0, numChars) + '</b>' + word.slice(numChars);
        boldChars = numChars;
      } else {
        output += word;
      }
    }
    
    return output;
  }
  
  const form = document.querySelector('form');
  const input = document.querySelector('#input-text');
  const output = document.querySelector('#output');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    output.innerHTML = convertToBionicReading(input.value);
  });
  