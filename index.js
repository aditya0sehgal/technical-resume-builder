var doc = new jsPDF();

function print(event) {
    event.preventDefault(); 
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(email.value);
    
    doc.text("Hello!", 20, 10);
    doc.text("First Name: "+firstName.value, 20, 20);
    doc.text("Last Name: "+lastName.value, 20, 30);
    doc.text("Email: "+email.value, 20, 40);
    doc.save(firstName.value+lastName.value+".pdf");
}
