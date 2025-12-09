function initResumeModalFeature() {
  console.log("Initializing resume modal feature...");

  // Select all resume items (AFTER they exist)
  const items = document.querySelectorAll(".resume .resume-item");

  if (!items.length) {
    console.warn("No resume items found yet.");
    return;
  }

  items.forEach((item) => {
    const details = item.querySelector("ul");
    const title = item.querySelector("h4");
    const subtitle = item.querySelector("h5");
    const company = item.querySelector("p em");

    if (!details) return;

    // Ensure button only added once
    if (!item.querySelector(".view-details")) {
      const btn = document.createElement("button");
      btn.className = "view-details";
      btn.textContent = "View Details";
      item.appendChild(btn);

      btn.addEventListener("click", () => {
        document.getElementById("resumeModalTitle").innerText =
          title?.innerText || "";

        document.getElementById("resumeModalSubtitle").innerText =
          subtitle?.innerText || "";

        document.getElementById("resumeModalCompany").innerHTML =
          company?.innerHTML || "";

        document.getElementById("resumeModalBody").innerHTML =
          details.outerHTML;

        new bootstrap.Modal(
          document.getElementById("resumeDetailModal")
        ).show();
      });
    }
  });
}

// Run after DOM ready + after include-html loads components
document.addEventListener("DOMContentLoaded", initResumeModalFeature);
document.addEventListener("include-loaded", initResumeModalFeature);
