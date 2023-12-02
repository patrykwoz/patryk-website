document.addEventListener('DOMContentLoaded', function () {
    




    function handleScroll() {
        const scrollPositionVh = (window.scrollY / window.innerHeight) * 100;
        navBar.style.transform = scrollPositionVh >= 30 ? 'translateY(-100%)' : 'translateY(0)';
        navArrow.style.transform = scrollPositionVh >= 30 ? 'translateY(-135%)' : 'translateY(0)';
    }

    function handleProjectLinkClick(event) {
        if (event.target.tagName === 'A' && event.target.classList.contains("project-card-hover")) {
            console.log("let's go to that project", event.target)
        }
    }

    function handleMouseMove(e) {
        const projectCard = e.target.closest('.project-card');

        if (projectCard) {
            const myElement = projectCard.querySelector('.project-image');

            if (myElement && window.innerWidth > 650) {
                const rect = projectCard.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                myElement.style.left = x + 'px';
                myElement.style.top = y + 'px';
                
            }
        }
    }


    contentContainer.addEventListener('mousemove', handleMouseMove);
    appendDomObjects(heroContainer, homeHeroObjects);
    appendDomObjects(contentContainer, homeContentObjects);

    handleQueryParameters();

    window.addEventListener('resize', function(e){
        if (window.innerHeight < 850){
            setElementHeightToWindoInnerHeight(heroContainer);
        };
    });

    if (window.innerHeight < 850){
        setElementHeightToWindoInnerHeight(heroContainer);
    };
    







    // insertHtml(heroContainer, heroHome);
    // insertHtml(contentContainer, contentHome);


    contentContainer.addEventListener('click', handleProjectLinkClick);

    window.addEventListener('scroll', handleScroll);


    document.querySelector('a[href="#nav-top"]').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to the top
        });
    });
});
