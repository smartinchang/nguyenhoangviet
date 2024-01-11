var row = 1;

function rowAdd() {
	row++;
	var newRow = document.getElementById('myTable').insertRow(-1);
	var cell1 = newRow.insertCell(0);
	cell1.innerHTML = '<input type="text" style="width:25px">';
	var cell2 = newRow.insertCell(1);
	cell2.innerHTML = '<input type="text" style="width:200px">';
	var cell3 = newRow.insertCell(2);
	cell3.innerHTML = '<input type="text" style="width:50px" id="cell3_' + row + '" onchange="avg(' + row + ')">';
	var cell4 = newRow.insertCell(3);
	cell4.innerHTML = '<input type="text" style="width:50px" id="cell4_' + row + '" onchange="avg(' + row + ')">';
	var cell5 = newRow.insertCell(4);
	cell5.innerHTML = '<input type="text" style="width:50px" id="cell5_' + row + '" onchange="avg(' + row + ')">';
	var cell6 = newRow.insertCell(5);
	cell6.innerHTML = '<input type="text" style="width:80px" id="cell6_' + row + '" disabled>';
}

function avg(row) {
	result = (Number(document.getElementById("cell3_" + row).value) + Number(document.getElementById("cell4_" + row).value) + Number(document.getElementById("cell5_" + row).value))/3;
	document.getElementById("cell6_" + row).value = result;
}