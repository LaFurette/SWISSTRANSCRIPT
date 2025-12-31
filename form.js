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
        hideCaptacha();
      }
      else
      {
        alert(res.message || "Une erreur s'est produite");
      }
    })
    .catch((err) => {
      alert("Une erreur s'est produite");
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

var captchaShown = false;        
window.addEventListener("load", function() {
    let messageElem = document.getElementById('message');
    if (messageElem !== null)
    {
        console.log("value : " + messageElem.value );
        if (messageElem.value > "")
        {
            showCaptacha();
        }
        else 
        {
            messageElem.addEventListener('input', () => {
                if (!captchaShown)
                {
                    showCaptacha();
                }
            });
        }
    }
});
        
function showCaptacha() {
    let captchaDiv = document.getElementById('altcha_div');
    if (captchaDiv !== null)
    {
        captchaDiv.className = captchaDiv.className.replace("captcha-invisible","");
        captchaDiv.style.setProperty("display", "block", "important");
        captchaShown = true;
    }    
}        

function hideCaptacha() {
    let captchaDiv = document.getElementById('altcha_div');
    if (captchaDiv !== null)
    {
        captchaDiv.style.setProperty("display", "none", "important");
        captchaShown = false;
    }    
}  