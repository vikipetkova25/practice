document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
    const fullName = document.getElementById('full-name');
    const email = document.getElementById('email');
    const mobile = document.getElementById('mobile');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const readMoreBtn = document.getElementById('readMoreBtn');
    const moreContent = document.getElementById('moreContent');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    function sendEmail() {
        const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Mobile: ${mobile.value}<br> Message: ${message.value}`;
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "victoriqp65@gmail.com",
            Password: "9814DB5D508BA3EEC34A84A6CEE73EA4645",  // Sensitive info should be handled securely
            To: 'victoriqp65@gmail.com',
            From: email.value,
            Subject: subject.value,
            Body: bodyMessage
        }).then(
            message => {
                alert("Email sent successfully!");
                console.log(message);
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        ).catch(err => {
            console.error("Error sending email:", err);
            Swal.fire({
                title: "Error!",
                text: "Failed to send message. Please try again later.",
                icon: "error"
            });
        });
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        sendEmail();
    });

    readMoreBtn.addEventListener('click', () => {
        moreContent.style.display = moreContent.style.display === 'none' ? 'block' : 'none';
        readMoreBtn.textContent = moreContent.style.display === 'none' ? 'Read More' : 'Show Less';
    });

    function setTheme(isDark) {
        document.body.classList.toggle('dark-mode', isDark);
        themeToggleBtn.textContent = isDark ? ' Light Mode' : ' Dark Mode';
    }

    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        setTheme(true);
    }

    themeToggleBtn.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        setTheme(isDarkMode);
    });

    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () =>  {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };
});

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
});

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        themeToggle.textContent = body.classList.contains("dark-theme") ? "Light Mode" : "Dark Mode";
    });