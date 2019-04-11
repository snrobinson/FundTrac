/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/*jshint multistr: true */

var bName = '-';
var bAmount = '-';
var bDate = '-';
var objBills;
var billArray = [];
var drpVal = document.querySelector('.datalistIDs').value;

// Displays Bills html table
function displayBillTable() {
	var msgHead = '';
	var msgBody = '';
	var msgFoot = '';
	var msg = '';
	var i;
	var l = i + 1;
	msgHead = '<table  id="billsTable"><thead><tr><th colspan="4">Bills</th></tr><tr>\
                        <th>ID</th>\
                        <th>Name</th>\
                        <th>Payment Amount</th>\
                        <th>Due Date</th></tr></thead>';

	msgBody = msgBody + '<tbody><tr>';

	for (i = 0; i < billArray.length; i++) {
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

	document.querySelector('.billsTable').innerHTML = msg;

	document.querySelector('.datalistIDs').innerHTML = '<option value="blank"></option>';
	billArray.forEach(function (n, x) {
		document.querySelector('.datalistIDs').insertAdjacentHTML('beforeend', '<option value="' + x + '">' + x + '</option>');
	});

}

// Writes user input to Bills array
function writeToBillTable(name, amount, dueDate) {
	var success = true;
	// Create array to hold bill objects
	// Create Bill object

	try {
		billArray.push({ name: name, amount: amount, date: dueDate });
		console.log(billArray[0].name);
	} catch (ex) {
		success = false;
	}

	return success;
}

// Bills button
document.querySelector('.bBills').addEventListener('click', function () {
	document.querySelector('.bNewBill').style.display = 'inline-block';
	document.querySelector('.billName').style.display = 'inline-block';
	displayBillTable();
	if (!billArray[0].name) {
		document.querySelector('.bUpdateBill').style.display = 'none';
	} else {
		document.querySelector('.bUpdateBill').style.display = 'inline-block';
	}
});

// New button
document.querySelector('.bNewBill').addEventListener('click', function () {
	document.querySelector('.bNewBill').style.display = 'none';
	document.querySelector('.bUpdateBill').style.display = 'none';
	document.querySelector('.bAddNewBill').style.display = 'inline-block';
	document.querySelector('.inputsBill').style.display = 'inline-block';
	document.querySelector('.bCancel').style.display = 'inline-block';

	document.querySelector('.billAmount').value = null;
	document.querySelector('.billName').value = null;
	document.querySelector('.billDate').value = null;
});

// Add button
document.querySelector('.bAddNewBill').addEventListener('click', function () {
	var amount = document.querySelector('.billAmount').value;
	var name = document.querySelector('.billName').value;
	var dueDate = document.querySelector('.billDate').value;
	writeToBillTable(name, amount, dueDate);
	document.querySelector('.inputsBill').style.display = 'none';
	document.querySelector('.bNewBill').style.display = 'inline-block';
	document.querySelector('.bUpdateBill').style.display = 'inline-block';
	document.querySelector('.bAddNewBill').style.display = 'none';
	document.querySelector('.bCancel').style.display = 'none';
	displayBillTable();
});

// Update button
document.querySelector('.bUpdateBill').addEventListener('click', function () {
	document.querySelector('.datalistIDs').style.display = 'inline-block';
	document.querySelector('.inputsBill').style.display = 'none';
	document.querySelector('.bNewBill').style.display = 'none';
	document.querySelector('.bUpdateBill').style.display = 'none';
	document.querySelector('.bCancel').style.display = 'inline-block';
	displayBillTable();
});

// Cancel button
document.querySelector('.bCancel').addEventListener('click', function(){
	document.querySelector('.bNewBill').style.display = 'inline-block';
	document.querySelector('.bAddNewBill').style.display = 'none';
	document.querySelector('.inputsBill').style.display = 'none';
	document.querySelector('.bCancel').style.display = 'none';
	document.querySelector('.datalistIDs').style.display = 'none';
	document.querySelector('.bSaveBill').style.display = 'none';
	if (!billArray[0].name) {
		document.querySelector('.bUpdateBill').style.display = 'none';
	} else {
		document.querySelector('.bUpdateBill').style.display = 'inline-block';
	}
});

// Drop down update
document.querySelector('.datalistIDs').addEventListener('change', function(e){
	document.querySelector('.bNewBill').style.display = 'none';
	document.querySelector('.inputsBill').style.display = 'inline-block';
	document.querySelector('.bSaveBill').style.display = 'inline-block';
	document.querySelector('.bCancel').style.display = 'inline-block';
	document.querySelector('.billAmount').value = billArray[e.target.value].amount;
	document.querySelector('.billName').value = billArray[e.target.value].name;
	document.querySelector('.billDate').value = billArray[e.target.value].date;
});

// Save bill after updating
document.querySelector('.bSaveBill').addEventListener('click', function(){
	var drpIndex = document.querySelector('.datalistIDs');
	var index = drpIndex.options[drpIndex.selectedIndex].value;
	var amount = document.querySelector('.billAmount').value;
	var name = document.querySelector('.billName').value;
	var dueDate = document.querySelector('.billDate').value;
	document.querySelector('.inputsBill').style.display = 'none';
	document.querySelector('.bSaveBill').style.display = 'none';
	document.querySelector('.datalistIDs').style.display = 'none';
	document.querySelector('.bCancel').style.display = 'none';
	document.querySelector('.bNewBill').style.display = 'inline-block';
	if (!billArray[0].name) {
		document.querySelector('.bUpdateBill').style.display = 'none';
	} else {
		document.querySelector('.bUpdateBill').style.display = 'inline-block';
	}
	billArray[index].name = name;
	billArray[index].amount = amount;
	billArray[index].date = dueDate;
	displayBillTable();
}); 

