document.addEventListener('DOMContentLoaded', function () {
    console.log("hello");
    const contentContainer = document.querySelector('.content-container');

    function handleMouseOver(event) {
        // Find the closest .project-card to the event target
        let projectCard = event.target.closest('.project-card');
        if (projectCard) {
            // Handle mouse enter
            console.log('Mouse entered', projectCard);
        }
    }

    function handleMouseOut(event) {
        // Find the closest .project-card to the event target
        let projectCard = event.target.closest('.project-card');
        if (projectCard) {
            // Handle mouse leave
            console.log('Mouse left', projectCard);
        }
    }

    contentContainer.addEventListener('mouseover', handleMouseOver);
    contentContainer.addEventListener('mouseout', handleMouseOut);
});
