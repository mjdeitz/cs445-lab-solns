window.onload = function () {
    fetchEmployees();
    document.getElementById('refresh').onclick = fetchEmployees;
}

async function fetchEmployees() {
    let result = await fetch('https://randomuser.me/api/?results=5');
    //above line returns a promise and it's logged to the console (using c.log(result))
    let emps = await result.json();
    console.log(emps.results); //make this emps.results and it will become an array
    //get an index and render on our html page
    renderEmployees(emps.results);
}

function renderEmployees(emps) {
    for (let i = 0; i < emps.length; i++) {
        let emp = emps[i];
        // console.log(emp.phone);
        // console.log(emp.name.first + " " + emp.name.last);
        // console.log(emp.email);
        // console.log(emp.picture.large);
        //try logging values individually to test first
        document.getElementById('img' + i).src = emp.picture.large;
        document.getElementById('person-name-' + i).innerHTML = (emp.name.first + " " + emp.name.last); //can also have .textContent
        document.getElementById('phone' + i).innerHTML = emp.phone;
        document.getElementById('email' + i).innerHTML = emp.email;
    }
}
