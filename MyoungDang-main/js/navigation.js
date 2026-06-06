function moveTo(pageId) {
      const pages = document.querySelectorAll(".page");
      const steps = document.querySelectorAll(".step");

      pages.forEach(page => page.classList.remove("active"));
      steps.forEach(step => step.classList.remove("active"));

      document.getElementById(pageId).classList.add("active");

      const stepMap = {
        lrod: 0,
        teo: 1,
        master: 2,
        map: 3,
        decision: 4
      }

function goHome() {

      moveTo('lrod');

      const chatWindow =
        document.getElementById('chatWindow');

      if (chatWindow) {
        chatWindow.scrollTop = 0;
      }