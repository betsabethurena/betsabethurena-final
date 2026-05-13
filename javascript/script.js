function toggleInfo(card) {
    const text = card.querySelector(".hidden-text");

    if (text.style.display === "block") {
        text.style.display = "none";
    } else {
        text.style.display = "block";
    }
}
function filterProducts() {
    const filter = document.getElementById("categoryFilter").value;
    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        if (filter === "all") {
            product.style.display = "block";
        } else {
            if (product.classList.contains(filter)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        }
    });
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        feedback.style.color = "red";
        feedback.textContent = "Please fill out all fields.";
        return false;
    }

    feedback.style.color = "green";
    feedback.textContent = "Message sent successfully! We will get back to you soon.";

    return false;
}