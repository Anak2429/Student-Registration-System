let Name = document.getElementById("name");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let student_id = document.getElementById("student_id");
let student_email =document.getElementById("student_email");
let contact = document.getElementById("Contact_NO");

console.log(name,submit,reset,student_email,student_id,contact);

submit.addEventListener("click",addDetails);
const tableBody = document.getElementById("tableBody");

function addDetails() {
    console.log("SUBMITTED");

    const addRow = document.createElement("tr");
    const name_th = document.createElement("th");
    const id_th = document.createElement("th");
    const email_th = document.createElement("th");
    const contact_th = document.createElement("th");

    name_th.innerHTML = Name.value;
    id_th.innerHTML = student_id.value;
    email_th.innerHTML = student_email.value;
    contact_th.innerHTML = contact.value;

    addRow.append(name_th, id_th, email_th, contact_th);

    tableBody.appendChild(addRow);

    console.log(name_th);
}
