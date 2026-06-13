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

    const skillItem = document.createElement("span");
    skillItem.textContent = value;
    skillItem.className = "bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-md font-medium text-sm hover:shadow-lg transition-all duration-300 inline-block";

    skillList.appendChild(skillItem);
    skillInput.value = "";
    skillInput.focus();
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

//three dots menu toggle
const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    dropdownMenu.classList.toggle("hidden");
});

//close menu when clicking outside
document.addEventListener("click", () => {
    dropdownMenu.classList.add("hidden");
});

//close menu when a link is clicked
const menuLinks = dropdownMenu.querySelectorAll("a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        dropdownMenu.classList.add("hidden");
    });
});

// Web form validation api
const contactForm = document.getElementById("contactForm");
const ageInput = document.getElementById("age");
const ageError = document.getElementById("ageError");
const formResult = document.getElementById("formResult");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!ageInput.checkValidity()) {
        ageError.textContent = ageInput.validationMessage;
        return;
    }

    ageError.textContent = "";

    formResult.textContent =
        "Message sent successfully!";

    localStorage.setItem(
        "contactName",
        document.getElementById("name").value
    );

    sessionStorage.setItem(
        "draftMessage",
        document.getElementById("message").value
    );

    contactForm.reset();
});

// local storage and session storage
const visitorName = document.getElementById("visitorName");
const saveLocalBtn = document.getElementById("saveLocalBtn");
const localResult = document.getElementById("localResult");

localResult.textContent =
    localStorage.getItem("visitorName") || "No data";

saveLocalBtn.addEventListener("click", function () {
    localStorage.setItem(
        "visitorName",
        visitorName.value
    );

    localResult.textContent =
        localStorage.getItem("visitorName");

    visitorName.value = "";
});

const draftMessage = document.getElementById("draftMessage");
const saveSessionBtn = document.getElementById("saveSessionBtn");
const sessionResult = document.getElementById("sessionResult");

sessionResult.textContent =
    sessionStorage.getItem("draftMessage") || "No draft";

saveSessionBtn.addEventListener("click", function () {
    sessionStorage.setItem(
        "draftMessage",
        draftMessage.value
    );

    sessionResult.textContent =
        sessionStorage.getItem("draftMessage");

    draftMessage.value = "";
});

// Geolocation API
const locationBtn = document.getElementById("locationBtn");
const locationResult = document.getElementById("locationResult");

locationBtn.addEventListener("click", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            showPosition,
            showError
        );
    } else {
        locationResult.textContent =
            "Geolocation is not supported by this browser.";
    }
});

function showPosition(position) {
    locationResult.innerHTML = `
        <p><strong>Latitude:</strong> ${position.coords.latitude}</p>
        <p><strong>Longitude:</strong> ${position.coords.longitude}</p>
    `;
}

function showError() {
    locationResult.textContent =
        "Unable to get location. Please allow location permission.";
}

// Fetch API
const fetchBtn = document.getElementById("fetchBtn");
const axiosBtn = document.getElementById("axiosBtn");
const apiResult = document.getElementById("apiResult");

fetchBtn.addEventListener("click", function () {
    apiResult.innerHTML =
        "<p class='col-span-3 text-center'>Loading with Fetch API...</p>";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP Error");
            }

            return response.json();
        })
        .then(function (data) {
            displayUsers(data.slice(0, 6));
        })
        .catch(function (error) {
            apiResult.innerHTML =
                `<p class="text-red-600">${error}</p>`;
        });
});

// Axios
axiosBtn.addEventListener("click", function () {
    apiResult.innerHTML =
        "<p class='col-span-3 text-center'>Loading with Axios...</p>";

    axios
        .get("https://jsonplaceholder.typicode.com/users/1")
        .then(function (response) {
            displayUsers([response.data]);
        })
        .catch(function (error) {
            apiResult.innerHTML =
                `<p class="text-red-600">${error}</p>`;
        });
});

// Display api data
function displayUsers(users) {
    apiResult.innerHTML = "";

    users.forEach(function (user) {
        const card = document.createElement("div");

        card.className =
            "border rounded-lg p-6 shadow bg-gray-50";

        card.innerHTML = `
            <h3 class="text-xl font-bold text-gray-900 mb-2">
                ${user.name}
            </h3>

            <p class="text-gray-600">
                ${user.email}
            </p>

            <p class="text-sm text-blue-600 mt-3">
                ${user.company.name}
            </p>
        `;

        apiResult.appendChild(card);
    });
}

//json parse and stringify
document
    .getElementById("parseBtn")
    .addEventListener("click", function () {

        const jsonText =
            `{
                "name": "John",
                "age": 25,
                "skills": ["HTML", "CSS", "JavaScript"]
            }`;

        const objectData =
            JSON.parse(jsonText);

        document.getElementById("parseResult").textContent =
            "Name: " + objectData.name + "\n" +
            "Age: " + objectData.age + "\n" +
            "Skills: " + objectData.skills.join(", ");
    });

document
    .getElementById("stringifyBtn")
    .addEventListener("click", function () {

        const student = {
            name: "Anna",
            age: 22,
            isStudent: true,
            skills: ["HTML", "Tailwind CSS", "JavaScript"]
        };

        const json =
            JSON.stringify(student, null, 2);

        document.getElementById("stringifyResult").textContent =
            json;
    });

