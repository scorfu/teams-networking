console.log('HIIIII')

function insertPersons(data) {
    console.log('data: ', data)
    const tbody = document.querySelector('#list tbody');
    tbody.innerHTML =  getPersonHTML() + getPersonHTML()
}

function getPersonHTML() {
    return `<tr class="fperson">
    <td>Sergiu</td>
    <td>Corfu</td>
    <td> <a target="_blank" href="https://www.linkedin.com/in/corfu-sergiu-575148145/">LinkedIn</a> and <a
            target="_blank" href="https://github.com/scorfu">GitHub</a></td>
    </tr>`;
}



console.log(getPersonHTML())

insertPersons()

fetch('persons.json').then(res => res.json())
.then(data => {
    insertPersons(data)
});