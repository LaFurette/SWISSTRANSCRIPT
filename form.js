const form = document.getElementById("contactForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch("/srv/mail.php", {
        method: "POST",
        body: formData,
    })
    .then((res) => res.json())
    .then((res) => {
      console.log("res", res);
      if (res.result == 1)
      {
        alert("Message envoyé", "success");
        e.target.reset();
      }
      else
      {
        alert(res.message || "Une erreur c'est produite");
      }
    })
    .catch((err) => {
      alert("Une erreur c'est produite");
      console.log("err", err);
    });
});

function alert(message, status) {
  const classToToggle =
    status === "success" ? "text-green-500" : "text-red-500";
  const messageWrapper = document.getElementById("form-message");
  messageWrapper.classList.add(classToToggle);
  messageWrapper.innerHTML = message;
  setTimeout(() => {
    messageWrapper.classList.remove(classToToggle);
    messageWrapper.innerHTML = "";
  }, 4000);
}
