//in order to use from we need to do destructuring assignment
const { from } = rxjs;

window.onload = function () {
    document.getElementById('emp-list-btn').onclick = function () {  //use anonymous function here since it's being used only once
        const numberOfEmps = document.getElementById('nums-emps').value;
        fetchEmployees(numberOfEmps);
    }
}

async function fetchEmployees(numberOfEmps) {
    let result = await fetch('https://randomuser.me/api/?results=' + numberOfEmps);
    //now if we wish to change the number of users to display
    //we can make it here without having to alter the html code
    let emps = await result.json();
    renderEmployees(emps.results);
}
// <div>${emp.email}</div>
function renderEmployees(emps) {
    const empDiv = document.getElementById('employees');
    empDiv.innerHTML = '';//this clears and keeps list at 5 otherwise it will keep adding to the total

    /**
     * can also do the below see slide 13 const hello = Observable.create(function(observer)) etcetera
     */

    from(emps) //using from converts it into an Observable
        .subscribe(emp => { //subscribe is what is in the for loop
            let template = `
            <div class="col-3 ">
            ${emp.name.first + " " + emp.name.last}
            </div>
            <div class="col-9 text-end">
                <h3>Location</h3>
                <div>${emp.location.street.number} ${emp.location.street.name}</div>
                <div>${emp.location.city} ${emp.location.state} ${emp.location.country} ${emp.location.postcode}</div>
                
            </div>
            <hr>
    
            `
            let div = document.createElement('div');
            div.innerHTML = template;
            div.classList = 'row';
            empDiv.appendChild(div);
        });

}