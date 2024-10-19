// Chapter 78: Browser control - Forward and Reverse

// Go back in history, ONE page/step, previous page. 
// window.history.back();



// Going Forward in History  ONE page/step.
// history.Forward();



// Custom Number of steps     

//     You can tell the Browser to go back or Forward a Custom number of steps using the 
//     history.go() method . Use a negative number to go back and a positive number to move 
//     Forward:

    // history.go(-3); // Go back three steps
    // history.go(2); // go Forward two steps


// Shorthand Equivalents     

    // history.back() //is the same as history.go(-1), moving back one step.
    // history.forward() //is the same as history.go(1), moving forward one step.



// Checking Referrer    
    
    // If the user clicked a link to get to the current page, you can check the url of the 
    // previous page using:

    // var whereUserCameFrom = document.referrer;

    // However, this only works if the user arrived via a link . if they navigated using a 
    // bookmark or typed the url manually , document.referrer will be an empty string ("").


    var ddd = {
        dfc : () =>{
          console.log("hey");
        }
    };
var ali = typeof(ddd.dfc) === 'string';
console.log(ali);