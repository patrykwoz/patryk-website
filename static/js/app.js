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

    function handleMouseOver(event) {
        if (event.target.tagName === 'IMG') {
            const imageContainer = event.target.parentElement;
            const projectTitle = imageContainer.parentElement.getAttribute('data-project-title');

            if (!imageContainer.querySelector('.project-card-hover')) {
                const hoverElement = document.createElement('a');
                hoverElement.textContent = projectTitle;
                hoverElement.className = 'project-card-hover';
                imageContainer.appendChild(hoverElement);
            }
        }
    }

    function handleMouseOut(event) {
        if (event.target.tagName === 'IMG') {
            const imageContainer = event.target.parentElement;
            const hoverElement = imageContainer.querySelector('.project-card-hover');

            if (hoverElement) {
                // Delay the removal of hoverElement
                setTimeout(() => {
                    hoverElement.remove();
                }, 150);
            }
        }
    }

    function handleProjectLinkClick(event){
        if (event.target.tagName === 'A' && event.target.classList.contains("project-card-hover")) {
            console.log("let's go to that project", event.target)



        }
    }


    fetchTemplate('templates/home_hero.html', heroContainer);
    fetchTemplate('templates/home_content.html', contentContainer);

    contentContainer.addEventListener('click', handleProjectLinkClick);

    window.addEventListener('scroll', handleScroll);
    contentContainer.addEventListener('mouseover', handleMouseOver);
    contentContainer.addEventListener('mouseout', handleMouseOut);

    document.querySelector('a[href="#nav-top"]').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to the top
        });
    });
});
