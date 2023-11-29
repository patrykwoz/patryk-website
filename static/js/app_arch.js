document.addEventListener('DOMContentLoaded', function () {
    const heroContainer = document.querySelector('.hero-container');
    const contentContainer = document.querySelector('.content-container');
    const navBar = document.querySelector('.nav-bar');
    const navArrow = document.querySelector('.nav-arrow');

    function fetchTemplate(url, container) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                container.innerHTML = '';
                container.innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching template:', error);
            });
    }

    function handleScroll() {
        const scrollPositionVh = (window.scrollY / window.innerHeight) * 100;
        navBar.style.transform = scrollPositionVh >= 30 ? 'translateY(-100%)' : 'translateY(0)';
        navArrow.style.transform = scrollPositionVh >= 30 ? 'translateY(-150%)' : 'translateY(0)';
    }

    function handleProjectLinkClick(event) {
        if (event.target.classList.contains("project-card-hover")) {
            console.log("Navigating to project", event.target.href);
            // Navigation logic or additional handling...
        }
    }

    fetchTemplate('templates/home_hero.html', heroContainer);
    fetchTemplate('templates/home_content.html', contentContainer);

    contentContainer.addEventListener('click', handleProjectLinkClick);
    window.addEventListener('scroll', handleScroll);

    document.querySelector('a[href="#nav-top"]').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
