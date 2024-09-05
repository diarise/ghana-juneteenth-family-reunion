document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const button = item.querySelector('.accordion-button');
        const content = item.querySelector('.accordion-content');

        button.addEventListener('click', function() {
            const isActive = button.classList.contains('active');

            // Close all accordion items
            document.querySelectorAll('.accordion-button').forEach(btn => {
                btn.classList.remove('active');
                btn.nextElementSibling.style.maxHeight = null;
                btn.nextElementSibling.style.padding = '0 15px';
            });

            // Toggle the clicked item
            if (!isActive) {
                button.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '15px';
            } else {
                content.style.maxHeight = null;
                content.style.padding = '0 15px';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const fixedButton = document.querySelector('.fixed-cta-button');
    const heroButton = document.querySelector('.hero-content .cta-button');

    function toggleFixedButton() {
        const heroButtonRect = heroButton.getBoundingClientRect();
        if (heroButtonRect.bottom < 0) {
            fixedButton.classList.add('visible');
        } else {
            fixedButton.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', toggleFixedButton);
    toggleFixedButton(); // Initial check in case the user loads the page scrolled down
});

document.addEventListener("DOMContentLoaded", function() {
    // Get modal and buttons
    const modal = document.getElementById("termsModal");
    const openModalButtons = document.querySelectorAll(".cta-button, .fixed-cta-button");
    const closeModal = document.querySelector(".close-modal");
    const termsForm = document.getElementById("termsForm");

    // Open modal on button click
    if (openModalButtons) {
        openModalButtons.forEach(button => {
            button.addEventListener("click", function(e) {
                e.preventDefault();
                if (modal) {
                    modal.style.display = "block";
                } else {
                    console.error("Modal not found.");
                }
            });
        });
    }

    // Close modal on close button click
    if (closeModal) {
        closeModal.addEventListener("click", function() {
            if (modal) {
                modal.style.display = "none";
            }
        });
    }

    // Close modal when clicking outside the modal content
    window.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle form submission
    if (termsForm) {
        termsForm.addEventListener("submit", function(e) {
            e.preventDefault();

            // Retrieve email value
            const email = document.getElementById("email").value;

            // Validate email
            if (email) {
                // Send email via EmailJS
                emailjs.send("service_xqn2q0i", "template_fpz35bb", {
                    email: email, // Pass the user's email correctly
                    to_name: "Admin", // Adjust this as needed
                    from_name: "Website User", // Adjust this as needed
                    message: "User has agreed to the terms and conditions." // Custom message
                })
                .then(function() {
                    window.location.href = "https://travefy.com/f/6ws9rqrqd7wqra2uwxzupp58heab97fw5a/full?q=1726755";
                })
                .catch(function(error) {
                    console.error("Failed to send email:", error);
                    alert("Failed to send email. Please try again later.");
                });
            } else {
                alert("Please enter a valid email address.");
            }
        });
    } else {
        console.error("Terms form not found.");
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// document.addEventListener('DOMContentLoaded', function() {
//     const termsAgreed = localStorage.getItem('termsAgreed');
    
//     if (termsAgreed === 'true') {
//         document.getElementById('terms-form').style.display = 'none';
//         document.getElementById('confirmation-message').style.display = 'block';
//     }
// });


document.addEventListener("DOMContentLoaded", function() {
  const heroBanner = document.querySelector(".hero-banner");
  heroBanner.style.backgroundImage = "url('images/ghana-banner.webp')";
});
