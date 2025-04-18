document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("toggleBtn");

    function updateButton(state) {
        button.textContent = `Turn ${state === "ON" ? "OFF" : "ON"}`;
        button.dataset.state = state;
    }

    fetch("/state")
        .then(res => res.json())
        .then(data => updateButton(data.state));

    button.addEventListener("click", () => {
        fetch("/toggle", {
            method: "POST"
        })
        .then(res => res.json())
        .then(data => updateButton(data.state));
    });
});
