document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form.needs-validation");

    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        alert("Your suggestion has been sent successfully!");
        const mailtoLink = createMailtoLink(form);
        window.location.href = mailtoLink;
      }

      form.classList.add("was-validated");
    });

    function createMailtoLink(form) {
      const name = encodeURIComponent(form.name.value);
      const email = encodeURIComponent(form.email.value);
      const suggestion = encodeURIComponent(form.suggestion.value);
      const topic = encodeURIComponent(form.topic.value);
      const consent = form.consent.checked ? "Yes" : "No";

      const subject = `Suggestion - ${topic}`;
      const body = `Name: ${name}\nEmail: ${email}\nSuggestion: ${suggestion}\nConsent Given: ${consent}`;

      return `mailto:buh@gmail.com?subject=${subject}&body=${body}`;
    }
  });