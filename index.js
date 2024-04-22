/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



// Function to calculate all wages earned by an employee
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date;
    });

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d);
    }.bind(this), 0);

    return payable;
}

// Employee management functions

// Function to create an employee record
function createEmployeeRecord(employeeData) {
    const [firstName, familyName, title, payPerHour] = employeeData;
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

// Function to create employee records from an array of arrays 
function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord); // an array of employee record is created from an array of employee data
}

// Function to find an employee by first name
function findEmployeeByFirstName(collection, firstName) {
    return collection.find(employee => employee.firstName === firstName); //strictly the first name of the employee
}

// Function to add a timeIn event to an employee's record
function createTimeInEvent(dateTime) {
    const [date, hour] = dateTime.split(' '); // splitting date and hour
    this.timeInEvents.push({ type: "TimeIn", date, hour: parseInt(hour, 10) }); // parseInt to base 10 to ensure time is outputed normally/correctly
    return this;
}

// Function to add a timeOut event to an employee's record
function createTimeOutEvent(dateTime) {
    const [date, hour] = dateTime.split(' ');
    this.timeOutEvents.push({ type: "TimeOut", date, hour: parseInt(hour, 10) });
    return this;
}

// Function to calculate hours worked on a specific date
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);
    return (timeOut.hour - timeIn.hour) / 100; // since time is in 24 hr system, dividing by hundred heps get hours worked after calculating the differnce
}

// Function to calculate wages earned on a specific date
function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date); // this help retrieve the calcutions done on the previous function
    return hoursWorked * this.payPerHour;
}

// Function to calculate total payroll for all employees
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employee) => totalPayroll + allWagesFor.call(employee), 0);
}
