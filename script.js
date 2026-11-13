document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const body = document.body;
    const contactForm = document.getElementById('contactForm');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');

    // Función para aplicar el tema y actualizar icono
    const applyTheme = (isDark) => {
        if (isDark) {
            body.classList.add('dark');
            darkModeIcon.classList.remove('fa-moon');
            darkModeIcon.classList.add('fa-sun');
        } else {
            body.classList.remove('dark');
            darkModeIcon.classList.remove('fa-sun');
            darkModeIcon.classList.add('fa-moon');
        }
    };

    // Detectar preferencia guardada en localStorage o prefers-color-scheme del sistema
    const savedTheme = localStorage.getItem('portfolioTheme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        applyTheme(true);
    } else {
        applyTheme(false);
    }

    // Evento click para alternar modo oscuro/claro
    darkModeToggle.addEventListener('click', () => {
        const isDarkNow = !body.classList.contains('dark');
        applyTheme(isDarkNow);
        localStorage.setItem('portfolioTheme', isDarkNow ? 'dark' : 'light');
    });

    // Escuchar cambios en tiempo real de la preferencia del sistema operativo
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('portfolioTheme')) {
                applyTheme(e.matches);
            }
        });
    }

    // Smooth Scroll para enlaces del Navbar y cierre automático en móvil
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }

                // Cerrar menú hamburguesa en móviles si está abierto
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // Envío simulado del formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Mensaje enviado! 📧');
            contactForm.reset();
        });
    }
    document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function () {
            body.classList.toggle("dark");

            // Cambiar el icono entre luna y sol
            if (body.classList.contains("dark")) {
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");
            } else {
                themeIcon.classList.remove("fa-sun");
                themeIcon.classList.add("fa-moon");
            }
        });
    }
});
});