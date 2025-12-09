document.addEventListener("DOMContentLoaded", async function () {
  const includeTargets = document.querySelectorAll("[include-html]");

  for (const el of includeTargets) {
    const file = el.getAttribute("include-html");

    try {
      const resp = await fetch(file);
      if (!resp.ok) throw new Error(`Failed to fetch ${file}`);

      let html = await resp.text();

      // Trim whitespace (CRITICAL FIX)
      html = html.trim();

      // Replace the entire element (do NOT keep wrapper <div>)
      const template = document.createElement("template");
      template.innerHTML = html;

      el.replaceWith(template.content);

      // Dispatch event for JS initializers
      document.dispatchEvent(
        new CustomEvent("include-loaded", { detail: { file } })
      );
    } catch (e) {
      console.error("Include error:", e);
      el.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
    }
  }
});
