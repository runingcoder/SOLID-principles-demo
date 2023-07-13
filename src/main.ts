import { TeamRepository, EmailService, Email, Team } from "./SRP.js";
// import from .js file even though we are working with ts files. Remember this.
let content = document.getElementById("content") as HTMLInputElement;
let sendEmail = document.getElementById("email2") as HTMLInputElement;
let delButton = document.getElementById("delbutton") as HTMLInputElement;

delButton.addEventListener("click", function () {
    const teamRepository = new TeamRepository();
    console.log("delete button clicked");
    teamRepository.deleteAllTeamMembers();
  });

let formButton = document.getElementById("myForm") as HTMLFormElement;
formButton.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    const collegeNameInput = document.getElementById("collegeName") as HTMLInputElement;
    const appearanceFrequencyInput = document.getElementById("participation") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const backgroundInput = document.getElementById("collegeType") as HTMLInputElement;

    const newTeam: Team = {
        collegeName: collegeNameInput.value,
        appearanceFrequency: parseInt(appearanceFrequencyInput.value),
        email: emailInput.value,
        background: backgroundInput.value,
        // registrationFee: 0 
        // 0 is the initial value. It will get updated later, once the registerTeam method is called
        // where the registration fee will be calculated based on the college type.
    };
    

    const teamRepository = new TeamRepository();
    teamRepository.registerTeam(newTeam);
    formButton.reset();

});
document.addEventListener("DOMContentLoaded", function() {
    const teamRepository = new TeamRepository();
    teamRepository.updateTeamList();
  });
  


const emailService = new EmailService();
let emailForm = document.getElementById("emailForm") as HTMLFormElement;
emailForm.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    let newEmail: Email = {
        content: content.value,
        email: sendEmail.value
    }
    emailService.sendEmail(newEmail);
    emailForm.reset();
});



// const emailService = new EmailService();
// emailService.sendEmail(user.email, "Welcome to our platform!");
