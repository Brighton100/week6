// 1. Event Handling - Button Click to Change Color/Text
document.getElementById("colorChangeButton").addEventListener("click", function() {
    this.style.backgroundColor = this.style.backgroundColor === "green" ? "#3498db" : "green";
    this.textContent = this.style.backgroundColor === "green" ? "Color Changed!" : "Click Me to Change Color";
});

// 2. Hover Effects - Image Gallery Zoom
const galleryImages = document.querySelectorAll(".gallery-image");
galleryImages.forEach(image => {
    image.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.1)";
        image.style.filter = "brightness(1.2)";
    });
    image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)";
        image.style.filter = "brightness(1)";
    });
});

// 3. Accordion Functionality - Toggle Content
const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
}

// 4. Form Validation with Real-Time Feedback
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (!email || !password || password.length < 8) {
        alert("Please fill in all fields correctly!");
        event.preventDefault(); // Prevent form submission if validation fails
    } else {
        alert("Form submitted successfully!");
    }
});

// 5. Secret Action - Double Click or Long Press on Button
document.getElementById("colorChangeButton").addEventListener("dblclick", function() {
    alert("Secret Action Triggered by Double-Click!");
});
