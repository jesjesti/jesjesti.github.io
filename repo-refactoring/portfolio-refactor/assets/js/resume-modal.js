document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".resume-item");

  items.forEach((item) => {
    const details = item.querySelector("ul");
    if (!details) return;

    const btn = document.createElement("button");
    btn.className = "view-details";
    btn.textContent = "View details";
    item.appendChild(btn);

    btn.addEventListener("click", () => {
      document.getElementById("resumeModalTitle").innerText =
        item.querySelector("h4")?.innerText ?? "";
      document.getElementById("resumeModalSubtitle").innerText =
        item.querySelector("h5")?.innerText ?? "";
      document.getElementById("resumeModalCompany").innerHTML =
        item.querySelector("p em")?.innerHTML ?? "";
      document.getElementById("resumeModalBody").innerHTML = details.outerHTML;

      new bootstrap.Modal(document.getElementById("resumeDetailModal")).show();
    });
  });
});
