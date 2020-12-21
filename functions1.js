function insertPersons(persons) {
    const tbody = document.querySelector('#list tbody');
    tbody.innerHTML = getPersonsHtml(persons);
}

function getPersonsHtml (persons) {
    return persons.map(getPersonHtml).join('')
}

function getPersonHtml (person) {
    const gitHub = person.gitHub;
    return `<tr>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td><a target="_blank" href="https://github.com/${gitHub}">Github</a></td>
    </tr>`;
}

let allPersons = [];

fetch('persons.json')
    .then(res => res.json())
    .then(team => {
        allPersons = team
        insertPersons(team);
    });

function searchPersons(text) {
    text = text.toLowerCase()
    console.warn('ce?', text);
    return allPersons.filter(person => {
        return person.firstName.toLowerCase().indexOf(text) > -1 || 
    person.lastName.toLowerCase().indexOf(text) > -1;
    })
}

const search = document.getElementById('search');
search.addEventListener('input', e => {
    const text = e.target.value
    
    const filtrate = searchPersons(text);

    insertPersons(filtrate);
})







