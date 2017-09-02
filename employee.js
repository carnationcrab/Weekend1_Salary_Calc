var verbose = true
console.log('script.js sourced');

//variables

var employeeArray = []; //created array to collect the inputs
var salariesArray = [];
var employeesList = '';
var totalMonthlyCost = '';

//var arrayofArrays = []

//document ready
$(document).ready(readyNow);

//readyNow function
function readyNow() {
    //buttons
    $('#submitEmployeeButton').on('click', addEmployee);
    $('#monthlyCostsButton').on('click', addSalaries);
} //readyNow

function addEmployee() {
    //gather input
    // use input to add to Employee item
    new newEmployee( $('#firstNameIn').val(), $('#lastNameIn').val(), $('#numberIn').val(), $('#titleIn').val(), $('#salaryIn').val() );
    
    //append to DOM



    //reset after submitted
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#numberIn').val('');
    $('#titleIn').val('');
    $('#salaryIn').val('');
}

//Employee constructor
function newEmployee(firstNameIn, lastNameIn, numberIn, titleIn, salaryIn){
    this.name = firstNameIn;
    this.surname = lastNameIn;
    this.number = numberIn;
    this.title = titleIn;
    this.salary = salaryIn;
    employeeSalary = salaryIn;
    //add to employee array
    employeeArray.push(this);
    //arrayofArrays.push(Array.from(employeeArray));
    //console.log(arrayofArrays);
    if (verbose) {console.log(employeeArray); }
    //convert object to array
    salariesArray.push(this.salary);
    if (verbose) {console.log(salariesArray)}
    
    var firstName = this.name;
    var lastName = this.surname;
    var number = this.number;
    var title = this.title;
    var salary = this.salary;
    
    employeesList += '<ul>' + '<b>' + firstName + ' ' + lastName + '</b>' +
    '<li>' + 'Employee Number:' + ' ' + number + '</li>' +
    '<li>' + 'Employee Title:' + ' ' + title + '</li>' +
    '<li>' + 'Employee Salary:' + ' ' + salary + '</li>' + '</ul>';
    
    //console.log(employeesList);
    $('#employeeList').html(employeesList);
}

//adding up the salaries to get the monthly costs
function addSalaries(){

    if (verbose) {console.log(salariesArray); }
    //loop through and add
    var totalCosts = 0
    for (var i = 0; i < salariesArray.length; i++) {
        totalCosts += parseInt(salariesArray[i])
    }
    if (verbose) {console.log(totalCosts);}

    var monthlyCosts = totalCosts/12;

    totalMonthlyCost += '<h2>' + 'Total Monthly Cost: ' + '</h2>' + '<p>' + monthlyCosts + '</p>';
    
    console.log(totalMonthlyCost);
    $('#totalCostMonthly').html(totalMonthlyCost);
}
