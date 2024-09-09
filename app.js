function toggleSkills() {
    var skillsContent = document.getElementById('skills-content');
    var toggleButton = document.querySelector('.toggle-button');
    if (skillsContent.style.display === 'none') {
        skillsContent.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skillsContent.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
}
function generateResume() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var name = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value.trim();
    var email = (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value.trim();
    var number = (_c = document.getElementById('number')) === null || _c === void 0 ? void 0 : _c.value.trim();
    var city = ((_d = document.querySelector('input[name="city"]:checked')) === null || _d === void 0 ? void 0 : _d.value) || '';
    var Skills = (_e = document.getElementById('Skills')) === null || _e === void 0 ? void 0 : _e.value.trim();
    var degree = (_f = document.getElementById('degree')) === null || _f === void 0 ? void 0 : _f.value.trim();
    var university = (_g = document.getElementById('university')) === null || _g === void 0 ? void 0 : _g.value.trim();
    var graduationDate = (_h = document.getElementById('graduation-date')) === null || _h === void 0 ? void 0 : _h.value;
    var jobTitle = (_j = document.getElementById('job-title')) === null || _j === void 0 ? void 0 : _j.value.trim();
    var companyName = (_k = document.getElementById('company-name')) === null || _k === void 0 ? void 0 : _k.value.trim();
    var startDate = (_l = document.getElementById('start-date')) === null || _l === void 0 ? void 0 : _l.value;
    var endDate = (_m = document.getElementById('end-date')) === null || _m === void 0 ? void 0 : _m.value;
    var resumeContent = "\n        <h1>Resume</h1>\n        <h2>Personal Information</h2>\n        <p><strong>Full Name:</strong> ".concat(name, "</p>\n        <p><strong>Email Address:</strong> ").concat(email, "</p>\n        <p><strong>Contact Number:</strong> ").concat(number, "</p>\n        <p><strong>City:</strong> ").concat(city, "</p>\n\n        <h2>Skills</h2>\n        <p><strong>Skills:</strong> ").concat(Skills, "</p>\n\n        <h2>Education</h2>\n        <p><strong>Degree:</strong> ").concat(degree, "</p>\n        <p><strong>University:</strong> ").concat(university, "</p>\n        <p><strong>Graduation Date:</strong> ").concat(graduationDate, "</p>\n\n        <h2>Work Experience</h2>\n        <p><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n        <p><strong>Company Name:</strong> ").concat(companyName, "</p>\n        <p><strong>Start Date:</strong> ").concat(startDate, "</p>\n        <p><strong>End Date:</strong> ").concat(endDate, "</p>\n    ");
    var resumeContentDiv = document.getElementById('resume-content');
    resumeContentDiv.innerHTML = resumeContent;
    alert("Resume Generated! Check the console for detailed content.");
    console.log(resumeContent);
}
