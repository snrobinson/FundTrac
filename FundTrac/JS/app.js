/* eslint-disable no-unused-vars */
/*jshint multistr: true */

var bName = '-';
var bAmount = '-';
var bDate = '-';
var objBills;
var billArray = [];

function displayBillTable () {
	var msgHead = '';
	var msgBody = '';
	var msgFoot = '';
	var msg = '';
	msgHead = '<table  class="billsTable" style="border-style: solid;"><thead><tr><th colspan="4">Bills</th></tr><tr>\
                        <th>ID</th>\
                        <th>Name</th>\
                        <th>Payment Amount</th>\
                        <th>Due Date</th></tr></thead>';

	msgBody = msgBody + '<tbody><tr>';

	for (var i = 0; i < billArray.length; i++) {
		msgBody = msgBody + '<td>' + i + '</td>\
    <td>' + billArray[i].name + '</td>\
    <td>' + billArray[i].amount + '</td>\
		<td>' + billArray[i].date + '</td></tr>';
	}
	msgBody = msgBody + '</tbody>';

	// CLOSE TABLE
	msgFoot = '</table>';
	// BUILD TABLE
	msg = msgHead + msgBody + msgFoot;
	// alert("The bills button works!")

	document.querySelector('.billsTable').innerHTML = msg;
}

function writeToBillTable (name, amount, dueDate) {
	var success = true;
	// Create array to hold bill objects
	// Create Bill object

	try {
		billArray.push({name: name, amount: amount, date: dueDate});

		// eslint-disable-next-line no-console
		console.log(billArray[0].name);
	} catch (ex) {
		success = false;
	}

	return success;
}
document.querySelector('.bBills').addEventListener('click', function () {
	document.querySelector('.bNewBill').style.display = 'inline-block';
	document.querySelector('.bUpdateBill').style.display = 'inline-block';
	document.querySelector('.billName').style.display = 'inline-block';
	displayBillTable();
});

document.querySelector('.bNewBill').addEventListener('click', function(){
	document.querySelector('.bNewBill').style.display = 'none';
	document.querySelector('.bUpdateBill').style.display = 'none';
	document.querySelector('.bAddNewBill').style.display = 'inline-block';
	document.querySelector('.inputsBill').style.display = 'inline-block';
});

// document.querySelector('.bBills').addEventListener('click', displayBillInput)
document.querySelector('.bAddNewBill').addEventListener('click', function () { 
	document.querySelector('.billName').style.display = 'inline-block';
});

document.querySelector('.bAddNewBill').addEventListener('click', function () {
	var amount = document.querySelector('.billAmount').value;
	var name = document.querySelector('.billName').value;
	var dueDate = document.querySelector('.billDate').value;
	writeToBillTable(name, amount, dueDate);
	document.querySelector('.inputsBill').style.display = 'none';
	document.querySelector('.bNewBill').style.display = 'inline-block';
	document.querySelector('.bUpdateBill').style.display = 'inline-block';
	document.querySelector('.bAddNewBill').style.display = 'none';
	displayBillTable();
});

document.querySelector('.bUpdateBill').addEventListener('click', function () {
	var amount = document.querySelector('.billAmount').value;
	var name = document.querySelector('.billName').value;
	var dueDate = document.querySelector('.billDate').value;
	writeToBillTable(name, amount, dueDate);
	document.querySelector('.inputsBill').style.display = 'none';
	document.querySelector('.bNewBill').style.display = 'inline-block';
	document.querySelector('.bUpdateBill').style.display = 'inline-block';
	document.querySelector('.bAddNewBill').style.display = 'none';
	displayBillTable();
});

// function inputBill (bname, bamount, bdate) {
// 	var billName = ''
// 	var billAmount = 0
// 	var billDate = ''
// 	// var billFormattedDate = new Date(date)

// 	var newBill = new objBills
// 	newBill.name = 'Stephen'
// 	billArray.push(x)
// 	// billList[i] = [name, amount, billFormattedDate]
// 	console.log(billArray[0])
// // return 
// }

// function displayBillInput () {
// 	var msg = '';
// 	var msgBody = '';
// 	var msgHead = '';
// 	var msgFoot = '';

// 	msg = '<input type="text" name="billName" class="billName" placeholder="Name of bill"/>\
//     <input type="number" name="billAmount" class="billAmount" placeholder="Amount due"/>\
//     <input type="date" name="billDate" class="billDate" placeholder="Due date"/>';

// 	document.querySelector('.billInput').insertAdjacentHTML('afterbegin', msg);
// }

// document.querySelector('.billName').oninput = function(){
//   new objBills.name = document.querySelector('.billName').value
// }

// bAmount = document.querySelector('.billAmount').value
// bDate = document.querySelector('.billName').value


