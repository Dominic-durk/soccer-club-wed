document.addEventListener("DOMContentLoaded", () => {
  //Example of DOM manipulation: showing an alert on form submission
  const form = document.querySelector("form");

  form.addEventListener("submit", (Event) => {
    Event.preventDefault();
    alert("your form has been submitted");
  });
});
