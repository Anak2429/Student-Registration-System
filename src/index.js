
// feched all HTML Elements by document.getElementByID() method //
let Name = document.getElementById("student_name");
let submit = document.getElementById("submit");
let reset = document.getElementById("resetBtn");
let student_id = document.getElementById("student_id");
let student_email =document.getElementById("student_email");
let contact = document.getElementById("Contact_NO");
let StudentForm = document.getElementById("studentForm");
const tableBody = document.getElementById("tableBody");

let editingRow = null;

// validation for the data fetched //

function validateForm() {
    const nameVal = /^[A-Za-z ]+$/;
    const idVal = /^[0-9]+$/;
    const emailVal = /^[^\s@]+@[^\s@]+\.[^\s@]/;
    const contactVal = /^[0-9]{10}$/;
    if (Name.value.trim() === "") {
        alert("Please add Student Name");
    return;
    }
    if(!nameVal.test(Name.value.trim())){
        alert("please provide vaild Student Name");
        return;
    }

    if (student_id.value.trim() === "") {
        alert("Please add Student ID");
        return;
    }
    if(!idVal.test(student_id.value.trim())){
        alert("please provide vaild Student ID");
        return;
    }
    if (student_email.value.trim() === "") {
        alert("Please add Student Email");
        return;
    }
    if(!emailVal.test(student_email.value.trim())){
        alert("please provide vaild Student Email");
        return;
    }

    if (contact.value.trim() === "") {
        alert("Please add Contact Number");
        return;
    }
    if(!contactVal.test(contact.value.trim())){
        alert("Contact Number Must be 10 digits");
        return;
    }
    return true;
}


//Adding the EventListener ont he Submit Button and Calling th addDetails() function //
submit.addEventListener("click",addDetails);
Name.focus();

console.log(StudentForm); 
// addDetails()  for Adding the Details to the Registerd Student List //

function addDetails(event) {
    event.preventDefault();

    // checking validation first //
    if (!validateForm()) return;

    // get current input values once
    const nameVal = Name.value.trim();
    const idVal = student_id.value.trim();
    const emailVal = student_email.value.trim();
    const contactVal = contact.value.trim();

    // ===== If we are updating an existing row =====
    if (editingRow) {
    const cells = editingRow.querySelectorAll("td");
    cells[0].textContent = nameVal;
    cells[1].textContent = idVal;
    cells[2].textContent = emailVal;
    cells[3].textContent = contactVal;

    // reset state
    editingRow = null;
    submit.textContent = "Submit";
    StudentForm.reset();
    Name.focus();
    saveToLocalStorage();
    return;
  }

    // Created the HTML Elements todisplay fetched data from the StudentForm ///
    const addRow = document.createElement("tr");
    const name_th = document.createElement("td");
    const id_th = document.createElement("td");
    const email_th = document.createElement("td");
    const contact_th = document.createElement("td");
    const remove = document.createElement("td");

    // Added Edit Button 
    const editBTN = document.createElement("button");
    editBTN.textContent = "Edit";
    editBTN.className = "px-3 py-1 bg-blue-500 text-white rounded-md mr-2";
    
    
    editBTN.addEventListener("click", () => {
    // put row data back into inputs
    Name.value = name_th.textContent;
    student_id.value = id_th.textContent;
    student_email.value = email_th.textContent;
    contact.value = contact_th.textContent;

    submit.textContent = "Update";
    editingRow = addRow;  
    Name.focus();
  });


//adding alternate colors to the rows
    if(tableBody.children.length % 2 === 0){
        addRow.classList.add("bg-gray-100");
    }
    else{
        addRow.classList.add("bg-gray-300");
    }
//Added Delete button for the Delete operation on row ///
    const deleteBTN = document.createElement("button");
    deleteBTN.textContent = "Delete";
    deleteBTN.className = "px-3 py-1 bg-red-500 text-white rounded-md";
// Added EventListener to teh Delete button For deleting the row in the display section //
    deleteBTN.addEventListener("click", ()=>{
        addRow.remove();
         saveToLocalStorage();

    })
     
// added fetched data to the table data to display onthe screen
    name_th.textContent = Name.value;
    id_th.textContent = student_id.value;
    email_th.textContent = student_email.value;
    contact_th.textContent = contact.value;
    
    

// appended the delete button to the table row // 
    remove.append(deleteBTN , editBTN);
    
//appended the table data to th row 
    addRow.append(name_th, id_th, email_th, contact_th,remove);
    
//appended the table row to the table 
    tableBody.appendChild(addRow);
    console.log("befor reset",StudentForm);
    StudentForm.reset();
    Name.focus();
    saveToLocalStorage();


}

// saving to loacal storage //
function saveToLocalStorage() {
  const rows = tableBody.querySelectorAll("tr");
  const data = [];

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    data.push({
      name: cells[0].textContent,
      id: cells[1].textContent,
      email: cells[2].textContent,
      contact: cells[3].textContent,
    });
  });
// creating loaca; storage key //
  localStorage.setItem("studentsData", JSON.stringify(data));
}

// load data when page opens //

function loadFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("studentsData") || "[]");

  data.forEach((item) => {
    const addRow = document.createElement("tr");
    const name_th = document.createElement("td");
    const id_th = document.createElement("td");
    const email_th = document.createElement("td");
    const contact_th = document.createElement("td");
    const actions_td = document.createElement("td"); 

    name_th.textContent = item.name;
    id_th.textContent = item.id;
    email_th.textContent = item.email;
    contact_th.textContent = item.contact;

    const editBTN = document.createElement("button");
    editBTN.textContent = "Edit";
    editBTN.className = "px-3 py-1 bg-blue-500 text-white rounded-md mr-2";

    editBTN.addEventListener("click", () => {
      Name.value = name_th.textContent;
      student_id.value = id_th.textContent;
      student_email.value = email_th.textContent;
      contact.value = contact_th.textContent;

      submit.textContent = "Update";
      editingRow = addRow;
      Name.focus();
    });

    const deleteBTN = document.createElement("button");
    deleteBTN.textContent = "Delete";
    deleteBTN.className = "px-3 py-1 bg-red-500 text-white rounded-md";

    deleteBTN.addEventListener("click", () => {
      addRow.remove();
      updateRowStriping();
      saveToLocalStorage();
    });

    actions_td.append(editBTN, deleteBTN);
    addRow.append(name_th, id_th, email_th, contact_th, actions_td);
    tableBody.appendChild(addRow);
  });

}

loadFromLocalStorage();
