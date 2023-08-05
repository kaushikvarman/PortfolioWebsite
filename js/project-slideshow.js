let project = document.getElementsByClassName("project");
let slideIndex = 1;

showProject(slideIndex);

function showProject(num) {
    // Redirecting to first page/project after click next from last project/button
    if(num > project.length) {
        slideIndex = 1;
    }
    // Go to last last project page , when we click prev on first page
    if(num < 1) {
        slideIndex = project.length;
    }
    //For loop to hide all the projects
    for (let i = 0; i < project.length; i++) {
        project[i].style.display = "none";
    }
    project[slideIndex-1].style.display = "flex";
}

function navigateProject(num) {
    // Changing the slideIndex based on prev and next arrows
    showProject((slideIndex += num));
}