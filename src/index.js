
// feched all HTML Elements by document.getElementByID() method //
let Name = document.getElementById("name");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let student_id = document.getElementById("student_id");
let student_email =document.getElementById("student_email");
let contact = document.getElementById("Contact_NO");
let StudetForm = document.getElementById("studetnForm");
const tableBody = document.getElementById("tableBody");

//Adding the EventListener ont he Submit Button and Calling th addDetails() function //

submit.addEventListener("click",addDetails);

// addDetails()  for Adding the Details to the Registerd Student List //
function addDetails() {
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

    remove.appendChild(deleteBTN);

    name_th.innerHTML = Name.value;
    id_th.innerHTML = student_id.value;
    email_th.innerHTML = student_email.value;
    contact_th.innerHTML = contact.value;
    

    addRow.append(name_th, id_th, email_th, contact_th,remove);

    tableBody.appendChild(addRow);


    
}
