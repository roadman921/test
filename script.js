document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggleBtn");
  let state = localStorage.getItem("switchState") || "OFF";
  updateButton(state);

  button.addEventListener("click", () => {
    const newState = state === "ON" ? "OFF" : "ON";
    localStorage.setItem("switchState", newState);
    state = newState;
    updateButton(state);

    // Open GitHub Issue via link (manual - no token needed)
    const issueTitle = encodeURIComponent(`Switch to ${state}`);
    const issueURL = `https://github.com/roadman921/test/issues/new?title=${issueTitle}`;
    window.open(issueURL, "_blank");
  });

  function updateButton(state) {
    button.textContent = `Turn ${state === "ON" ? "OFF" : "ON"}`;
  }
});
