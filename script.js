//profile class

class Profile {

    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    introduce() {
        return `${this.name} - ${this.role}`;
    }

}

const profile =
    new Profile(
        "Your Name",
        "Frontend Developer"
    );

console.log(profile.introduce());

//getters and setters
class User {

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

}

const user = new User("Nova");

console.log(user.name);

user.name = "John";

console.log(user.name);

//inheritance
class Skill {

    constructor(name) {
        this.name = name;
    }

}

class ProgrammingSkill extends Skill {

    constructor(name) {
        super(name);
    }

}

const skill =
    new ProgrammingSkill("JavaScript");

console.log(skill.name);

//show/hide about section
document
    .getElementById("toggleAbout")
    .addEventListener("click", () => {

        const about =
            document.getElementById("about");

        about.classList.toggle("hidden");

    });

//add skills dynamically
const addSkillBtn = document.getElementById("addSkillBtn");
const skillInput = document.getElementById("skillInput");
const skillList = document.getElementById("skillList");

addSkillBtn.addEventListener("click", () => {
    const value = skillInput.value.trim();

    if (!value) {
        return;
    }

    const skillItem = document.createElement("li");
    skillItem.textContent = value;
    skillItem.className = "bg-white px-4 py-2 rounded-lg shadow-sm";

    skillList.appendChild(skillItem);
    skillInput.value = "";
});

//load profile data 
function loadPortfolio() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                name: "Bin Mara",
                role: "Computer Science Student",
                skills: ["JavaScript", "Python", "React"]
            });

        }, 2000);

    });

}

const outputPanel = document.getElementById("outputPanel");

function logOutput(message) {
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    outputPanel.appendChild(paragraph);
}

//async function to load profile data
async function getPortfolio() {
    const data = await loadPortfolio();

    console.log(data);
    logOutput(`Promise Result: ${JSON.stringify(data)}`);
}

getPortfolio();

//contact form validation
document
    .querySelector("form")
    .addEventListener("submit", (event) => {

        event.preventDefault();

        const successMessage = "Message Sent Successfully";
        alert(successMessage);
        logOutput(`Contact Form Success Message: ${successMessage}`);

    });

//browser BOM
logOutput(`Browser Information: width=${screen.width}, height=${screen.height}, userAgent=${navigator.userAgent}`);
console.log(screen.width);
console.log(screen.height);
console.log(navigator.userAgent);

//cookies
document.cookie = "visitor=Student";
logOutput(`Cookie Result: ${document.cookie}`);
console.log(document.cookie);
