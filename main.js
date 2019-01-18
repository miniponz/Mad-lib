function makeMadLib(){

//get all of the word inputs by id
    var adjective1Input = document.getElementById('adjective-1');
    var adjective2Input = document.getElementById('adjective-2');
    var noun1Input = document.getElementById('noun-1');
    var noun2Input = document.getElementById('noun-2');
    var verb1Input = document.getElementById('verb-1');

//get the values of all the word inputs
    var adjective1 = adjective1Input.value;
    var adjective2 = adjective2Input.value;
    var noun1 = noun1Input.value;
    var noun2 = noun2Input.value;
    var verb1 = verb1Input.value;

//make a madlib string with speedy, fast, tortoise, race, watch.
    var story = 'There once was a ' +adjective1 + ' hare who bragged about how '+adjective2+ ' he could run. Tired of hearing him boast, Slow and Steady, the ' +noun1+', challenged him to a '+noun2+'. All the animals in the forest gathered to '+ verb1+".";


//display the madlib string
var showstory = document.getElementById('prompt');

showstory.textContent = story;

}