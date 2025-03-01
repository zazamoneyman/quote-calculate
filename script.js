function calculateQuote() {
    let homeSize = document.getElementById("homeSize").value;
    let windowOutside = document.getElementById("windowOutside").checked;
    let windowInsideOutside = document.getElementById("windowInsideOutside").checked;
    let postConstruction = document.getElementById("postConstruction").checked;
    let gutterCleaning = document.getElementById("gutterCleaning").checked;
    let total = 0;

    // Apply service pricing
    if (windowOutside) total += homeSize * 0.07;
    if (windowInsideOutside) total += homeSize * 0.13;
    if (postConstruction) total += homeSize * 0.2;

    // Gutter Cleaning Pricing Logic
    if (gutterCleaning) {
        if (windowOutside || windowInsideOutside) {
            total += 100; // Discounted price when ordering window cleaning
        } else {
            total += homeSize * 0.07; // Full price if ordered alone
        }
    }

    // Apply minimum price rule
    if (total < 150) {
        total = 150;
    }

    document.getElementById("quote").innerText = "Estimated Price: $" + total.toFixed(2);
}
