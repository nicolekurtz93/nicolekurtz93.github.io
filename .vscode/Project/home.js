const form = document.querySelector("form");
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
