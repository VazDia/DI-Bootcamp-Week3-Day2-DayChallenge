/**
 In todays exercise we will be creating a Mad Libs game.
If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

In this exercise you work with the HTML code presented below.

Follow these steps :

Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
Make sure the values are not empty
Write a story that uses each of the values.
Make sure you check the console for errors when playing the game.
Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.
 */

 // Let's fetch the form and it components
 let form=document.forms[0];
 let bouton=document.getElementById("lib-button");

 // creating the stories
function Story1(nom,personne,adjectif,verbe,place){ // The first story 
    return `A ${place} on emploi ${adjectif} le verbe ${verbe} et on aime ${nom} particulièremnt ${personne}`;
}

function Story2(nom,personne,adjectif,verbe,place){ // The second story
    return `La personne qui s'appelle ${personne}, conjugue ${adjectif} le verbe ${verbe}  quand il voit ${nom} à ${place} `
}

function Story3(nom,personne,adjectif,verbe,place){ // The third story
    return `Il aime ${nom}, il s'appelle ${personne}, son verbe préréré est ${verbe} et il ${adjectif} à ${place}`
}

// An array for all the stories
let span=document.getElementById("story");
//let's create the event for button
bouton.addEventListener("click",DisplaySory);
function DisplaySory(e){
    e.preventDefault();
    let nom=form.noun.value;
    let personne=form.person.value;
    let verbe=form.verb.value;
    let place=form.place.value;
    let adjectif=form.adjective.value;
    if (nom==="" || personne==="" || verbe==="" | adjectif==="" ||place==="") return; // Forcing the user for filling all the fields;
    // All the inputs fields

    let story= Story1(nom,personne,adjectif,verbe,place)
    span.innerHTML=story; // Displaying the first story

}

// let create the suffle Button
div=document.createElement("div");
div.style.marginTop="40px";
div.style.marginLeft="200";
document.body.appendChild(div);

let suffle=document.createElement("button");
suffle.textContent="Suffle";
div.appendChild(suffle);

// Let's create the suffle's event
suffle.addEventListener("click",SuffleFunction);

function SuffleFunction(){
  let nom=form.noun.value;  // We have to create the same variables again because the others belong to its function
  let personne=form.person.value;
  let verbe=form.verb.value;
  let place=form.place.value;
  let adjectif=form.adjective.value;

  let randomNumber=Math.floor(Math.random()*3); // Creating a random number for displaying stories randomly

  let stories=[Story1(nom,personne,adjectif,verbe,place), // we are creating an array here for all the stories
    Story2(nom,personne,adjectif,verbe,place),
    Story3(nom,personne,adjectif,verbe,place)];
    if (randomNumber===0){
        span.innerHTML=stories[0];
    }else if (randomNumber===1){
        span.innerHTML=stories[1];
    }else{
        span.innerHTML=stories[2];
    }
}
