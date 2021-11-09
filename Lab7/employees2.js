window.onload = function () {
    fetchEmployees();
    document.getElementById('refresh').onclick = fetchEmployees;
}

async function fetchEmployees() {
    let result = await fetch('https://randomuser.me/api/?results=5');
    //now if we wish to change the number of users to display
    //we can make it here without having to alter the html code
    let emps = await result.json();
    renderEmployees(emps.results);
}

function renderEmployees(emps) {
    const empDiv = document.getElementById('employees');
    empDiv.innerHTML = '';//this clears and keeps list at 5 otherwise it will keep adding to the total
    for (let i = 0; i < emps.length; i++) {
        let emp = emps[i];
        let template = `
        
        <div class="col-3 ">
            <img src=${emp.picture.large} />
        </div>
        <div class="col-9 text-end">
            <h3>${emp.name.first + " " + emp.name.last}</h3>
            <div>Phone: ${emp.phone}</div>
            <div>${emp.email}</div>
        </div>
        <hr>

        `
        let div = document.createElement('div');
        div.innerHTML = template;
        div.classList = 'row';
        empDiv.appendChild(div);
    }
}