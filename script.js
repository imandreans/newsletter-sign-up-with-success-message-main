const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Using e.target #1 FormData constructor
  const data = new FormData(e.target);
  const email = data.get("email"); //get email value

  // Using e.target #2 convert from formData to Object
  //   const data = Object.fromEntries(new FormData(e.target));
  //   const email = data;

  // Using e.target #3 get value using input
  //   const data = e.target.querySelector("input");
  //   const email = data.value;

  // get element
  // const email = document.getElementById("email").value;

  //   [^\s@] -> only words no whitspace and @ (there can be only one @ in email)
  //   @ -> one @ in email
  //   \. -> dot in email after @

  console.log(email);
  const reg = /[^\s@]+@([^\s@]+\.[^\s@])/;
  console.log(reg.test(email));
  const inputEmail = document.getElementById("email");
  if (reg.test(email)) {
    inputEmail.classList = "";
    const subscribingSuccess = document.getElementById("subscribing-success");
    const newsletterForm = document.getElementById("newsletter-form");
    const span = document.querySelector("#subscribing-success span");
    subscribingSuccess.style.display = "flex";
    newsletterForm.style.display = "none";
    span.innerHTML += email;
  } else {
    inputEmail.classList.add("no-validate");
    const wrongInputLabel = document.querySelector("#input-label span");
    wrongInputLabel.style.display = "flex";
  }
});

const dismissMessage = document.getElementById("dismiss-message");

dismissMessage.addEventListener("click", (e) => {
  location.reload();
});
