* heroButton = document.querySelector("section#hero button");
const form = document.querySelector("section#contact form");

heroButton.addEventListener("click", function() {
  window.scroll({
    top: document.querySelector("section#products").offsetTop,
    behavior: "smooth"
  });
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = form.querySelector("input[placeholder='Your Name']").value;
  const email = form.querySelector("input[placeholder='Your Email']").value;
  const message = form.querySelector("textarea").value;
  if (!name || !email || !message) {
    alert("Please fill out all the fields.");
  } else {
    alert(`Thank you, ${name}! Your message has been sent.`);
    form.reset();
  }
});
