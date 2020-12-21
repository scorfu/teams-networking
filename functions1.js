
function insertPersons(persons) {
    const tbody = document.querySelector('#list tbody');
    tbody.innerHTML = getPersonsHtml(persons);
}

function getPersonsHtml (persons) {
    var htmlElements = persons.map(function(person){
        return getPersonHtml(person)
    })
    return htmlElements.join('')
}

function getPersonHtml (person) {
    const gitHub = person.gitHub;
    return `<tr>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td><a target="_blank" href="https://github.com/${gitHub}">Github</a></td>
    </tr>`;
}



fetch('persons.json')
    .then(res => res.json())
    .then(team => {
        insertPersons(team);
    });






