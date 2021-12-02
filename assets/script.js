// First, tell us your name
let yourName = "Michael Champlin" // HINT: Replace this with your own name!

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

buttonActions = document.querySelectorAll("button")

const buttonDefinitions = [
    [ "qty-gb",     "minus-gb",     -1],
    [ "qty-gb",     "add-gb",       +1],
    [ "qty-cc",     "minus-cc",     -1],
    [ "qty-cc",     "add-cc",       +1],
    [ "qty-sugar",  "minus-sugar",  -1],
    [ "qty-sugar",  "add-sugar",    +1] ]
    cookie_type = 0;  //location in matrix
    button_type = 1;  //location in matrix
    offset_todo = 2;  //location in matrix

for (let button = 0; button < buttonDefinitions.length; button++) {
    //
    // Add listener for each button.  
    buttonActions[ button ].addEventListener('click', function(e) {
        if (e.target.id === buttonDefinitions[button][button_type]) 
            updateCounter(buttonDefinitions[button][cookie_type], 
                          buttonDefinitions[button][offset_todo]); 
        })
    }
 

//
// Parameters:
//      counterID:  The string identifying which button being clicked
//      offset:  whether we are adding +1 or -1 to he counter
function updateCounter(counterID, offset) {

    // Pull the existing counter for that cookie and factor in the +1 or -1 click
    let current_counter = Number(document.getElementById(counterID).innerHTML);
    let new_counter_value = current_counter + offset;

    // Make sure that we actually decrement a counter (not below zero)
    if (new_counter_value >= 0) {

        // Update the individual cookie counter
        document.getElementById(counterID).innerHTML = new_counter_value

        // Update the total counter
        document.getElementById("qty-total").innerHTML = 
            Number(document.getElementById("qty-total").innerHTML) + offset;
    }
}









