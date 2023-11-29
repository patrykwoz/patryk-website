const heroHeading = document.createElement('div')
heroHeading.classList.add('hero-heading-container');
heroHeading.innerHTML = `
    <p class="hero-heading">Blending Computer Science, Design and Fabrication to <span class="span-highlight">Fine-Tune</span> Our Future Habitats</p>
`;

const heroCanvas = document.createElement('div')
heroCanvas.classList.add('canvas-container')
heroCanvas.innerHTML = `
    <canvas></canvas>
`;

const projectsHeading = document.createElement('h2')
projectsHeading.innerText=`
Highlighted Projects
`;

const projectsContainer = document.createElement('div');
projectsContainer.classList.add('project-container');

const adaptiveArtifacts = document.createElement('div');
adaptiveArtifacts.classList.add('project-card');
adaptiveArtifacts.setAttribute('data-project-link', 'templates/adaptiveArtifacts.js');
adaptiveArtifacts.innerHTML = `
<div class="project-card-header">
    <p class="project-card-header-timeline">2012</p>
    <p class="project-card-header-type">Applied Research</p>
</div>
<p class="project-title">Adaptive Artifacts</p>
<div class="project-image">
    <img src="assets/adaptive_artifacts/IMG_4909_cropped.jpg" alt=""> 
</div>
`;
adaptiveArtifacts.addEventListener('mouseenter', handleMouseEnter);
adaptiveArtifacts.addEventListener('mouseleave', handleMouseLeave);
adaptiveArtifacts.addEventListener('click', function(e){
    const projectCard = e.target;
    if (projectCard) {
        heroContainer.innerHTML = '';
        contentContainer.innerHTML = '';
        appendDomObjects(heroContainer, adaptiveArtifactsHeroObjects);
        appendDomObjects(contentContainer, adaptiveArtifactsContentObjects);   
    }
});

projectsContainer.appendChild(adaptiveArtifacts);
// SHORT STATEMENT ELEMENT
const shortStatement = document.createElement('div');
shortStatement.innerHTML = `
<div class="short-statement">
    <p class="iam">
        I’m a computational designer and maker of things.
    </p>
    <p class="iam">
        I specialize in solving real-world problems through a unique blend of computational design thinking, algorithm development, computer programming, and design for digital fabrication.
    </p>
</div>
`;

const homeHeroObjects = [heroHeading, heroCanvas];
const homeContentObjects = [shortStatement, projectsHeading, projectsContainer];