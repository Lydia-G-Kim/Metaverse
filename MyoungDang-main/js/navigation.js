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
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const loginError = document.getElementById("loginError");

  if (!email || !password) {
    loginError.textContent = "이메일과 비밀번호를 모두 입력해주세요.";
    return;
  }

  loginError.textContent = "";

  setLoggedInUser(email, "1인 가구", "직장인");
  moveTo("lrod");
}

function signupUser() {
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const household = document.getElementById("signupHousehold").value;
  const job = document.getElementById("signupJob").value;
  const signupError = document.getElementById("signupError");

  if (!name || !email || !password || !household || !job) {
    signupError.textContent = "회원가입 정보를 모두 입력해주세요.";
    return;
  }

  signupError.textContent = "";

  setLoggedInUser(name, household, job);
  moveTo("lrod");
}

function setLoggedInUser(name, household, job) {
  const userArea = document.getElementById("userArea");
  const mypageUserInfo = document.getElementById("mypageUserInfo");

  if (userArea) {
    userArea.innerHTML = `
      <div class="user-menu">
        <span class="user-profile">${name} · ${household} · ${job}</span>
        <button class="mypage-btn" onclick="moveTo('mypage')">마이페이지</button>
        <button class="logout-btn" onclick="logoutUser()">로그아웃</button>
      </div>
    `;
  }

  if (mypageUserInfo) {
    mypageUserInfo.textContent = `${name} · ${household} · ${job}`;
  }
}

function logoutUser() {
  const userArea = document.getElementById("userArea");

  if (userArea) {
    userArea.innerHTML = `
      <button class="top-auth-btn" onclick="moveTo('login')">로그인</button>
      <button class="top-auth-btn signup" onclick="moveTo('signup')">회원가입</button>
    `;
  }

  moveTo("login");
}