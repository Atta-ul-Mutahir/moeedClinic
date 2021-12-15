$(document).ready(function() {
    $("#myTable").DataTable({
        "lengthMenu": [
            [10, 5],
            [10, 5]
        ]
    });
});


function del() {
    alert("Are you sure you want to delete the record")

}

var arr = new Array();

function addData() {
    getData();
    arr.push({
        MD_Name: document.getElementById("MD_Name").value,
        MD_Power: document.getElementById("MD_Power").value,
        MD_Row: document.getElementById("MD_Row").value,
        MD_Column: document.getElementById("MD_Column").value
    });
    localStorage.setItem("localData", JSON.stringify(arr));
    showData();

};

function getData() {
    var str = localStorage.getItem("localData");
    if (str != null) {
        arr = JSON.parse(str);
    }

};

function deletedata() {
    localStorage.clear();
}

function showData() {

    getData();
    var tbl = document.getElementById("tbody");


    var x = tbl.rows.length;
    while (x--) {
        tbl.deleteRow(x);
    }

    for (i = 0; i < arr.length; i++) {

        var r = tbl.insertRow();
        var td1 = r.insertCell();
        var td2 = r.insertCell();
        var td3 = r.insertCell();
        var td4 = r.insertCell();

        td1.innerHTML = arr[i].MD_Name;
        td2.innerHTML = arr[i].MD_Power;
        td3.innerHTML = arr[i].MD_Row;
        td4.innerHTML = arr[i].MD_Column;
    }

}

// function myfunction() {
//     var tbl = document.getElementById("myTable");
//     var row = tbl.insertRow();
//     var cell1 = row.insertCell();
//     var cell2 = row.insertCell();
//     var cell3 = row.insertCell();
//     var cell4 = row.insertCell();

//     cell1.innerHTML = document.getElementById("MD_Name").value;
//     cell2.innerHTML = document.getElementById("MD_Power").value;
//     cell3.innerHTML = document.getElementById("MD_Row").value;
//     cell4.innerHTML = document.getElementById("MD_Column").value;
// }



















// function OnFormSubmit() {
//     var formdata = readFormData();
//     if (selectedRow == null) {
//         insertnewrecord(formdata);
//     } else {
//         updaterecord(formData);
//     }
//     resetform();
// }

// function readFormData() {

//     var formData = {};
//     formData["MD_Name"] = document.getElementById("MD_Name").value;
//     formData["MD_Power"] = document.getElementById("MD_Power").value;
//     formData["MD_Row"] = document.getElementById("MD_Row").value;
//     formData["MD_Column"] = document.getElementById("MD_Column").value;



//     return formData;

// }

// function insertnewrecord(data) {
//     var table = document.getElementById("myTable").getElementsByTagName('Tbody')[0];
//     var newRow = table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.MD_Name;
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.MD_Power;
//     cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.MD_Row;
//     cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.MD_Column;
//     cell5 = newRow.insertCell(4);
//     cell5.innerHTML = '<div class="btn-group" role="group" aria-label="Basic example"><button type="button" onclick="onEdit()" class="btn btn-sm btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#Modaledit">Edit</button><button type="button" class="btn btn-sm btn-sm btn-danger" onclick="del()">Delete</button></div>';

// }

// function resetform() {
//     document.getElementById("MD_Name").value = "";
//     document.getElementById("MD_Power").value = "";
//     document.getElementById("MD_Row").value = "";
//     document.getElementById("MD_Column").value = "";

// }

// function onEdit(td) {
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById("MD_Name").value = selectedrow.cells[0].innerHTML;
//     document.getElementById("MD_Power").value = selectedrow.cells[1].innerHTML;
//     document.getElementById("MD_Row").value = selectedrow.cells[2].innerHTML;
//     document.getElementById("MD_Column").value = selectedrow.cells[3].innerHTML;
// }

// function updaterecord(formData) {
//     selectedRow.cells[0].innerHTML = formData.MD_Name;
//     selectedRow.cells[1].innerHTML = formData.MD_Power;
//     selectedRow.cells[2].innerHTML = formData.MD_Row;
//     selectedRow.cells[3].innerHTML = formData.MD_Column;
// }