var doc = new jsPDF();

function print(event) {
    event.preventDefault(); 
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let github = document.getElementById("github");
    let linkedin = document.getElementById("linkedin");
    let website = document.getElementById("website");

    console.log(firstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(github.value);
    console.log(linkedin.value);
    console.log(website.value);
    doc.setFontSize(20)
    doc.text(firstName.value, 20, 10);
    doc.text(lastName.value, 40, 10);
    doc.setFontSize(10)
    doc.text("Email: "+email.value, 20, 20);
    doc.text("Email: "+github.value, 20, 30);
    doc.text("Email: "+linkedin.value, 20, 40);
    doc.text("Email: "+website.value, 20, 50);
    doc.textWithLink("go to google", 20, 60, { url: "url value"})
    doc.save(firstName.value+lastName.value+".pdf");
}
