function moveTo(pageId) {
  const pages = document.querySelectorAll(".page");
  const steps = document.querySelectorAll(".step");

  pages.forEach(page => page.classList.remove("active"));
  steps.forEach(step => step.classList.remove("active"));

  const targetPage = document.getElementById(pageId);

  if (targetPage) {
    targetPage.classList.add("active");
  }

  const stepMap = {
    lrod: 0,
    teo: 1,
    master: 2,
    map: 3,
    decision: 4
  };

  if (stepMap[pageId] !== undefined && steps[stepMap[pageId]]) {
    steps[stepMap[pageId]].classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function goHome() {
  moveTo("lrod");

  const chatWindow = document.getElementById("chatWindow");

  if (chatWindow) {
    chatWindow.scrollTop = 0;
  }
}

function loginUser() {
  setLoggedInUser("박준혁", "1인 가구", "직장인");
  moveTo("lrod");
}

function signupUser() {
  const name = document.getElementById("signupName").value || "박준혁";
  const household = document.getElementById("signupHousehold").value || "1인 가구";
  const job = document.getElementById("signupJob").value || "직장인";

  setLoggedInUser(name, household, job);
  moveTo("lrod");
}

function setLoggedInUser(name, household, job) {
  const userArea = document.getElementById("userArea");

  if (userArea) {
    userArea.innerHTML = `${name} · ${household} · ${job}`;
  }
}