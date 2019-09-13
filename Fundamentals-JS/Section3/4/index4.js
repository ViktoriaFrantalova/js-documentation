// Hodnoty v DOM

// nodeValue
const specialnyElement = document.getElementById('special');
console.log('specialnyElement:', specialnyElement);

const hodnotaNodeValue = specialnyElement.childNodes[0].nodeValue;
console.log('hodnotaNodeValue:', hodnotaNodeValue);
// pomocou trim metody vieme precistit priestor pred a za selektnutym stringom
const hodnotaNodeValueUpravena = specialnyElement.childNodes[0].nodeValue.trim();
console.log('hodnotaNodeValueUpravena:', hodnotaNodeValueUpravena);
//-------------------------------------------------------------------------------

// textContent
const hodnotaTextContent = specialnyElement.textContent;
console.log('hodnotaTextContent:', hodnotaTextContent);
