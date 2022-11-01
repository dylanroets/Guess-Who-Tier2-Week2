console.log('Here are all the available people:', people);
$(document).ready(onReady);

console.log('people in clientjs: ', people);

function onReady() {
console.log('in onReady');

addPeople();


}

function addPeople() {
    console.log('in add people');
    // COME BACK HERE to possibly clear out rendered people, came back and did it
    $('#div-element').empty();

    for(let person of people) {
        $('#div-element').append(`
        <div class="peopleInDivs" data-id"${person.name}>
            <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of dylan">
        </div>
        `)
    }
}

