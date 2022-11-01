console.log('Here are all the available people:', people);
$(document).ready(onReady);

console.log('people in clientjs: ', people);

function onReady() {
console.log('in onReady');
//setting up button to start on click the image and start a function
$(document).on('click', '#image-btn', compareNames)


addPeople();


}
//I was struggling trying to come up with a function to match the id person.name to the selected image name

function compareNames() {
    console.log('in compareNames function', (String($(this).data('id'))));
}
// function compareNames() {
//     for (let person of people) {
//         if (String($(this).data('id')) {
//             console.log('Match')
//         }
//     }
// }

// creating function to append divs to the dom with class, id, and also data-id. cycle through person.githubUsername
function addPeople() {
    console.log('in add people');
    // COME BACK HERE to possibly clear out rendered people, came back and did it
    $('#div-element').empty();

    // i'll have individual first names as the data id to select for questions as well as click there boxes
    for(let person of people) {
        $('#div-element').append(`
        <div class="peopleInDivs" id="image-btn" data-id="${person.name}">
            <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of dylan">
        </div>
        `)
    }
}

// Adding random number generator
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

//just console log testing here
function scroll() {
    for (let person of people) {
        console.log(person.name)
    }
}

scroll();
