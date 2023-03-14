let catLocation = document.querySelector("footer");
const form = document.querySelector("#form");
const url = "https://aws.random.cat/meow?ref=apilist.fun";

form.addEventListener("submit", handleSubmission);

function handleSubmission(evt) {
  const { name, email, tel } = form.elements;
  var message = ["Please resolve the following errors:\n"];
  if (!name.value) message.push("No name was provided\n");
  if (!email.value) message.push("No email was provided\n");
  if (!tel.value) message.push("No phone number was provided");

  if (message.length > 1) {
    evt.preventDefault();
    alert(message.join("-"));
  } else
    alert(
      "Thank you for contacting me! I return messages with 3 business days."
    );
}

const fetchData = (url) => {
  // Add your code here
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let element = document.createElement("img");
      element.src = data.file;
      element.style.maxHeight = "100px";
      catLocation.style.display = "flex";
      catLocation.style.justifyContent = "center";
      let text = document.createElement("h2");
      text.textContent = "Thanks for visiting my site!";

      catLocation.appendChild(element);
      catLocation.appendChild(text);
    })
    .catch((error) => {
      console.log(error);
    });
};
fetchData(url);
