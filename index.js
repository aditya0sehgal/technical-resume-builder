var doc = new jsPDF();
doc.setFont('times')
const pdfWidth = 210;
const pdfHeight = 297;
let number_of_skills = 0;

function skills_input_change(event) {
    var skill_heading_list = document.getElementById('skill_headings').value.split(",");
    var skill_input_boxes = document.getElementById('skill_headings').value.split(",").length;
    number_of_skills = skill_input_boxes
    console.log(document.getElementById('skill_headings').value);
    console.log(document.getElementById('skill_headings').value.split(",").length)
    var inputs = `<div id="skill_input_group">`
    $('#skill_input_group').remove();
    for (let index = 0; index < skill_input_boxes; index++) {
        inputs += 
            `<div class="row m-2" id="skill_input_group_style">
                    <div class="input-group mt-3">
                        <span id="skill_label_`+(index+1)+`" class="input-group-text">`+skill_heading_list[index].trim()+`</span>
                        <textarea type="text" class="form-control" rows="2" id="skill_`+(index+1)+`"></textarea>
                        </div>
                        </div>`
        }
        $('#skill_inputs').append(inputs);
        console.log(document.getElementById("skill_label_1").innerHTML)
}

let number_of_project_input_boxes;
function project_input_change(event) {
    number_of_project_input_boxes = event.target.value;
    var inputs = `<div id="project_input_group">`
    $('#project_input_group').remove();
    for (let index = 0; index < number_of_project_input_boxes; index++) {
        inputs += 
            `<div class="row m-2 p-3" id="project_input_group_style">
                <div class="col-md-12"><h5>Project - `+(index+1)+` </h5></div>
                    <div class="col-md-6">
                        <label for="title_`+(index+1)+`" class="form-label">Title </label>
                        <input type="text" class="form-control" id="title_`+(index+1)+`">
                    </div>
                    
                    <div class="col-md-6">
                        <label for="skills_used_`+(index+1)+`" class="form-label">Technologies/Skills Used </label>
                        <input type="text" class="form-control" id="skills_used_`+(index+1)+`">
                    </div>

                    <div class="col-md-6 mt-2">
                        <label for="project_repo_`+(index+1)+`" class="form-label">Remote Repository Link</label>
                        <input class="form-control" id="project_repo_`+(index+1)+`" />
                    </div>

                    <div class="col-md-6 mt-2">
                        <label for="project_description_`+(index+1)+`" class="form-label">Add a Description (3-4 lines max)</label>
                        <textarea class="form-control" id="project_description_`+(index+1)+`"></textarea>
                    </div>
            </div>`
    }
    $('#project_inputs').append(inputs);

}

let number_of_workex_input_boxes;
function workex_input_change(event) {
    number_of_workex_input_boxes = event.target.value;
    var inputs = `<div id="workex_input_group">`
    $('#workex_input_group').remove();
    for (let index = 0; index < number_of_workex_input_boxes; index++) {
        inputs += 
            `<div class="row m-2 p-3" id="workex_input_group_style">
                <div class="col-md-12"><h5>Work Exp - `+(index+1)+` </h5></div>
                <div class="col-md-4 mt-2">
                    <label for="role_`+(index+1)+`" class="form-label">Role </label>
                    <input type="text" class="form-control" id="workex_role_`+(index+1)+`">
                </div>

                <div class="col-md-4 mt-2">
                    <label for="organisation_`+(index+1)+`" class="form-label">Organisation/Company </label>
                    <input type="text" class="form-control" id="workex_organisation_`+(index+1)+`">
                </div>
                
                <div class="col-md-4 mt-2">
                    <label for="location_`+(index+1)+`" class="form-label">Location </label>
                    <input type="text" class="form-control" id="workex_location_`+(index+1)+`">
                </div>
                
                <div class="col-md-6 mt-3">
                    <label for="workex_years_`+(index+1)+`" class="form-label">Dates of work Experience(Eg : 2017-2021)</label>
                    <input type="text" class="form-control" id="workex_years_`+(index+1)+`">
                </div>
            
                <div class="col-md-6 mt-3">
                    <label for="workex_description" class="form-label">Add a Description (3-4 lines max)</label>
                    <textarea class="form-control" rows="1" id="workex_description_`+(index+1)+`"></textarea>
                </div>
            </div>`
    }
    $('#workex_inputs').append(inputs);

}

function print(event) {
    event.preventDefault(); 
    // ------ OG Code ------
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let github = document.getElementById("github").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let linkedin = document.getElementById("linkedin").value.trim();
    let website = document.getElementById("website").value.trim();
    let bio = document.getElementById("bio").value.trim()
    let edu_1_name =  document.getElementById("edu_1_name").value.trim()
    let edu_1_course =  document.getElementById("edu_1_course").value.trim()
    let edu_1_location = document.getElementById("edu_1_location").value.trim()
    let edu_1_years = document.getElementById("edu_1_years").value.trim()
    let edu_1_gpa = document.getElementById("edu_1_gpa").value.trim()
    
    let edu_2_name =  document.getElementById("edu_2_name").value.trim()
    let edu_2_course =  document.getElementById("edu_2_course").value.trim()
    let edu_2_location = document.getElementById("edu_2_location").value.trim()
    let edu_2_years = document.getElementById("edu_2_years").value.trim()
    let edu_2_gpa = document.getElementById("edu_2_gpa").value.trim()
    let fullname = firstName+" "+lastName;

    var currXPosition = 10;
    var currYPosition = 10;

    
    doc.setProperties({
        title: firstName+"_"+lastName+".pdf"
    });

    doc.setFontSize(20)
    // at size 20 each character takes about 3 sapces.
    // at size 11 each character takes about 2 sapces.
    doc.setFont("Times", "bold", "normal")
    doc.text(firstName+" "+lastName , ((pdfWidth/2)-((fullname.length%2==0 ? fullname.length : fullname.length+1)/2)*3.5), currYPosition);
    doc.setFont("Times", "normal", "normal")
    doc.setFontSize(11)
    doc.text(`[`+phone+`]`, 170, currYPosition);
    doc.setTextColor(0, 0, 255)
    // Refer resume - 1
    doc.setFontSize(10)
    currYPosition = 16
    doc.textWithLink('\u2022 ' + website, currXPosition, currYPosition, { url: website})
    currXPosition += doc.getStringUnitWidth(website) * 4
    doc.textWithLink('\u2022 ' + 'linkedin.com/in/'+linkedin, currXPosition, currYPosition, { url: 'https://www.linkedin.com/in/'+linkedin})
    currXPosition += doc.getStringUnitWidth('linkedin.com/in/'+linkedin) * 4
    doc.textWithLink('\u2022 ' + 'github.com/'+github, currXPosition, currYPosition, { url: 'https://github.com/'+github})
    currXPosition += doc.getStringUnitWidth('github.com/'+github) * 4
    doc.text('\u2022 ' + "Email:"+email, currXPosition, currYPosition);
    doc.setTextColor(0, 0, 0)

    currYPosition = 23
    doc.setFontSize(14)
    doc.setFont("Times", "bold", "normal")
    doc.text("Bio : ", 10, currYPosition);
    doc.line(10, currYPosition+1, 200, currYPosition+1, 'S') 
    doc.setFont("Times", "normal", "normal")
    doc.setFontSize(11)
    currYPosition += 5
    var lineHeight = doc.getLineHeight(bio) / doc.internal.scaleFactor
    var splittedText = doc.splitTextToSize(bio, 185)
    var lines = splittedText.length  // splitted text is a string array
    doc.text(splittedText, 15, currYPosition, {maxWidth: 185, align: "justify"});
    var blockHeight = lines * lineHeight
    currYPosition += blockHeight
    // `I am an enthusiastic and diligent Computer Engineer, who is ready to take up new challenges. 
    // I am passionate about new technologies as well as getting insights from data and the way it affects users. 
    // I love teaching coding and maths to high school students. I am a fast learner who is open to learning new technologies. 
    // I believe having a deep understanding of a few skills is of paramount importance rather than having multiple skills.`
    
    currYPosition += 3
    doc.setFontSize(14)
    doc.setFont("Times", "bold", "normal")
    doc.text("Education : ", 10, currYPosition);
    currYPosition += 1 
    doc.line(10, currYPosition, 200, currYPosition, 'S')
    doc.setFont("Times", "normal", "normal")
    doc.setFontSize(11)
    currYPosition += 5
    // currYPosition = 55
    doc.setFont("Times", "bold", "normal")
    doc.text(edu_1_name + " - " + edu_1_location , 15, currYPosition);
    doc.setFont("Times", "normal", "normal")
    // doc.text(edu_1_location, 10, 55);
    doc.text(`[`+edu_1_years+`]`, 180, currYPosition);
    currYPosition += 4
    doc.text(edu_1_course + `   |   GPA: ` + edu_1_gpa, 15, currYPosition);
    currYPosition += 6
    doc.setFont("Times", "bold", "normal")
    doc.text(edu_2_name + " - " + edu_2_location , 15, currYPosition);
    doc.setFont("Times", "normal", "normal")
    // doc.text(edu_1_location, 10, 55);
    doc.text(`[`+edu_2_years+`]`, 180, currYPosition);
    currYPosition += 4
    doc.text(edu_2_course + `   |   GPA: ` + edu_2_gpa, 15, currYPosition);
    
    // try doc.text(align options)
    currYPosition += 7
    doc.setFontSize(14)
    doc.setFont("Times", "bold", "normal")
    doc.text("Technical Skills : ", 10, currYPosition);
    currYPosition += 1
    doc.line(10, currYPosition, 200, currYPosition, 'S')
    doc.setFont("Times", "normal", "normal")
    doc.setFontSize(11)
    currYPosition += 5
    skill_list = ``
    for (let index = 0; index < number_of_skills; index++) {
        console.log(document.getElementById("skill_label_"+(index+1)).innerHTML)
        skill_list = "**"+document.getElementById("skill_label_"+(index+1)).innerHTML.trim()+"**: "+document.getElementById(`skill_`+(index+1)).value.trim();
        // https://codepen.io/AndreKelling/pen/BaoLWao
        var startX = 15
        const regex = /(\*{2})+/g; // all "**" words
        const textWithoutBoldMarks = skill_list.replace(regex, '');
    
        let splitTextWithoutBoldMarks = doc.splitTextToSize(
            textWithoutBoldMarks,
            180
        );
    
        let charsMapLength = 0;
        let position = 0;
        let isBold = false;
        let textRows = splitTextWithoutBoldMarks.map((row, i) => {
            const charsMap = row.split('');
    
            const chars = charsMap.map((char, j) => {
            position = charsMapLength + j + i;
    
            let currentChar = skill_list.charAt(position);
    
            if (currentChar === "*") {
                const spyNextChar = skill_list.charAt(position + 1);
                if (spyNextChar === "*") {
                    // double asterix marker exist on these position's so we toggle the bold state
                    isBold = !isBold;
                    currentChar = skill_list.charAt(position + 2);
    
                    // now we remove the markers, so loop jumps to the next real printable char
                    let removeMarks = skill_list.split('');
                    removeMarks.splice(position, 2);
                    skill_list = removeMarks.join('');
                    }
            }
    
            return { char: currentChar, bold: isBold };
            });
            charsMapLength += charsMap.length;
    
            return { ...chars };
        });
    
        
        printCharacters(doc, textRows, currYPosition, 15, 11, 9);
   
        var lineHeight = doc.getLineHeight(skill_list) / doc.internal.scaleFactor
        var splittedText = doc.splitTextToSize(skill_list, 185)
        var lines = splittedText.length  // splitted text is a string array - (doc.getTextWidth(document.getElementById("skill_label_"+(index+1)).innerHTML)+5)
        var blockHeight = lines * lineHeight
        currYPosition += blockHeight+2;
    }
    // Java, Javascript, C, C++, Python, R, ML, Ruby, SQL, Node.js, HTML, CSS, numpy, pandas, AI, Data Mining.

    currYPosition += 3
    doc.setFontSize(14)
    doc.setFont("Times", "bold", "normal")
    doc.text("Work Experience : ", 10, currYPosition);
    currYPosition += 1
    doc.line(10, currYPosition, 200, currYPosition, 'S')
    doc.setFontSize(11)
    currYPosition += 5
    for (let index = 0; index < number_of_workex_input_boxes; index++) {
        doc.setFont("Times", "bold", "normal")
        console.log(document.getElementById("workex_role_"+(index+1)).value.trim())
        doc.text(document.getElementById("workex_role_"+(index+1)).value.trim(), 15, currYPosition, {maxWidth: 185, align: "justify"});
        doc.setFont("Times", "normal", "normal")
        currYPosition += 4.5
        doc.text(document.getElementById("workex_organisation_"+(index+1)).value.trim() + ` | ` + document.getElementById("workex_location_"+(index+1)).value.trim() + ` | ` + document.getElementById("workex_years_"+(index+1)).value.trim() + ` | `, 15, currYPosition, {maxWidth: 185, align: "justify"});
        currYPosition += 4.5
        var lineHeight = doc.getLineHeight(document.getElementById("workex_description_"+(index+1)).value.trim()) / doc.internal.scaleFactor
        var splittedText = doc.splitTextToSize(document.getElementById("workex_description_"+(index+1)).value.trim(), 185)
        var lines = splittedText.length  // splitted text is a string array
        doc.text(document.getElementById("workex_description_"+(index+1)).value.trim(), 15, currYPosition, {maxWidth: 185, align: "justify"});
        var blockHeight = lines * lineHeight
        currYPosition += blockHeight
        currYPosition += 3
    }
    
    
    // try doc.text(align options)
    doc.setFontSize(14)
    doc.setFont("Times", "bold", "normal")
    doc.text("Projects : ", 10, currYPosition);
    currYPosition += 1
    doc.line(10, currYPosition, 200, currYPosition, 'S')
    doc.setFontSize(11)
    currYPosition += 5
    for (let index = 0; index < number_of_project_input_boxes; index++) {
        doc.setFont("Times", "bold", "normal")
        var X = 15;
        console.log(document.getElementById("title_"+(index+1)).value.trim())
        doc.text(document.getElementById("title_"+(index+1)).value.trim() + `  |  Link : `, X, currYPosition, {maxWidth: 185, align: "justify"});
        X += doc.getStringUnitWidth(document.getElementById("title_"+(index+1)).value.trim() + `   |   Link : `) * 3.5
        // X += 50
        // X = 110
        doc.setTextColor(0, 0, 255);
        doc.textWithLink(`[` + document.getElementById("project_repo_"+(index+1)).value.trim() + ` ]`, X, currYPosition, { url: document.getElementById("project_repo_"+(index+1)).value.trim()})
        doc.setFont("Times", "normal", "normal")
        doc.setTextColor(0, 0, 0);
        currYPosition += 4.5
        doc.text(`Tech-Stack : ` + document.getElementById("skills_used_"+(index+1)).value.trim(), 15, currYPosition, {maxWidth: 185, align: "justify"});
        currYPosition += 4.5
        var lineHeight = doc.getLineHeight(document.getElementById("project_description_"+(index+1)).value.trim()) / doc.internal.scaleFactor
        var splittedText = doc.splitTextToSize(document.getElementById("project_description_"+(index+1)).value.trim(), 185)
        var lines = splittedText.length  // splitted text is a string array
        doc.text(document.getElementById("project_description_"+(index+1)).value.trim(), 15, currYPosition, {maxWidth: 185, align: "justify"});
        var blockHeight = lines * lineHeight
        currYPosition += blockHeight
        currYPosition += 3
    }
    
    // window.open(doc.output('bloburl', { 'filename': firstName+"_"+lastName+".pdf" }));
    // doc.output('dataurlnewwindow', { 'filename': firstName+"_"+lastName+".pdf" })
    doc.output('dataurlnewwindow')
    // doc.save(firstName+"_"+lastName+".pdf");
    doc = new jsPDF();
    doc.setFont('times')
}

  
const printCharacters = (doc, textObject, currYPosition, startX, fontSize, lineSpacing) => {
    const startXCached = startX;
    const boldStr = 'bold';
    const normalStr = 'normal';
    var temp_text = ""
    textObject.map(row => {

        Object.entries(row).map(([key, value]) => {
            doc.setFontType(value.bold ? boldStr : normalStr);
            temp_text += value.char;
            doc.text(value.char, startX, currYPosition);
            startX = startX + doc.getStringUnitWidth(value.char) * 4;

        });
        startX = startXCached;
        currYPosition += 4;
    });
};