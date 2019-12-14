// Gets the value from the query string by it's name
function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let inputs = query.split('&');
    
    // loop through all key value pairs in the url query string
    for (let i = 0; i < inputs.length; i++) {
        var inputPair = inputs[i].split('=');
        if (inputPair[0] == variable) {
            let variableValue = inputPair[1];
            console.log("Found: " + variableValue);

            return decodeURIComponent(variableValue);
        }

        // Log that the given variable name could not be found
        console.log("Couldn't find variable by name: " + variable);
        return undefined;
    }
}

// Return the given string with the first character capitalized and the rest lowercase
function toTitleCase(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

// Get the sort type from the url string and uses it to set the sort type
function getSortType() {
    var sortType = getQueryVariable("sort");

    if (sortType != undefined) {
        document.getElementById('sortType').value = toTitleCase(sortType);
    }
}