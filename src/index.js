
// feched all HTML Elements by document.getElementByID() method //
let Name = document.getElementById("student_name");
let submit = document.getElementById("submit");
let reset = document.getElementById("resetBtn");
let student_id = document.getElementById("student_id");
let student_email =document.getElementById("student_email");
let contact = document.getElementById("Contact_NO");
let StudentForm = document.getElementById("studentForm");
const tableBody = document.getElementById("tableBody");

//Adding the EventListener ont he Submit Button and Calling th addDetails() function //
submit.addEventListener("click",addDetails);
Name.focus();

console.log(StudentForm); 
// addDetails()  for Adding the Details to the Registerd Student List //
function addDetails(event) {
    event.preventDefault();
// validation for the data fetched //
    if (Name.value.trim() === "") {
    alert("Please add Student Name");
    return;
    }

    if (student_id.value.trim() === "") {
        alert("Please add Student ID");
        return;
    }

    if (student_email.value.trim() === "") {
        alert("Please add Student Email");
        return;
    }

    if (contact.value.trim() === "") {
        alert("Please add Contact Number");
        return;
    }


// Created the HTML Elements todisplay fetched data from the StudentForm ///
    const addRow = document.createElement("tr");
    const name_th = document.createElement("td");
    const id_th = document.createElement("td");
    const email_th = document.createElement("td");
    const contact_th = document.createElement("td");
    const remove = document.createElement("td");
//Added Delete button for the Delete operation on row ///
    const deleteBTN =document.createElement("button");
    deleteBTN.textContent = "Delete";
    deleteBTN.className = "px-3 py-1 bg-red-500 text-white rounded-md";

// Added EventListener to teh Delete button For deleting the row in the display section //
    deleteBTN.addEventListener("click", ()=>{
        addRow.remove();
    })
     
// added fetched data to the table data to display onthe screen
    name_th.textContent = Name.value;
    id_th.textContent = student_id.value;
    email_th.textContent = student_email.value;
    contact_th.textContent = contact.value;
    
    

// appended the delete button to the table row // 
    remove.appendChild(deleteBTN);
    
//appended the table data to th row 
    addRow.append(name_th, id_th, email_th, contact_th,remove);
    
//appended the table row to the table 
    tableBody.appendChild(addRow);
    console.log("befor reset",StudentForm);
    StudentForm.reset();
    Name.focus();

}
