const root = document.body;

function cheemsIfy(element) {
    if(element.hasChildNodes()) {
        element.childNodes.forEach(childNode => cheemsIfy(childNode));
    } else if(element.nodeType === 3) {
        // replace text words inside the text with cheems version of the text
        // after continuous vowels, add "m"
        element.textContent = element.textContent.replace(/([aeiou]+(?![aeioum\s])(?=\w))/gim, "$1m")
    }
}

cheemsIfy(root);