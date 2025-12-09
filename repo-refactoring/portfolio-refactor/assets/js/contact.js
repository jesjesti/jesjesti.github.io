document.addEventListener("submit", function (e) {
  const form = document.getElementById("contactForm");
  if (!form) return;

  e.preventDefault();

  const name = encodeURIComponent(document.getElementById("name-field").value);
  const email = encodeURIComponent(
    document.getElementById("email-field").value
  );
  const subject = encodeURIComponent(document.getElementById("subject").value);
  const body = encodeURIComponent(document.getElementById("body").value);

  const recipient = "jesjesti007@gmail.com";
  const mailToLink = `mailto:${recipient}?subject=${subject}&body=Name:%20${name}%0AEmail:%20${email}%0A%0A${body}`;

  window.location.href = mailToLink;
});
